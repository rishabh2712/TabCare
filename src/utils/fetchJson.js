import HttpError from 'http-errors'
import rp from 'request-promise'
export const LOAD_NOTIFICATIONS = 'LOAD_NOTIFICATIONS' 

export function fetchJson(url, params) {
    var options = {
        method: params.method,
        uri: url,
        json: true // Automatically stringifies the body to JSON
    };
     
    return rp(options)

}


// export const fetchJson = (url, options = {}) => {
//     const requestHeaders =
//         options.headers ||
//         new Headers({
//             Accept: 'application/json',
//         });
//     if (
//         !requestHeaders.has('Content-Type') &&
//         !(options && options.body && options.body instanceof FormData)
//     ) {
//         requestHeaders.set('Content-Type', 'application/json');
//     }
//     if (options.user && options.user.authenticated && options.user.token) {
//         requestHeaders.set('Authorization', options.user.token);
//     }

//     return fetch(url, { ...options, headers: requestHeaders })
//         // .then(response =>
//         //     response.text().then(text => ({
//         //         status: response.status,
//         //         statusText: response.statusText,
//         //         headers: response.headers,
//         //         body: text,
//         //     }))
//         // )
//         // .then(({ status, statusText, headers, body }) => {
//         //     let json;
//         //     try {
//         //         json = JSON.parse(body);
//         //     } catch (e) {
//         //         // not json, no big deal
//         //     }
//         //     if (status < 200 || status >= 300) {
//         //         return Promise.reject(
//         //             new HttpError(
//         //                 (json && json.message) || statusText,
//         //                 status,
//         //                 json
//         //             )
//         //         );
//         //     }
//         //     return { status, headers, body, json };
//         // });
// };