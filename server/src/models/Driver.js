const { DataTypes } = require("sequelize");

module.exports = (dataBase) => {
  dataBase.define(
    "Driver",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, // Para utilizar uuid_generate_v4() de PostgreSQL
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "nombre_apellido_constraint",
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: "nombre_apellido_constraint",
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
      },
      nacionalidad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha_Nacimiento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
