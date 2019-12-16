import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import App from "../App";
import Main from "../components/Main";
import { all_domains, my_domain, my_subdomains } from "../utils/store";
import Web3Service from "../utils/web3";
import DomainDetails from "../components/DomainDetails";
import Dashboard from "../components/Dashboard";

const AppRouter = props => {
  const [domainsList, setDomainsList] = React.useState(all_domains);
  const [myDomainList, setMyDomainList] = React.useState(my_domain);
  const [mySubdomainList, setMySubdomainList] = React.useState(my_subdomains);
  const [selectedAddress, setSelectedAddress] = React.useState();

  // Detect when account changes
  if (window.ethereum) {
    window.ethereum.on("accountsChanged", function(accounts) {
      if (selectedAddress !== undefined) {
        setSelectedAddress(accounts[0]);
      }
    });
  }

  React.useEffect(() => {
    const fetchAccount = async () => {
      const address = await Web3Service.getAccount();

      if (address) {
        console.log(address[0]);
        setSelectedAddress(address[0]);
      }
    };

    fetchAccount();
  }, []);

  return (
    <Router>
      <App userAddress={selectedAddress}>
        <Route
          path="/buy"
          exact
          render={() => <Main domains={domainsList} />}
        />
        <Route
          path="/domain/:id"
          render={() => (
            <DomainDetails
              domains={domainsList}
              userAddress={selectedAddress}
            />
          )}
        />
        <Route
          path="/dashboard"
          render={() => (
            <Dashboard
              userAddress={selectedAddress}
              myDomains={myDomainList}
              mySubdomains={mySubdomainList}
            />
          )}
        ></Route>
        <Route path="/" exact render={() => <Redirect to="/buy"></Redirect>} />
      </App>
    </Router>
  );
};

export default AppRouter;
