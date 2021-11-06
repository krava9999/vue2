import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const localDB = {
    page1: [{
            "id": 1,
            "paymentDate": "20.03.2020",
            "paymentDesc": "Food",
            "paymentAmount": 169
        },
        {
            "id": 2,
            "paymentDate": "21.03.2020",
            "paymentDesc": "Navigation",
            "paymentAmount": 50
        },
        {
            "id": 3,
            "paymentDate": "22.03.2020",
            "paymentDesc": "Sport",
            "paymentAmount": 450
        }
    ],
    page2: [{
            "id": 4,
            "paymentDate": "23.03.2020",
            "paymentDesc": "Entertaiment",
            "paymentAmount": 969
        },
        {
            "id": 5,
            "paymentDate": "24.03.2020",
            "paymentDesc": "Education",
            "paymentAmount": 1500
        },
        {
            "id": 6,
            "paymentDate": "25.03.2020",
            "paymentDesc": "Food",
            "paymentAmount": 200
        }
    ],
    page3: [{
            "id": 7,
            "paymentDate": "26.03.2020",
            "paymentDesc": "Entertaiment",
            "paymentAmount": 969
        },
        {
            "id": 8,
            "paymentDate": "27.03.2020",
            "paymentDesc": "Education",
            "paymentAmount": 1500
        },
        {
            "id": 9,
            "paymentDate": "28.03.2020",
            "paymentDesc": "Food",
            "paymentAmount": 200
        }
    ],
    page4: [{
            "id": 10,
            "paymentDate": "29.03.2020",
            "paymentDesc": "Entertaiment",
            "paymentAmount": 969
        },
        {
            "id": 11,
            "paymentDate": "30.03.2020",
            "paymentDesc": "Education",
            "paymentAmount": 1500
        },
        {
            "id": 12,
            "paymentDate": "31.03.2020",
            "paymentDesc": "Food",
            "paymentAmount": 200
        }
    ],
    page5: [{
            "id": 13,
            "paymentDate": "1.04.2020",
            "paymentDesc": "Entertaiment",
            "paymentAmount": 969
        },
        {
            "id": 14,
            "paymentDate": "2.04.2020",
            "paymentDesc": "Education",
            "paymentAmount": 1500
        },
        {
            "id": 15,
            "paymentDate": "3.04.2020",
            "paymentDesc": "Food",
            "paymentAmount": 200
        }
    ],



}
export default new Vuex.Store({
    state: { // аналог data, только видят все компоненты (глобальный объект)
        paymentsList: [],
        categoryList: [],

    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload;
        },
        // addPaymentListData(state, payload) {
        //     state.paymentsList.push(payload)
        // },
        addPaymentListData(state, payload) {
            state.paymentsList.push(payload)
        },
        setCategories(state, payload) {
            if (!Array.isArray(payload)) {
                payload = [payload]
            }
            state.categoryList.push(...payload)
        },



    }, // мутации нужны для того что бы реактивно менять данные в state, 
    getters: {
        getPaymentsList: state => state.paymentsList,
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res, cur) => res + cur.paymentAmount, 0)

        },
        setCategoryList: state => state.categoryList,

    },
    actions: {
        fetchData({
            commit
        }, page) {
            return new Promise((resolve) => {
                    // имитируем работу с сетью, ставим задержку получения данных в 1 секунду
                    setTimeout(() => {
                        const items = localDB[`page${page}`]
                        resolve(items)
                    }, 1000)
                })
                .then(res => {
                    // запускаем изменение состояния через commit
                    commit('setPaymentsListData', res)
                })
        },
        loadCategories({
            commit
        }) {
            return new Promise((resolve) => {
                    // имитируем работу с сетью
                    setTimeout(() => {
                        resolve(['Food', 'Transport', 'Education', 'Entertainment'])
                    }, 1000)
                })
                .then(res => {
                    // запускаем изменение состояния через commit
                    commit('setCategories', res)
                })
        },

    },

})