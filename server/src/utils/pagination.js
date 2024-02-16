const pagination = (drivers, page, pageSize) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const paginatedDrivers = drivers.slice(startIndex, endIndex);

  return paginatedDrivers;
};

module.exports = pagination;
