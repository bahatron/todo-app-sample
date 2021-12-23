<template>
    <v-main>
        <v-container fluid fill-height>
            <slot />
        </v-container>
    </v-main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "auth-layout",
});
</script>
