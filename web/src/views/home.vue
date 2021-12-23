<template>
    <AppLayout>
        <HelloWorld />
    </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "../components/hello-world.vue";
import AppLayout from "../layout/app.vue";

export default defineComponent({
    name: "Home",

    components: {
        HelloWorld,
        AppLayout,
    },
});
</script>
