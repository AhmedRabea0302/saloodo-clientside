import { useState } from "react";
import updateParcel from "../Services/updateParcel";
const TodoParcel = (props) => {
  const [updated, setUpdated] = useState(false);
  const {
    id,
    parcel_name,
    pickup_address,
    dropoff_address,
    pickedup_at,
    dropedoff_at,
  } = props;
  const status = 2; // Delivered
  const handleClick = (e) => {
    updateParcel(id, { status }).then((response) => {
      debugger;
      response.result == 1 ? setUpdated(true) : setUpdated(false);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });
  };
  return (
    <article className="todo-parcel">
      {updated && <p className="delivered-todo">Delivered Successfully!</p>}
      <div>
        <p>Parcel Name: {parcel_name}</p>
        <p>Pickup Adress: {pickup_address}</p>
        <p>Dropoff Adress: {dropoff_address}</p>
        <p>Picked At: {pickedup_at}</p>
        <p>Delivery Time: {dropedoff_at}</p>
      </div>
      <button className="btn btn-primary" onClick={handleClick}>
        Set Delivered
      </button>
    </article>
  );
};

export default TodoParcel;
