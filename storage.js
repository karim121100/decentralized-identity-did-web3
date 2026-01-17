const identities = {};

function saveIdentity(record) {
  identities[record.did] = record;
}

function getIdentity(did) {
  return identities[did];
}

module.exports = {
  saveIdentity,
  getIdentity
};
