<template>
    <v-card>
        <v-card-title @click="toggleForm" style="cursor: pointer">
            Take a note...
        </v-card-title>

        <v-form ref="form" v-if="isFormVisible" class="pa-4">
            <v-text-field v-model="header" label="Header" outlined />

            <v-textarea v-model="body" label="Body" required outlined />

            <v-card-actions>
                <v-btn
                    color="success"
                    @click="createNote"
                    :disabled="isFormInvalid"
                >
                    Submit
                </v-btn>

                <v-btn color="error" class="mr-4" @click="resetForm">
                    Reset
                </v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data: () => ({
        header: null,
        body: null,
        formVisible: false,
        bodyRules: [(val: any) => typeof val === "string"],
    }),

    methods: {
        toggleForm() {
            this.formVisible = !this.formVisible;
        },

        resetForm() {
            this.header = null;
            this.body = null;
            this.formVisible = false;
        },

        async createNote() {
            await this.$store.dispatch("notes/publish", {
                header: this.header,
                body: this.body,
            });

            this.resetForm();
        },
    },

    computed: {
        isFormVisible(this: any) {
            return this.formVisible;
        },

        isFormInvalid(this: any) {
            return !this.body || !this.header;
        },
    },
});
</script>
