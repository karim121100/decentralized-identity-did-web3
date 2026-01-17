const { createIdentity } = require("./identity");
const { verifyIdentity } = require("./verify");
const { logInfo } = require("./logger");

const userWallet = "0xUserWalletHere";

function startApp() {
  logInfo("Starting DID System");

  const did = createIdentity(userWallet, "Nazrul");
  logInfo("Created DID: " + did);

  const status = verifyIdentity(did);
  logInfo("Verification Status: " + status);
}

startApp();
