import { useSelector } from "react-redux/es/exports";

const Notification = () => {
  const notification = useSelector((state) => state.uiSlice.notification);
  let bgColor;
  if (notification === "somthing went wrong") {
    bgColor = "red-bg";
  }
  if (notification === "Loading...") {
    bgColor = "orange-bg";
  }
  if (notification === "succesfuly") {
    bgColor = "green-bg";
  }
  return (
    <section className="notification">
      <p className={`notification-massage ${bgColor}`}>{notification}</p>
    </section>
  );
};
export default Notification;
