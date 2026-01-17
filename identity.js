const { saveIdentity } = require("./storage");
const { isValidUser } = require("./user");

let counter = 1;

function createIdentity(wallet, name) {
  if (!isValidUser(wallet)) {
    return null;
  }

  const did = "did:web3:" + counter++;

  const record = {
    did: did,
    wallet: wallet,
    name: name,
    time: new Date().toISOString()
  };

  saveIdentity(record);
  return did;
}

module.exports = {
  createIdentity
};
