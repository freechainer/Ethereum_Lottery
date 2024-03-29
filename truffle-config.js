// Allows us to use ES6 in our migrations and tests.
require('babel-register')

// by default the owner of the contract is account[0]
// to set an owner set the 'from' option with the address of the new owner

module.exports = {
  networks: {
    development: {
      host: "192.168.0.147", 
      port: 8545,
      network_id: '*', // Match any network id
      gas : 3000000
    }
  }
  ,
  compilers: {
  solc: {
	  version: "^0.4.24",
  
  }
}
}
