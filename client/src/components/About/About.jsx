import { useEffect } from "react";
import style from "./About.module.css";

const About = () => {
  //? COMPONENT MOUNTING
  useEffect(() => {
    document.body.style.backgroundImage =
      "url('../src/assets/img/backgruond_2.jpg')";
    return () => (document.body.style.backgroundImage = "");
  }, []);

  return (
    <div className={style.aboutContainer}>
      <h1>ABOUT</h1>
      <div className={style.about}>
        <h2>- DRIVERS - PI - </h2>
        <p>
          Aplicación web creada en Febrero de 2024. El desarrollo del front-end
          se realizo mediante el uso de JavaScript, React, Redux, HTML y CSS,
          mientras que el back-end se desarrollo con NODE.js, Express y
          Sequelize. El objetivo de la aplicación es brindar una navegación por
          los conductores que la API de 'Drivers' nos ofrece, y poder agregar
          nuestros propios conductores a la colección. Desde 'Home', se podrán
          buscar tanto por su nombre como por su número de id, así como también
          se podrán ordenar y filtrar los resultados para ajustar la búsqueda a
          las necesidades del momento. Se puede ingresar de manera individual a
          cada conductor para obtener sus detalles. En el caso de
          querer agregar conductores, bastará con ingresar al formulario de
          creación ubicado en 'Create'. 
        </p>
      </div>
    </div>
  );
};

export default About;
