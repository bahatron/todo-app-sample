import { Module } from "vuex";
import { reactive } from "vue";
import { $axios } from "@/utils/axios";

function stateFactory() {
    return reactive({
        token: localStorage.getItem("token") ?? "",
    });
}

export default <Module<ReturnType<typeof stateFactory>, any>>{
    namespaced: true,

    state: stateFactory(),

    getters: {
        token: (state) => state.token,
        isUserLoggedIn: (state) => Boolean(state.token),
    },

    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem("token", token);
        },
    },

    actions: {
        async login(context, payload) {
            let { data } = await $axios({
                method: "post",
                url: "/login",
                data: payload,
            });

            console.log({ data });

            context.commit("setToken", data);
        },
    },
};
