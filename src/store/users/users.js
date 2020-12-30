import axios from "axios"

export const setUsers = "setUsers"
export const axiosUsers = "axiosUsers"
export const axiosError = "axiosError"
export const setLoading = "SET_LOADING"
export const getUserById = "getByUserId"
export const users = {
    namespaced: true,
    state: () => {
        return {
            users: [],
            error: null,
            isLoad: false
        }
    },
    getters: {
        getUsers(state) {
            return state.users
        },
        getLoading(state) {
            return state.isLoad
        },
        [getUserById]: (state) => (id) => {
            return state.users.find(user => parseInt(user.id) === parseInt(id.value))
        }
    },
    mutations: {
        [setUsers]: (state, {users}) => {
            state.users = users
        },
        [axiosError]: (state, {msg}) => {
            state.error = msg
        },
        [setLoading]: (state, payload = false) => {
            state.isLoad = payload
        }

    },
    actions: {
        async [axiosUsers](api) {
            api.commit(setLoading, true)
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users")
                api.commit(setUsers, {users: response.data})
            } catch (e) {
                api.commit("axiosError", {msg: "Error when get users"})
            } finally {
                api.commit(setLoading)
            }
        }
    }
}

// export const AXIOS_PRODUCTS = "GET_AXIOS_PRODUCTS"