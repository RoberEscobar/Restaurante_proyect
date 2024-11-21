export const Inicio = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2c3e50" }}>
        <div className="container">
          <a
            className="navbar-brand"
            href="#"
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              fontSize: "1.8rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="logoc.png"
              alt="Logo Unicosta Delicias"
              className="img-fluid"
              style={{ maxWidth: "50px", marginRight: "10px" }}
            />
            COLOMBIAN FOOD
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home" style={{ color: "#ffffff" }}>
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#menu" style={{ color: "#ffffff" }}>
                  Menú
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://wa.me/+573135214443" style={{ color: "#ffffff" }}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="text-center py-5"
        style={{
          backgroundColor: "#f7f7f7",
          color: "#2c3e50",
          paddingTop: "3rem",
          paddingBottom: "3rem",
        }}
      >
        <div className="container">
          <h1 className="display-5" style={{ color: "#2c3e50" }}>
            BIENVENIDOS A UNICOSTA FOOD
          </h1>
          <a href="#menu" className="btn btn-danger btn-lg mt-3">
            Ver Menú
          </a>
        </div>
      </section>

      <section
        id="nosotros"
        className="d-flex align-items-center py-5"
        style={{ backgroundColor: "#ffffff", color: "#2c3e50" }}
      >
        <div className="container d-flex align-items-center">
          <div className="col-md-8">
            <h2 className="display-4 mb-4" style={{ color: "#2c3e50" }}>
              ¿Quiénes Somos?
            </h2>
            <p className="lead">
              En Unicosta Delicias nos apasiona la cocina tradicional colombiana. Cada uno de nuestros platos está hecho
              con ingredientes frescos y seleccionados, para brindarte una experiencia única. Nos
              enorgullece ofrecer una variedad de platos que representan lo mejor de nuestra cultura y tradición,
              siempre con un toque especial para que disfrutes en cada bocado.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="logoc.png"
              alt="Logo Unicosta Delicias"
              className="img-fluid"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          </div>
        </div>
      </section>

      <section id="menu" className="py-5" style={{ backgroundColor: "#ecf0f1" }}>
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: "#2c3e50" }}>
            MENÚ
          </h2>

          <div className="row justify-content-center">
            <div className="col-md-4 text-center mb-4">
              <div className="d-flex flex-column align-items-center">
                <div className="rounded-circle overflow-hidden" style={{ width: "200px", height: "200px" }}>
                  <img
                    src="arepah.png"
                    alt="Arepa de Huevo"
                    className="img-fluid"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <h4 className="mt-3">Arepa de Huevo</h4>
                <p>
                  La arepa de huevo es una arepa típica de la Región Caribe de Colombia, que se compone de arepa de maíz y huevo en el interior
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center mb-4">
              <div className="d-flex flex-column align-items-center">
                <div className="rounded-circle overflow-hidden" style={{ width: "200px", height: "200px" }}>
                  <img
                    src="papa.png"
                    alt="Papa rellena"
                    className="img-fluid"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <h4 className="mt-3">Papa rellena</h4>
                <p>
                Este tipo de papa es representativa de la gastronomía colombiana y se ha convertido en uno de nuestros símbolos cuando de cocina se trata.
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center mb-4">
              <div className="d-flex flex-column align-items-center">
                <div className="rounded-circle overflow-hidden" style={{ width: "200px", height: "200px" }}>
                  <img
                    src="pata.png"
                    alt="Patacon relleno"
                    className="img-fluid"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <h4 className="mt-3">Patacon relleno</h4>
                <p>
                El patacón relleno es una comida a base de trozos aplanados de plátano verde, tradicional en la culinaria de varios países de América Latina, principalmente de la cuenca del Caribe como Colombia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ubicacion" className="py-5" style={{ backgroundColor: "#f7f7f7", color: "#2c3e50" }}>
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: "#2c3e50" }}>
            Nuestra ubicación
          </h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.9596462611495!2d-74.7923567!3d10.9951608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d7974b945fd%3A0x58d2cc28a018ba1!2sUniversidad%20De%20La%20Costa%2C%20CUC!5e0!3m2!1ses-419!2sco!4v1700227200000!5m2!1ses-419!2sco"
                width="100%"
                height="350"
                allowFullScreen
                loading="lazy"
                title="Ubicación Universidad de la Costa"
              ></iframe>
            </div>
            <div className="col-md-6">
              <h3>Visítanos</h3>
              <p>Estamos ubicados en la Universidad de la Costa, Barranquilla.</p>
            </div>
          </div>
        </div>
      </section>
      <footer
        style={{
          backgroundColor: "#2c3e50",
          color: "#ffffff",
          padding: "2rem 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h5>Contáctanos</h5>
          <p>
            <a
              href="https://www.facebook.com/Roberto Escobar"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffffff", textDecoration: "none", margin: "0 10px" }}
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="https://wa.me/+573135214443"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffffff", textDecoration: "none", margin: "0 10px" }}
            >
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </p>
          <p>&copy; 2024 Unicosta Delicias | Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  );
};
