import { Fragment } from "react";
import ReactDOM from "react-dom";
import BackDrop from "./BackDrop";

const ModalOverlay = (props) => {
  return <div className="modalOverlay">{props.children}</div>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, document.getElementById("overlay"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </Fragment>
  );
};
export default Modal;
