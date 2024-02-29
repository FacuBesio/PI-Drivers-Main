{
  notFound !== "" ? (
    <div>
      <Link to={`/home`}>
        <button>Volver</button>
      </Link>
    </div>
  ) : (
    <div>
      <button onClick={handlerBackPage}>Back</button>
      <button name="page">{page}</button>
      <button name="separator">/</button>
      <button name="totalPages">{totalPages}</button>
      <button onClick={handlerNextPage}>Next</button>
    </div>
  );
}
