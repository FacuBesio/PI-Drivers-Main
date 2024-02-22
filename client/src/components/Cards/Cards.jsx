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
import { orderByName } from "../../redux/actions_Filters";
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
  const page = useSelector((state) => state.page);
  const totalPages = useSelector((state) => state.totalPages);

  //? REACT STATES
  const [orders_filters, setOrders_filters] = useState({
    orderNombre: "",
    orderNacimiento: "",
    filterTeams: "",
    filterDrivers: "",
  });

  const { orderNombre, orderNacimiento, filterTeams, filterDrivers } =
    orders_filters;
  const orders = { orderNombre, orderNacimiento };
  const filters = { filterTeams, filterDrivers };

  //? HANDLERS
  const handlerChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

    if (property === "orderNombre") {
      return setOrders_filters({
        ...orders_filters,
        [property]: value,
        orderNacimiento: "",
      });
    }

    if (property === "orderNacimiento") {
      return setOrders_filters({
        ...orders_filters,
        [property]: value,
        orderNombre: "",
      });
    }

    return setOrders_filters({
      ...orders_filters,
      [property]: value,
    });
  };

  //? PAGINATED
  //* SET PAGE
  page === "" ? dispatch(setPage(1)) : null;
  //* NEXT PAGE
  const handlerNextPage = () => {
    page < totalPages
      ? dispatch(nextPage(page))
      : alert(
          `Ya estas en la ultima página (${page}), de tu consulta '${nameQuery}'`
        );
  };
  //* BACK PAGE
  const handlerBackPage = () => {
    page > 1 && dispatch(backPage(page));
  };

  //? COMPONENT MOUNTING
  useEffect(() => {
    dispatch(getAllTeams());
    nameQuery
      ? dispatch(getDriversByQueryName(nameQuery, page, orders, filters))
      : dispatch(getAllDrivers(page, orders, filters));
    return () => dispatch(cleanAllDrivers());
  }, [nameQuery, page, orderNombre, orderNacimiento, filterDrivers]);

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
              <option key={team.id} value={team.id}>
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
      <div className={style.cards}>
        {allDrivers?.map((driver) => {
          return <Card key={driver.id} driver={driver} />;
        })}
      </div>
      <div className={style.buttonsPage}>
        <button onClick={handlerBackPage}>Back</button>
        <button name="page">{page}</button>
        <button name="separator">/</button>
        <button name="totalPages">{totalPages}</button>
        <button onClick={handlerNextPage}>Next</button>
      </div>
    </div>
  );
};

export default Cards;
