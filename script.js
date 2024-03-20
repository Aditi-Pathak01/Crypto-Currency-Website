let url =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum%2Cmfers&vs_currencies=usd";
let bitCoin = document.querySelector("#bc-val");
let dogeCoin = document.querySelector("#dc-val");
let ethereum = document.querySelector("#e-val");
let mfers = document.querySelector("#m-val");

const cryptoVal = async () => {
  let response = await fetch(url);
  let data = await response.json();
  bitCoin.innerHTML = `${data.bitcoin.usd}$`; //data is an object of object.
  dogeCoin.innerHTML = `${data.dogecoin.usd}$`;
  ethereum.innerHTML = `${data.ethereum.usd}$`;
  mfers.innerHTML = `$${data.mfers.usd}$`;
};
document.addEventListener("DOMContentLoaded", () => {
  cryptoVal();
});
