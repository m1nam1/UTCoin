module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      gas: 4000000
    },
    ropsten: {
      host: 'localhost',
      port: 8545,
      network_id: '3',
      gas: 4000000,
      from: '0xa8b56F0940b69e87a3b856f6416439AEc022C220'
    }
  }
}
