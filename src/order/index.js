import { API } from "../config";

export const getOrders = () => {
    return fetch(`${API}/orders`, {
        method: "GET",
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))
}

// export const addProduct = (product, token) => {
//     // console.log(name, email, password)
//     return fetch(`${API}/product`, {
//         method: "POST",
//         headers: {
//             Accept: 'application/json',
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(product)
//     })
//         .then(response => {
//             return response.json()
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }
