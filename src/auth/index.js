import { API } from "../config";

export const signup = (user) => {
    // console.log(name, email, password)
    return fetch(`${API}/auth/user`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}

export const signin = (user) => {
    // console.log(name, email, password)
    return fetch(`${API}/auth/signin`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err)
        })
}

export const getUser = (token) => {
    return fetch(`${API}/auth/user`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))
}

export const putUser = (user, token) => {
    return fetch(`${API}/auth/user`, {
        method: "PUT",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(user)

    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))
}

export const changePw = (user, token) => {
    return fetch(`${API}/auth/password`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(user)

    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))
}


export const authenticate = (data) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(data));
        // next();
    }
}

export const signout = (next) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem('jwt');
        // next();
        // return fetch(`${API}/signout`, {
        //     method: 'GET',

        // })
        //     .then(response => {
        //         console.log('signout', response)
        //     })
        //     .catch(err => console.log(err))
    }
}

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'))
    } else {
        return false;
    }
}