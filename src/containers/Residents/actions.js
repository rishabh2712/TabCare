import utils from '../../utils'

export const LOAD_RESIDENTS = 'LOAD_RESIDENTS' 


export  function fetchResidents() {
    return {
        type: LOAD_RESIDENTS,
        promise: utils.fetchJson('https://my.api.mockaroo.com/residents.json?key=166aa9c0', {method: 'GET'})
    }
}