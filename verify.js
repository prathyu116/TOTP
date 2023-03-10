const speakeasy = require("speakeasy");

var verified = speakeasy.totp.verify({
  secret: "^0a@pin60U.w>9}e#L{eZN).huJq7U8n",
  encoding: "ascii",
  token: "208981",
});
console.log(verified);