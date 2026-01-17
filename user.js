function isValidUser(address) {
  return address && address.startsWith("0x");
}

module.exports = {
  isValidUser
};
