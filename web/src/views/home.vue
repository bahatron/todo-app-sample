<template>
    <AppLayout>
        <v-container :style="dashboard_header" fluid align="center">
            <v-row justify="center">
                <v-col cols="8">
                    <NoteForm />
                </v-col>
            </v-row>

            <v-row justify="center">
                <v-col cols="11">
                    <v-row>
                        <v-col cols="2" v-for="note of notes" :key="note">
                            <v-card>
                                <v-card-title> {{ note.header }} </v-card-title>
                                <v-card-text>
                                    {{ note.body }}
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </AppLayout>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import HelloWorld from "../components/hello-world.vue";
import AppLayout from "../layout/app.vue";
import NavBar from "../components/nav-bar.vue";
import NoteForm from "../components/take-note-form.vue";

export default defineComponent({
    name: "Home",

    data() {
        return reactive({
            dashboard_header: {
                "background-color": "lightgrey",
                height: "100%",
            },
            formVisible: false,
        });
    },

    components: {
        HelloWorld,
        AppLayout,
        NavBar,
        NoteForm,
    },

    computed: {
        notes() {
            return this.$store.getters["notes/notes"];
        },
    },

    async mounted() {
        /** @todo: find a way to initialize notes on store, this seems ugly */
        await this.$store.dispatch("notes/fetch");
    },
});
</script>

<style>
/** 
@todo: figure out why this doesn't work
*/
background {
    background-color: blanchedalmond;
}
</style>