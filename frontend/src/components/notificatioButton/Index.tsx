import axios from "axios";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";

import "./style.css";

type Props = {
  salesId: number;
};
function handkeClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then((response) => {
    console.log("Sucesso");
  });
}
function NotificationButton({ salesId }: Props) {
  return (
    <div className="btn" onClick={() => handkeClick(salesId)}>
      <img src={icon} alt="notificar" />
    </div>
  );
}

export default NotificationButton;
