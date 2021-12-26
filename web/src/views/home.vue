<template>
    <AppLayout>
        <v-container :style="styles" class="card-area">
            <v-row>
                <v-col cols="2" v-for="i of notes" :key="i">
                    <v-card>
                        <v-card-title> Title! </v-card-title>
                        <v-card-text>
                            lorem ipsum I cant be bother to google it
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </AppLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "../components/hello-world.vue";
import AppLayout from "../layout/app.vue";
import NavBar from "../components/nav-bar.vue";

export default defineComponent({
    name: "Home",

    data() {
        return {
            styles: {
                height: "100%",
                "background-color": "lightgrey",
            },
        };
    },

    components: {
        HelloWorld,
        AppLayout,
        NavBar,
    },

    computed: {
        notes() {
            return this.$store.getters["notes/notes"];
        },
    },

    async mounted() {
        await this.$store.dispatch("notes/publish", {
            header: "Title!",
            body: "lorem ipsum I cant be bother to google it",
        });

        /** @todo: find a way to initialize notes on store, this seems ugly */
        await this.$store.dispatch("notes/fetch");
    },
});
</script>

<style>
/** 
@todo: figure out why this doesn't work
*/
card-area {
    height: "100%";
    background-color: blanchedalmond;
}
</style>