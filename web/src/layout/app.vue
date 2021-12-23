<template>
    <Header />
    <v-main>
        <slot />
    </v-main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/header.vue";

export default defineComponent({
    name: "app-layout",
    data() {
        return {
            //
        };
    },

    components: {
        Header,
    },
});
</script>
