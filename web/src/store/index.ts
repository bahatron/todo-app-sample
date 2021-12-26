import { $axios } from "@/utils/axios";
import { createStore } from "vuex";
import auth from "./auth";
import notes from "./notes";

export default createStore({
    state: {},
    mutations: {},
    actions: {
        async ping() {
            let { data: ping } = await $axios.get("/ping");
            console.log({ ping });
        },
    },
    modules: {
        auth,
        notes,
    },
});
