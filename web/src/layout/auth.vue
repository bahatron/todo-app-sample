<template>
    <v-app>
        <v-main>
            <v-container fluid class="fill-height flex align-items-center">
                <slot />
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "auth-layout",
});
</script>

<style>
centered {
    background-color: blanchedalmond;
    align-items: center;
}
</style>