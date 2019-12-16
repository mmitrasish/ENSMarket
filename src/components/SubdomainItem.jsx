import React from "react";
import { shortenEthAddr } from "../utils/store";
import { Link } from "react-router-dom";

const SubdomainItem = props => {
  return (
    <div className="card has-background-light" style={{ marginBottom: 18 }}>
      <div className="card-content">
        <div className="level">
          <div className="level-left">
            <div>
              <h2 className="title is-4">
                {props.subdomainPrepared
                  ? props.subdomainName
                  : props.subdomainName + "." + props.domainName}
              </h2>
              {!props.removeParent ? (
                <h2 className="title is-5">
                  Parent:{" "}
                  <Link to={`/domain/${props.domainName}`}>
                    {props.domainName}
                  </Link>
                </h2>
              ) : null}

              <h2 className="subtitle is-6">
                <strong>Owner:</strong> {shortenEthAddr(props.owner)}
              </h2>
            </div>
          </div>
          <div className="level-right">
            {!props.removePrice ? (
              <div className="level-item">
                <div>
                  <span className="icon has-text-link is-large">
                    <i className="fab fa-2x fa-ethereum"></i>
                  </span>
                </div>
                <div className="title">{props.price}</div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubdomainItem;
