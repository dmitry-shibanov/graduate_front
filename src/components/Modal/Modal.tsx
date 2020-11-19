import React, { FC, Fragment, Component } from "react";
import ReactDOM from "react-dom";

import Button from "../Button/Button";
import styles from "./Modal.module.css";

// class Modal extends Component<any> {
//   private container: HTMLDivElement;
//   private modalRoot: HTMLElement;

//   public constructor(props: any) {
//     super(props);

//     this.modalRoot =
//       document.getElementById("modal-root")!;
//     // this.modalRoot.className = "modal-root";
//     this.container = document.createElement("div");
//   }

//   public componentDidMount(): void {
//     this.modalRoot.appendChild(this.container);
//   }

//   public componentWillUnmount(): void {
//     this.modalRoot.removeChild(this.container);
//   }
//   render() {
//     return ReactDOM.createPortal(
//       <div className="modal">
//         <header className="modal__header">
//           <h1>{this.props.title}</h1>
//         </header>
//         <div className="modal__content">{this.props.children}</div>
//         <div className="modal__actions">
//           <Button
//             design="danger"
//             mode="flat"
//             onClick={this.props.onCancelModal}
//           >
//             Cancel
//           </Button>
//           <Button
//             mode="raised"
//             onClick={this.props.onAcceptModal}
//             disabled={this!.props.acceptEnabled}
//             loading={this.props.isLoading}
//           >
//             Accept
//           </Button>
//         </div>
//       </div>,
//       this.container
//     );
//   }
// }

const modal: FC<any> = (props: any) =>{
  let element = document.getElementById("modal-root");
  console.log(`element is`);
  console.log(element);
  return ReactDOM.createPortal(
    <Fragment>
    <div className={styles.modal}>
      <header className={styles.modal__header}>
        <h1>{props.title}</h1>
      </header>
      <div className={styles.modal__content}>{props.children}</div>
      <div className={styles.modal__actions}>
        <Button design="danger" mode="flat" onClick={props.onCancelModal}>
          Cancel
        </Button>
        <Button
          mode="raised"
          onClick={props.onAcceptModal}
          disabled={!props.acceptEnabled}
          loading={props.isLoading}
        >
          Accept
        </Button>
      </div>
    </div>
    </Fragment>,
    document.getElementById('modal-root') as Element
  );
}

export default modal;
