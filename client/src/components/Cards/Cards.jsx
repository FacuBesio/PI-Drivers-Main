import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  cleanAllDrivers,
  getAllDrivers,
  getDriversByQueryName,
} from "../../redux/actions_Drivers";
import { getAllTeams } from "../../redux/actions_Teams";
import { backPage, nextPage, setPage } from "../../redux/actions_Pages";
import { filterStatus, setOrders } from "../../redux/actions_Filters";
import { cleanErrors } from "../../redux/actions_Errors";
import { cleanHome } from "../../redux/actions_Pages";
import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const nameQuery = queryParams.get("name");

  //? REDUX STATES
  const allDrivers = useSelector((state) => state.allDrivers);
  const allTeams = useSelector((state) => state.allTeams);
  let page = useSelector((state) => state.page);
  const totalPages = useSelector((state) => state.totalPages);
  const orders = useSelector((state) => state.orders);
  const statusFilter = useSelector((state) => state.filterStatus);
  const homeCleaner = useSelector((state) => state.homeCleaner);
  const notFound_error = useSelector((state) => state.notFound_error);

  //? REACT STATES
  const filterInitialState = {
    filterTeams: "",
    filterDrivers: "",
  };
  const [filters, setFilters] = useState(filterInitialState);
  const [pageLimitBack, setPageLimitBack] = useState("");
  const [pageLimitNext, setPageLimitNext] = useState("");

  //? ORDERS & FILTERS
  const { orderNombre, orderNacimiento } = orders;
  const { filterTeams, filterDrivers } = filters;

  //* VALIDACION DE PAGE RESPECTO AL FILTRO
  if (page > 1 && (filterTeams || filterDrivers) && !statusFilter) {
    dispatch(setPage(1));
    page = 1;
  } else if (page > 1 && !filterTeams && !filterDrivers && statusFilter) {
    dispatch(setPage(1));
    page = 1;
  }

  //* LIMPIEZA DE FILTROS PARA HOME
  if (homeCleaner) {
    setFilters(filterInitialState);
    dispatch(cleanHome(false));
  }

  //? HANDLERS
  const handlerChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    return property === "orderNombre"
      ? dispatch(setOrders({ orderNombre: value, orderNacimiento: "" }))
      : property === "orderNacimiento"
      ? dispatch(setOrders({ orderNacimiento: value, orderNombre: "" }))
      : setFilters({ ...filters, [property]: value });
  };

  //? PAGINATED
  //* SET PAGE
  page === "" ? dispatch(setPage(1)) : null;
  //* NEXT PAGE
  const handlerNextPage = () => {
    setPageLimitBack("");
    page < totalPages
      ? dispatch(nextPage(page))
      : setPageLimitNext("*Ya estas en la última página");
  };
  //* BACK PAGE
  const handlerBackPage = () => {
    setPageLimitNext("");
    page > 1
      ? dispatch(backPage(page))
      : setPageLimitBack("*Ya estas en la primera página");
  };

  //* ERRORS CLEANER
  const errorsCleaner = () => {
    setFilters(filterInitialState);
    dispatch(cleanErrors());
    dispatch(getAllDrivers(page, orders, filterInitialState));
    navigate("/home");
  };

  //? COMPONENT MOUNTING
  useEffect(() => {
    setPageLimitBack("");
    setPageLimitNext("");

    filterTeams === "" && filterDrivers === ""
      ? dispatch(filterStatus(false))
      : dispatch(filterStatus(true));

    dispatch(getAllTeams());

    nameQuery
      ? dispatch(getDriversByQueryName(nameQuery, page, orders, filters))
      : dispatch(getAllDrivers(page, orders, filters));
    return () => dispatch(cleanAllDrivers());
  }, [
    nameQuery,
    page,
    orderNombre,
    orderNacimiento,
    filterTeams,
    filterDrivers,
  ]);

  return (
    <div className={style.cardsContainer}>
      <div className={style.cardsHeader}>
        {/* ORDER NOMBRE */}
        <select
          id="orderNombre"
          name="orderNombre"
          onChange={handlerChange}
          value={orderNombre}
        >
          <option value="" disabled="disabled">
            Ordenar Nombre
          </option>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
          <option value="">Clean...</option>
        </select>

        {/* ORDER FECHA NACIMIENTO */}
        <select
          id="orderNacimiento"
          name="orderNacimiento"
          onChange={handlerChange}
          value={orderNacimiento}
        >
          <option value="" disabled="disabled">
            Ordenar Edad
          </option>
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
          <option value="">Clean...</option>
        </select>

        {/* FILTER TEAMS */}
        <select
          id="filterTeams"
          name="filterTeams"
          onChange={handlerChange}
          value={filterTeams}
        >
          <option value="">All Teams</option>
          <option value="">Clean...</option>
          {allTeams?.map((team) => {
            return (
              <option key={team.id} value={team.nombre}>
                {team.nombre}
              </option>
            );
          })}
        </select>

        {/* FILTER DRIVERS ORIGIN */}
        <select
          id="filterDrivers"
          name="filterDrivers"
          onChange={handlerChange}
          value={filterDrivers}
        >
          <option value="">All Drivers</option>
          <option value="api_drivers">API Drivers</option>
          <option value="db_drivers">DataBase Drivers</option>
          <option value="">Clean...</option>
        </select>
      </div>

      {/* CARDS */}
      <h1>DRIVERS</h1>
      {nameQuery ? <h1>' {nameQuery} '</h1> : null}
      <div className={style.cards}>
        {notFound_error !== "" ? (
          <h4>NO SE HAN ENCONTRADO RESULTADOS</h4>
        ) : (
          allDrivers?.map((driver) => <Card key={driver.id} driver={driver} />)
        )}
      </div>

      <div className={style.buttonsCards}>
        {notFound_error !== "" ? (
          <div>
            <button onClick={errorsCleaner}>Volver</button>
          </div>
        ) : (
          <div className={style.buttonsPage}>
            <div>
              <button onClick={handlerBackPage}>Back</button>
              <button name="page">{page}</button>
              <button name="separator">/</button>
              <button name="totalPages">{totalPages}</button>
              <button onClick={handlerNextPage}>Next</button>
            </div>
            <div className={style.pageLimit}>
              <span>{pageLimitBack}</span>
              <span>{pageLimitNext}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
