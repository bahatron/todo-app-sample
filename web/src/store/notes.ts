import { Module } from "vuex";
import { reactive } from "vue";
import { $axios } from "@/utils/axios";

function stateFactory() {
    return reactive({
        notes: [] as any[],
    });
}

export default <Module<ReturnType<typeof stateFactory>, any>>{
    namespaced: true,

    state: stateFactory(),

    getters: {
        notes: (state) => state.notes,
    },

    mutations: {
        add(state, note: any[] | any) {
            Array.isArray(note)
                ? (state.notes = [...state.notes, ...note])
                : state.notes.push(note);
        },
    },

    actions: {
        async fetch(context) {
            let { data } = await $axios({
                method: "get",
                url: "/notes",
                headers: {
                    authorization: context.rootGetters["auth/token"],
                },
                data: {},
            });

            console.log({ data });

            context.commit("add", data);
        },

        async publish(context, payload) {
            console.log({
                token: context.rootGetters["auth/token"],
            });

            let { data } = await $axios({
                method: "post",
                url: "/notes",
                headers: {
                    authorization: context.rootGetters["auth/token"],
                },
                data: payload,
            });

            console.log({ data });

            context.commit("add", data);
        },
    },
};
