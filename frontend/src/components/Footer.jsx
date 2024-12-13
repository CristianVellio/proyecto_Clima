import footerLogo from "../assets/FooterLogo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-quaternary text-white py-10 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img src={footerLogo} alt="logo" className="mb-5 w-36 rounded-md" />
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <a href="#home" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#servicios" className="hover:text-primary">
                Servicios
              </a>
            </li>
            <li>
              <a href="#nosotros" className="hover:text-primary">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-primary">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 w-full">
          <p className="mb-4">
            ¡Suscribete a nuestro boletín informativo para recibir las nuevas
            actualizacoines, noticias y ofertas!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Escribe tu email"
              className="w-full px-4 py-2 rounded-1-md text-black"
            />
            <button className="bg-primary px-6 py-2 rounded-r-md hover:bg-primary-dark">
              Suscribirse
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li>
            <a href="#privacidad" className="hover:text-primary">
              Politica de Privacidad
            </a>
          </li>
          <li>
            <a href="#terminos" className="hover:text-primary">
              Terminos y Condiciones
            </a>
          </li>
        </ul>

        <div className="flex gap-6">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaXTwitter size={24} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
