import { Module } from "vuex";
import { reactive } from "vue";
import { $axios } from "@/utils/axios";

function stateFactory() {
    return reactive({
        token: "",
        session: {},
    });
}

export default <Module<ReturnType<typeof stateFactory>, any>>{
    namespaced: true,

    state: stateFactory(),

    getters: {
        token: (state) => state.token,
        session: (state) => state.session,
    },

    actions: {
        async login(context, { email, password }) {
            try {
                let { data } = await $axios.get("/ping");

                console.log({ data });
            } catch (err) {
                console.error(err);
            }
        },
    },
};
