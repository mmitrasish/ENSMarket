import React from "react";
import { withRouter } from "react-router-dom";
import { capitaliseString, shortenEthAddr } from "../utils/store";
import DomainDetailTab from "./DomainDetailTab";
import SubdomainItem from "./SubdomainItem";

const DomainDetails = props => {
  const [domain, setDomain] = React.useState();
  const [currentTab, setCurrentTab] = React.useState(0);
  const [showFullAddress, setShowFullAddress] = React.useState(false);
  React.useEffect(() => {
    // console.log(props.match.params.id);
    const currentDomain = props.domains.filter(
      domain => domain.domain_name === props.match.params.id
    )[0];
    // console.log(currentDomain);
    setDomain(currentDomain);
  }, []);
  return (
    <div>
      {domain ? (
        <div>
          <section class="hero is-info is-small">
            <div class="hero-body">
              <div class="container">
                <p class="title" style={{ paddingBottom: 8 }}>
                  {domain ? domain.domain_name : ""}
                </p>
                <p
                  class="subtitle"
                  onMouseEnter={e => setShowFullAddress(true)}
                  onMouseOut={e => setShowFullAddress(false)}
                  style={{ cursor: "pointer" }}
                >
                  <strong>Owner:</strong>{" "}
                  {domain
                    ? showFullAddress
                      ? domain.owner
                      : shortenEthAddr(domain.owner)
                    : null}
                </p>
              </div>
            </div>

            <div class="hero-foot">
              <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                  <ul>
                    <li class={currentTab === 0 ? "is-active" : null}>
                      <a onClick={e => setCurrentTab(0)}>Details</a>
                    </li>
                    <li class={currentTab === 1 ? "is-active" : null}>
                      <a onClick={e => setCurrentTab(1)}>Subdomains</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </section>
          <main className="section">
            <div class="container">
              {currentTab === 0 ? (
                <DomainDetailTab
                  domain={domain}
                  userAddress={props.userAddress}
                />
              ) : null}
              {currentTab === 1 ? (
                <div>
                  {domain.subdomains.map((subdomain, i) => (
                    <SubdomainItem
                      subdomainName={subdomain.subdomain_name}
                      domainName={domain.domain_name}
                      owner={subdomain.owner}
                      price={subdomain.price}
                      removePrice={true}
                      removeParent={true}
                      key={i}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          </main>
        </div>
      ) : null}
    </div>
  );
};

export default withRouter(DomainDetails);
