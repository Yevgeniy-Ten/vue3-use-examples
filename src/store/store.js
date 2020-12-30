import {createStore} from "vuex";
import {users} from "@/store/users/users";

export const ADD_PRODUCT = "ADD_PRODUCT"
const store = createStore({
    state() {
        return {
            count: 0,
            products: []
        }
    },
    getters: {
        decimalCounter(state, getters) {
            console.log(getters)
            return state.count * 0.1
        },
        getProductById: state => id => {
            return state.products.find(product => product.id === id) // примеры использования store.getters.getProductId(id товара)
        }
    },
    mutations: {
        // тип как actions, так же принимают payload
        increment(state) {
            state.count++
        },
        [ADD_PRODUCT]: (state, payload) => {
            state.products.push(payload)
        }
    },
    actions: {
        asyncIncrement(context, payload) {
            console.log(context, payload)
            // contextе лежит и dispatchmcommit getters, state чем то это всё похоже на redux devtools))))
            // actions для асинхорнных действий, а mutations синхорнных, действия задействуются через dispatch
            context.commit("increment", payload)
        }
    },
    modules: {
        users
        // это как combineReducer
        // только чтобы получить в модуле к внешнему стейту доступ мы используем rootState
        // namespaced true делает типо префикс названиемодуля/мутация пример для дебагинга заебись
        // модули могут быть вложены
        // есди мы хотим определить что какой то action был не по пути namespaced, можно поставить флаг root:true
    }
})
/* как мы назовём mutations так и он будет называться в данном случае increment это и название екшона и сам экшон,
* так же мы можем commit делать типом commit("icnrement") или commit ({type:increment}) */


// getters используется как фильтры vue то есть какие то значения могут преобразовывать, второй аргумент это массив гетеров
// далее они доступны по пути store.getters.decimalCount

export default store