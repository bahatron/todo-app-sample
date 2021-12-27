<template>
    <v-app>
        <v-main style="background-color: lightgrey" class="align-center">
            <v-row justify="center">
                <v-col cols="12" sm="8">
                    <h1>My Sample Todo App</h1>
                    <h3>Heavily inspired in Google Keep :)</h3>
                    <slot />
                </v-col>
            </v-row>
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