import React from "react";
import "./Footer.css";
import { NavLink, Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="background-footer">
      <div className="background-top-footer">
        <div className="imagenes-footer">
          <Link className="background-footer-mir" to="./">
            <img
              src="https://res.cloudinary.com/dco2buhwt/image/upload/v1699675102/Mir/Footer-Icon/od34zg4bx0ldpkadlwep.png"
              alt="logo-mir"
            />
          </Link>
          <Link
            className="background-footer-utn"
            to="http://www.frt.utn.edu.ar"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/dco2buhwt/image/upload/v1699674606/Mir/Footer-Icon/a69wlpdpbnecjqdpz73i.png"
              alt="logo-utn"
            />
          </Link>
        </div>
        <div className="redes-sociales-footer">
          <div>
            <h4 className="text-footer-seccion">Seguinos</h4>
          </div>
          <div className="redes-sociales-footer-logo">
            <Link to="https://www.instagram.com/mirestudiantes.tuc/" target="blank_">
              <img
                src="https://res.cloudinary.com/dco2buhwt/image/upload/v1699675710/Mir/Footer-Icon/uidoorvghvgufj0dbzlq.png"
                alt="logo-instagram"
              />
            </Link>
            <Link to="https://www.facebook.com/MIRUTNFRT" target="blank_">
              <img
                src="https://res.cloudinary.com/dco2buhwt/image/upload/v1699675839/Mir/Footer-Icon/ahfewhfiydppmydvu6ju.png"
                alt="logo-facebook"
              />
            </Link>
            <Link>
              <img
                src="https://res.cloudinary.com/dco2buhwt/image/upload/v1699675840/Mir/Footer-Icon/i6tayurbbwnr1ktxefh0.png"
                alt="logo-twitter"
              />
            </Link>
          </div>
        </div>
        <div className="contacto-footer">
          <div>
            <h4 className="text-footer-seccion">Contacto</h4>
          </div>
          <div className="contacto-footer-icono">
            <img
              src="https://res.cloudinary.com/dco2buhwt/image/upload/v1699676357/Mir/Footer-Icon/zdgecgtorjwvfyx7y4yw.png"
              alt="logo-reloj"
            />
            <span>Lunes a Viernes 8:00 - 22:00</span>
          </div>
          <div className="contacto-footer-icono">
            <img
              src="https://res.cloudinary.com/dco2buhwt/image/upload/v1699678370/Mir/Footer-Icon/oml1oebfdbqrbiq4wd7q.png"
              alt="logo-ubicacion"
            />
            <span>Rivadavia 1050 - San Miguel de Tucumán</span>
          </div>
          <div className="contacto-footer-icono">
            <img
              src="https://res.cloudinary.com/dco2buhwt/image/upload/v1699676362/Mir/Footer-Icon/xwhosf3mpzhvqk9a9sku.png"
              alt="logo-mail"
            />
            <span>Correo@gmail.com</span>
          </div>
          <div className="contacto-footer-icono">
            <img
              src="https://res.cloudinary.com/dco2buhwt/image/upload/v1699679915/Mir/Footer-Icon/ywdh3ihtwh8bcysoqfm0.png"
              alt="logo-telefono"
            />
            <span>3813255660</span>
          </div>
        </div>
      </div>

      <div className="background-creador">
        <span>Realizado por Mauro Villagra</span>
      </div>
    </footer>
  );
}

export default Footer;
