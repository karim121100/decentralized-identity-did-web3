const { getIdentity } = require("./storage");

function verifyIdentity(did) {
  const record = getIdentity(did);
  return record ? "VALID" : "NOT FOUND";
}

module.exports = {
  verifyIdentity
};
