export const Acerca = () => {
  return (
    <section id="acerca-de" className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <h2 className="text-center mb-4" style={{ color: "#2c3e50" }}>
          Acerca de Nosotros
        </h2>

        <div className="row align-items-center">
          <div className="col-md-12">
            <p className="lead" style={{ color: "#2c3e50" }}>
              En Unicosta Delicias nos apasiona llevarte los mejores sabores de la tradición local. Con años de
              experiencia en el arte culinario, buscamos transformar tu comida en una experiencia única e inolvidable.
            </p>
            <p style={{ color: "#2c3e50" }}>
              Nuestro compromiso es ofrecerte una excelente calidad, un servicio amigable y un ambiente acogedor.
              Creemos que la comida no solo nutre el cuerpo, sino también el alma. ¡Te invitamos a disfrutar de nuestro
              menú y ser parte de la familia Unicosta!
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card" style={{ border: "none", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <div className="card-body text-center">
                <img
                  src="logoc.png" 
                  alt="Logo Unicosta Delicias"
                  className="img-fluid"
                  style={{ maxWidth: "150px", marginBottom: "1rem" }}
                />
                <h5 className="card-title" style={{ color: "#2c3e50" }}>
                  Unicosta Delicias
                </h5>
                <p className="card-text" style={{ color: "#2c3e50" }}>
                  La tradición, el sabor y la calidad de nuestros platos se reflejan en cada uno de los detalles. ¡Bienvenidos!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
