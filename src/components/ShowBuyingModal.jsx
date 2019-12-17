import React from "react";
import SubdomainItem from "./SubdomainItem";
import Web3Service from "../utils/web3";

const ShowBuyingModal = props => {
  return (
    <div>
      <div className={"modal " + (props.open ? "is-active" : null)}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Registering...</p>
            <button
              className="delete"
              aria-label="close"
              onClick={props.close}
            ></button>
          </header>
          <section className="modal-card-body">
            Your registration request for {props.subdomain} has been submitted.
            Waiting for it to be mined...
          </section>
        </div>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={props.close}
        ></button>
      </div>
    </div>
  );
};

export default ShowBuyingModal;
