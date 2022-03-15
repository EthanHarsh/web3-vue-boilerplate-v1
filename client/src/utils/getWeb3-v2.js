import Web3 from 'web3'

/*
* 1. Check for injected web3 (mist/metamask)
* 2. If metamask/mist create a new web3 instance and pass on result
* 3. Get networkId - Now we can check the user is connected to the right network to use our dApp
* 4. Get user account from metamask
* 5. Get user balance
*/

const getWeb3V2 = async () => {
    if(!window.ethereum.selectedAddress) {
        return null
    }
    let web3 = new Web3(window.ethereum);
    let result = {};
    await web3.eth.getChainId((err, networkId)=> {
        if(err) {
            console.error(err);
        } else {
            result.networkId = networkId
        }
    })
    result.account = window.ethereum.selectedAddress
    await web3.eth.getBalance(result.account, (err, balance) => {
        if(err) {
            console.error(err);
        } else {
            result.stdBalance = balance;
            result.balance = web3.utils.fromWei(balance)
        }
    })
    if(window.ethereum.isMetaMask) {
        result.connection = 'MetaMask'
    } else {
        result.connection = 'Other Wallet'
    }
    return result
}

export default getWeb3V2