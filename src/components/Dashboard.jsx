import React from "react";
import { capitaliseString } from "../utils/store";
import SubdomainItem from "./SubdomainItem";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      putOnSale: props.myDomains.map(domain => false)
    };
  }

  handlePutOnSale = index => {
    const saleBool = this.state.putOnSale;
    saleBool[index] = !saleBool[index];
    this.setState({ putOnSale: saleBool });
  };
  render() {
    return (
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <center>
              <h2 className="title">Dashboard</h2>
            </center>
          </div>
          <div>
            <h2 className="title is-5">{capitaliseString("My subdomains")}</h2>
            <div>
              {this.props.mySubdomains
                ? this.props.mySubdomains.map((subdomain, i) => (
                    <SubdomainItem
                      subdomainName={subdomain.subdomain_name}
                      domainName={subdomain.parent}
                      owner={subdomain.owner}
                      removePrice={true}
                      removeParent={false}
                      subdomainPrepared={false}
                      key={i}
                    />
                  ))
                : null}
            </div>
            <div style={{ marginTop: 48 }}>
              <h2 className="title is-5">{capitaliseString("My domains")}</h2>
              <div>
                {this.props.myDomains.map((domain, i) => (
                  <div
                    className="card has-background-light"
                    style={{ marginBottom: 18 }}
                  >
                    <div className="card-content">
                      <div className="level" style={{ minHeight: 48 }}>
                        <div className="level-left">
                          <div style={{ marginRight: 18 }}>
                            <span class="tag is-info is-medium">
                              <h2 className="title is-5 has-text-white">{i}</h2>
                            </span>
                          </div>
                          <div>
                            <h2 className="title is-4">
                              <Link to={`/domain/${domain.domain_name}`}>
                                {domain.domain_name}
                              </Link>
                            </h2>
                          </div>
                        </div>
                        <div className="level-right">
                          {this.state.putOnSale[i] ? (
                            <div className="level-item">
                              <h2 className="title is-6">Set Price:</h2>
                              <span className="icon has-text-link is-large">
                                <i className="fab fa-2x fa-ethereum"></i>
                              </span>
                              <div class="control" style={{ marginRight: 12 }}>
                                <input
                                  class="input"
                                  type="text"
                                  placeholder="0"
                                  style={{ maxWidth: 100 }}
                                />
                              </div>
                              <button
                                class="button is-link"
                                style={{ marginRight: 12 }}
                              >
                                Confirm
                              </button>
                              <button
                                class="button is-danger"
                                onClick={e => this.handlePutOnSale(i)}
                              >
                                Cancel
                              </button>
                            </div>
                          ) : (
                            <div className="level-item">
                              {!domain.on_sale ? (
                                <button
                                  class="button is-danger"
                                  style={{ marginRight: 12 }}
                                  onClick={e => this.handlePutOnSale(i)}
                                >
                                  Put on Sale
                                </button>
                              ) : (
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center"
                                  }}
                                >
                                  <h2 className="title is-5 has-text-success">
                                    On Sale
                                  </h2>
                                  <span className="icon has-text-link is-large">
                                    <i className="fab fa-2x fa-ethereum"></i>
                                  </span>
                                  <h2
                                    className="title is-3"
                                    style={{ marginRight: 12 }}
                                  >
                                    {domain.price}
                                  </h2>
                                  <button
                                    class="button is-danger"
                                    style={{ marginRight: 12 }}
                                    onClick={e => this.handlePutOnSale(i)}
                                  >
                                    Update Price
                                  </button>
                                </div>
                              )}

                              <Link
                                to={`/domain/${domain.domain_name}`}
                                class="button is-link"
                              >
                                Manage
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Dashboard;
