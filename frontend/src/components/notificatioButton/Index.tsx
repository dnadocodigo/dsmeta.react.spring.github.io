import icon from "../../assets/img/notification-icon.svg";

import "./style.css";

function NotificationButton(){
  return(
      <div className="btn">
           <img src={icon} alt="notificar" />
      </div>
  )
}

export default NotificationButton