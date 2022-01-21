import { API } from "../config";

export const getProducts = () => {
    return fetch(`${API}/product`, {
        method: "GET",
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))
}

export const getProduct = (id) => {
    return fetch(`${API}/product/${id}`, {
        method: "GET",
    })
        .then(response => {
            console.log(response)
            return response.json();
        })
        .catch(err => console.log(err))
}

export const getSpecs = (id) => {
    return fetch(`${API}/productSpec/${id}`, {
        method: "GET"
    })
        .then(response => {
            console.log(response)
            return response.json();
        })
        .catch(err => console.log(err))
}

export const addProduct = (product, token) => {
    return fetch(`${API}/product`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(product)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}

export const addComment = (comment, token, product) => {
    return fetch(`${API}/comment/${product.id}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(comment)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}


export const searchKeyword = (keyword) => {
    // console.log(name, email, password)
    return fetch(`${API}/keyword/${keyword}`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
        },
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}