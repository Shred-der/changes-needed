import WebSocket from 'websocket';

export default function trackLovelacePrice() {
  // Establish a WebSocket connection to the price tracking service
//   This url is a place holder use binance websocket api
  const ws = new WebSocket('use binance url to get the live prices');

  // Subscribe to the Lovelace price channel
  const subscribeMessage = {
    channel: 'lovelace_price',
    symbol: 'ADA'
  };
  ws.send(JSON.stringify(subscribeMessage));

  return new Promise((resolve, reject) => {
    ws.on('message', (response) => {
      // Receive price updates from the WebSocket connection
      const priceData = JSON.parse(response);

      // Extract the price of Lovelace from the received data
      const lovelacePrice = priceData.price;

      // Calculate the amount of Lovelace equivalent to 40 dollars
      const lovelaceAmount = 40 / lovelacePrice;

      // Return the amount of Lovelace always equal to 40 dollars
      resolve(lovelaceAmount);
    });

    ws.on('error', (error) => {
      reject(error);
    });
  });
}