import Web3 from 'web3'

/*
* 1. Check for injected web3 (mist/metamask)
* 2. If metamask/mist create a new web3 instance and pass on result
* 3. Get networkId - Now we can check the user is connected to the right network to use our dApp
* 4. Get user account from metamask
* 5. Get user balance
*/

let getWeb3 = new Promise((resolve, reject) => {
    // Check for injected web3 (mist/metamask)
    //var web3js = window.web3
    if (window.ethereum) {
        window.ethereum.request({method: 'eth_requestAccounts'})
        let web3 = new Web3(window.ethereum);
        resolve({
            injectedWeb3: web3,
            web3() {
                return web3
            }
        })
    } else {
        reject(new Error('Unable to connect to Metamask'))
    }
})
    .then(result => {
        return new Promise((resolve, reject) => {
            //Retrieve network ID
            result.web3().eth.getChainId((err, networkId) => {
                if(err) {
                    // If we can't find a networkId keep result the same and reject the promise
                    reject(new Error('Unable to retrieve network ID'))
                } else {
                    // Assign the networkId property to our result and resolve promise
                    result = Object.assign({}, result, {networkId})
                    result = Object.assign({}, result, {isInjected: true})
                    resolve(result)
                }
            })
        })
    })
    .then(result => {
        return new Promise((resolve, reject) => {
            // Retrieve coinbase
            result.web3().eth.getAccounts((err, accounts) => {
                if (err) {
                    reject(new Error('Unable to retrieve accounts'))
                } else {
                    const account = accounts[0]
                    result = Object.assign({}, result, {account})
                    resolve(result)
                }
            })
        })
    })
    .then(result => {
        return new Promise((resolve, reject) => {
            // Retrieve balance for account
            result.web3().eth.getBalance(result.account, (err, balance) => {
                if (err) {
                    reject(new Error('Unable to retrieve balance for address: ' + result.account))
                } else {
                    console.log(balance)
                    result = Object.assign({}, result, {stdBalance: balance})
                    balance = Web3.utils.fromWei(balance)
                    result = Object.assign({}, result, {balance})
                    resolve(result)
                }
            })
        })
    })

export default getWeb3