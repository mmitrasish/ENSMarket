import React from "react";
import makeBlockie from "ethereum-blockies-base64";
import ReactTooltip from "react-tooltip";

const DomainDetailTab = props => {
  console.log(
    props.userAddress.toLowerCase() !== props.domain.controller.toLowerCase() ||
      !props.userAddress,
    props.userAddress,
    props.domain.controller
  );
  return (
    <div>
      <div className="columns details_column">
        <div className="column is-3">
          <h2 className="title is-5">PARENT</h2>
        </div>
        <div className="column">
          <p className="title is-5 has-text-link">
            {props.domain.parent ? props.domain.parent : "No parent available"}
          </p>
        </div>
      </div>
      {props.domain.registrant ? (
        <div className="columns details_column">
          <div className="column is-3">
            <h2 className="title is-5">REGISTRANT</h2>
          </div>
          <div className="column">
            <div className="align_center">
              <figure class="image is-32x32" style={{ marginRight: 12 }}>
                <img
                  src={makeBlockie(props.domain.registrant)}
                  alt="controller"
                  className="is-rounded"
                />
              </figure>
              <a className="title is-5 has-text-link">
                {props.domain.registrant}
              </a>
            </div>
          </div>
        </div>
      ) : null}
      <div className="columns details_column">
        <div className="column is-3">
          <h2 className="title is-5">CONTROLLER</h2>
        </div>
        <div className="column is-7">
          <div className="align_center">
            {props.domain.controller ? (
              <figure class="image is-32x32" style={{ marginRight: 12 }}>
                <img
                  src={makeBlockie(props.domain.controller)}
                  alt="controller"
                  className="is-rounded"
                />
              </figure>
            ) : null}
            <a className="title is-5 has-text-link">
              {props.domain.controller ? props.domain.controller : "Not owned"}
            </a>
          </div>
        </div>
        <div className="column is-2">
          <button
            className="button is-link is-rounded is-fullwidth"
            data-tip
            data-for="transferController"
            disabled={
              props.userAddress.toLowerCase() !==
                props.domain.controller.toLowerCase() || !props.userAddress
            }
          >
            Transfer
          </button>
          <ReactTooltip
            id="transferController"
            type="dark"
            effect="float"
            place="bottom"
          >
            <span>
              {props.userAddress.toLowerCase() !==
                props.domain.controller.toLowerCase() || !props.userAddress
                ? "You can only tranfer the controller only if you are the controller or registrant and you are logged into your wallet"
                : "Click here to transfer controller"}
            </span>
          </ReactTooltip>
        </div>
      </div>
      <div className="columns details_column">
        <div className="column is-3">
          <h2 className="title is-5">REGISTRATION DATE</h2>
        </div>
        <div className="column">
          <div className="align_center">
            <p className="title is-5 has-text-link">
              {props.domain.registration_date
                ? props.domain.registration_date
                : "Not owned"}
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="columns details_column">
        <div className="column is-3">
          <h2 className="title is-5">RESOLVER</h2>
        </div>
        <div className="column is-7">
          <div className="align_center">
            {props.domain.resolver ? (
              <figure class="image is-32x32" style={{ marginRight: 12 }}>
                <img
                  src={makeBlockie(props.domain.resolver)}
                  alt="controller"
                  className="is-rounded"
                />
              </figure>
            ) : null}
            <a className="title is-5 has-text-link">
              {props.domain.resolver
                ? props.domain.resolver
                : "No Resolver set"}
            </a>
          </div>
        </div>
        <div className="column is-2">
          <button
            className="button is-link is-rounded is-fullwidth"
            data-tip
            data-for="setResolver"
            disabled={
              props.userAddress.toLowerCase() !==
                props.domain.controller.toLowerCase() || !props.userAddress
            }
          >
            Set
          </button>
          <ReactTooltip
            id="setResolver"
            type="dark"
            effect="float"
            place="bottom"
          >
            <span>
              {props.userAddress.toLowerCase() !==
                props.domain.controller.toLowerCase() || !props.userAddress
                ? "You can set the resolver only if you are the controller or registrant and you are logged into your wallet"
                : "Click here to set a resolver"}
            </span>
          </ReactTooltip>
        </div>
      </div>
    </div>
  );
};

export default DomainDetailTab;
