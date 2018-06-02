import utils from '../../utils'

export const LOAD_NOTIFICATIONS = 'LOAD_NOTIFICATIONS' 


export  function fetchNotifications() {
    return {
        type: LOAD_NOTIFICATIONS,
        promise: utils.fetchJson('https://my.api.mockaroo.com/tab-care.json?key=45558cf0', {method: 'GET'})
    }
}