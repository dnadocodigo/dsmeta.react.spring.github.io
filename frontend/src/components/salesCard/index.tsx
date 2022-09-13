import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import NotificationButton from "../notificatioButton/Index";
import "./card.css";

function SalesCard() {
  const daysBefore = new Date(new Date().setDate(new Date().getDate() - 365));
  const actualDay = new Date();

  const [minDate, setMinDate] = useState(daysBefore);
  const [maxDate, setMaxDate] = useState(actualDay);

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const minimumDate = minDate.toISOString().slice(0, 10);
    const maximumDate = maxDate.toISOString().slice(0, 10);

    axios
      .get(`${BASE_URL}/sales?minDate=${minimumDate}&maxDate=${maximumDate}`)
      .then((response) => {
        setSales(response.data.content);
      });
  }, [minDate, maxDate]);
  return (
    <div className="sales-card">
      <h2 className="sales-title">Vendas</h2>
      <div className="sales-form">
        <div className="sales-form-item">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="sales-form-item">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
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
            {sales.map((sale) => {
              return (
                <tr key={sale.id} className="sales-table-item">
                  <td className="secund">#{sale.id}</td>
                  <td className="first">
                    {new Date(sale.date).toLocaleDateString()}
                  </td>
                  <td>{sale.sellerName}</td>
                  <td className="secund">{sale.visited}</td>
                  <td className="secund">{sale.deals}</td>
                  <td>R$ {sale.amount.toFixed(2)}</td>
                  <td>
                    <div className="sales-btn">
                      <NotificationButton salesId={sale.id} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
