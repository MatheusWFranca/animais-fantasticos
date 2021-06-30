export default function initFetchBitcoin() {
  fetch('https://blockchain.info/pt/ticker')
    .then((response) => {
      response.json();
    })
    .then((bitcoin) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
    }).catch((error) => {
      console.log(error);
    });
}