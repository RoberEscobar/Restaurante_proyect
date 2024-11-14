export const Inicio = () => { 
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#2c3e50" }}>
        <div className="container">
          <a className="navbar-brand" href="#" style={{ color: "#ffffff", fontWeight: "bold", fontSize: "1.8rem" }}>
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
                <a className="nav-link" href="#contact" style={{ color: "#ffffff" }}>
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
            BIENVENIDOS A COLOMBIAN FOOD
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
              con ingredientes frescos y seleccionados, para brindarte una experiencia gastronómica única. Nos
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
                  Una deliciosa arepa frita rellena de huevo, típica de la región Caribe. Ideal para el desayuno o como
                  snack.
                </p>
                <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#arepaModal">
                  Leer Más
                </button>
              </div>
            </div>

            <div className="col-md-4 text-center mb-4">
              <div className="d-flex flex-column align-items-center">
                <div className="rounded-circle overflow-hidden" style={{ width: "200px", height: "200px" }}>
                  <img
                    src="Moja.png"
                    alt="Mojarra Frita"
                    className="img-fluid"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <h4 className="mt-3">Mojarra Frita</h4>
                <p>
                  Un plato tradicional de la costa Caribe, con pescado frito acompañado de arroz con coco y patacones.
                </p>
                <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#mojarraModal">
                  Leer Más
                </button>
              </div>
            </div>

            <div className="col-md-4 text-center mb-4">
              <div className="d-flex flex-column align-items-center">
                <div className="rounded-circle overflow-hidden" style={{ width: "200px", height: "200px" }}>
                  <img
                    src="lecho.png"
                    alt="Lechona"
                    className="img-fluid"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <h4 className="mt-3">Lechona</h4>
                <p>
                  Cerdo asado relleno de arroz, arvejas y cebolla, típico de la región Tolima, ideal para grandes
                  celebraciones.
                </p>
                <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#lechonaModal">
                  Leer Más
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade" id="arepaModal" aria-labelledby="arepaModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="arepaModalLabel">
                Arepa de Huevo
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                La Arepa de Huevo es un clásico de la gastronomía costeña de Colombia. Esta deliciosa arepa frita se
                rellena con huevo, creando una mezcla de sabores y texturas que la hacen irresistible. Es comúnmente
                consumida durante el desayuno, pero también es ideal para un refrigerio o como acompañante en cualquier
                momento del día.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="mojarraModal" aria-labelledby="mojarraModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="mojarraModalLabel">
                Mojarra Frita
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                La Mojarra Frita es uno de los platos más representativos de la región Caribe de Colombia. Se prepara
                con pescado fresco frito y se sirve con arroz con coco, patacones y ensalada. Es un plato refrescante y
                delicioso, perfecto para disfrutar con la familia o amigos en un día soleado.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="lechonaModal" aria-labelledby="lechonaModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="lechonaModalLabel">
                Lechona
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>
                La Lechona es un plato tradicional de la región Tolima, y es un festín que se comparte en grandes
                celebraciones. Consiste en un cerdo asado relleno de arroz, arvejas, cebolla, y especias, lo que
                resulta en un plato jugoso y sabroso. Es comúnmente servido con arepas, ensalada y un buen jugo natural.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
