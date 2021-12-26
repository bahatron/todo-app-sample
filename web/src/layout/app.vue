<template>
    <v-app>
        <Header />
        <NavBar />
        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/header.vue";
import NavBar from "../components/nav-bar.vue";

export default defineComponent({
    name: "app-layout",
    data() {
        return {
            //
        };
    },

    components: {
        Header,
        NavBar,
    },
});
</script>
