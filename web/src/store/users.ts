import { Module } from "vuex";
import { reactive } from "vue";
import { $axios } from "@/utils/axios";

function stateFactory() {
    return reactive({});
}

export default <Module<ReturnType<typeof stateFactory>, any>>{
    namespaced: true,

    state: stateFactory(),

    getters: {},

    mutations: {},

    actions: {
        async register(context, payload) {
            let { data } = await $axios({
                method: "post",
                url: "/users",
                data: payload,
            });
        },
    },
};
