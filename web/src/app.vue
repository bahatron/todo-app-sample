<template>
    <DefaultLayout>
        <router-view />
    </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "./layout/default.vue";

export default defineComponent({
    name: "App",

    data() {
        return {
            //
        };
    },

    mounted() {
        // this.$store.dispatch("s")
    },

    components: {
        DefaultLayout,
    },
});
</script>
