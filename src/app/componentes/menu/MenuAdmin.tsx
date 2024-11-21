export const MenuAdmin = () => {
    return (
      <>
        <div className="pt-5 d-flex justify-content-center">
        <div className="cold-md-6">
          <table className="table table-striped">


            <thead>
              <tr>
                <th style={{width: "5%"}}>No.</th>
                <th style={{width: "30%"}}>Nombre plato</th>
                <th style={{width: "25%"}}>Acompañamiento</th>
                <th style={{width: "20%"}} className="text-center">Precio</th>
                <th style={{width: "15%"}}>Region</th>
                <th style={{width: "5%"}}>opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Arepa de huevo</td>
                <td>Con suero</td>
                <td className="text-center">2000</td>
                <td>Costeña</td>
                <td>
                  <a href="/menactu/1">
                  <i className="fa-solid fa-pen-to-square" style={{color:"#00604e"}}></i>
                  </a>
                
                &nbsp;
                <i className="fa-solid fa-eraser"></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Papa rellena</td>
                <td>Con carne molida y huevo</td>
                <td className="text-center">3000</td>
                <td>Costeña</td>
                <td>
                <a href="/menactu/2">
                  <i className="fa-solid fa-pen-to-square"style={{color:"#00604e"}}></i> 
                  </a>
                
                &nbsp;
                <i className="fa-solid fa-eraser"></i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Patacon relleno</td>
                <td>Queso, Carne, suero</td>
                <td className="text-center">2500</td>
                <td>Costeña</td>
                <td>
                <a href="/menactu/3">
                  <i className="fa-solid fa-pen-to-square" style={{color:"#00604e"}} ></i>
                  </a>
                
                &nbsp;
                <i className="fa-solid fa-eraser"></i>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
      </>
    );
  };