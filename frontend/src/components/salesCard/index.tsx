import NotificationButton from '../notificatioButton/Index';
import './card.css';


function SalesCard(){
  return(
    <div className="sales-card">
        <h2 className="sales-title">Vendas</h2>
        <div className="sales-form">
          <div className="sales-form-item">
            <input type="text" />
          </div>
          <div className="sales-form-item">
            <input type="text" />
          </div>
        </div>
        <div>
          <table className="sales-table">
            <thead className="sales-table-header">
              <tr className="sales-table-title">
                <th className="secund">ID</th>
                <th className="first">Data</th>
                <th>Vendedor</th>
                <th className="secund">Visitas</th>
                <th className="secund">Vendas</th>
                <th>Total</th>
                <th>Notificar</th>
              </tr>  
            </thead>
            <tbody className="sales-table-content">
              <tr className="sales-table-item">
                <td className="secund">#341</td>
                <td className="first">08/07/2022</td>
                <td>AnaKim</td>
                <td className="secund">15</td>
                <td className="secund">11</td>
                <td>R$ 53300.00</td>
                <td>
                    <div className="sales-btn">
                     <NotificationButton />
                    </div>
                 </td>
              </tr>
              <tr className="sales-table-item">
                <td className="secund">#341</td>
                <td className="first">08/07/2022</td>
                <td>AnaKim</td>
                <td className="secund">15</td>
                <td className="secund">11</td>
                <td>R$ 53300.00</td>
                <td>
                  <div className="sales-btn">
                  <NotificationButton />
                  </div>
                </td>
              </tr>
              <tr className="sales-table-item">
                <td className="secund">#341</td>
                <td className="first">08/07/2022</td>
                <td>AnaKim</td>
                <td className="secund">15</td>
                <td className="secund">11</td>
                <td>R$ 53300.00</td>
                <td>
                  <div className="sales-btn">
                  <NotificationButton />
                </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default SalesCard