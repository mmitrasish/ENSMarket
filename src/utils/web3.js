class Web3Service {
  getAccount = async () => {
    let account = null;
    try {
      if (
        typeof window.ethereum !== "undefined" ||
        typeof window.web3 !== "undefined"
      ) {
        // console.log("No selected address, requesting log in");
        account = await window.ethereum.enable();
        // console.log("Selected Address is: " + account[0]);
      }
    } catch (error) {
      console.log(error);
    }
    return account;
  };
}

export default new Web3Service();
