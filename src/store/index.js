import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state'
import getWeb3 from '@/utils/getWeb3'
import {NETWORKS} from '@/utils/constants/networks'

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state,
    mutations: {
        registerWeb3Instance (state, payload) {
            console.log('registerWeb3instance Mutation being executed', payload)
            let result = payload
            console.log(result)
            let web3Copy = state.web3
            web3Copy.account = result.account
            web3Copy.networkId = NETWORKS[result.networkId]
            web3Copy.balance = result.balance,
            web3Copy.isInjected = result.isInjected,
            web3Copy.web3Instance = result.web3,
            state.web3 = web3Copy
        }
    },
    actions: {
        registerWeb3 ({commit}) {
            console.log('registerWeb3 Action being executed')
            getWeb3.then(result => {
                console.log('commiting result to registerWeb3Instance mutation')
                commit('registerWeb3Instance', result)
            }).catch(err => {
                console.log('error in action registerWeb3', err)
            })
        }
    }
})