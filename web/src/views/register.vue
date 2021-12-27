
<template>
    <AuthLayout>
        <v-card>
            <v-card-header> Login </v-card-header>
            <v-form>
                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="firstName"
                                label="First Name"
                                outlined
                            >
                            </v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-text-field
                                v-model="lastName"
                                label="Last Name"
                                outlined
                            >
                            </v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-text-field
                                v-model="email"
                                label="E-mail"
                                type="email"
                                required
                                outlined
                            >
                            </v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-text-field
                                v-model="password"
                                :counter="8"
                                type="password"
                                label="Password"
                                required
                                outlined
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-btn
                                color="success"
                                @click="submitForm"
                                :disabled="!email || !password"
                                class="mr-2"
                            >
                                Register
                            </v-btn>

                            <v-btn
                                color="error"
                                @click="resetForm"
                                class="ml-2"
                            >
                                Reset
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-form>
            <v-card-actions>
                <span>
                    <a href="/login">Already have an account? Login</a>
                </span>
            </v-card-actions>
        </v-card>
    </AuthLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            firstName: null,
            lastName: null,
            email: null,
            password: null,
        };
    },

    methods: {
        async submitForm() {
            await this.$store
                .dispatch("users/register", {
                    email: this.email,
                    password: this.password,
                    firstName: this.firstName,
                    lastName: this.lastName,
                })
                .then(() => {
                    return this.$store.dispatch("auth/login", {
                        email: this.email,
                        password: this.password,
                    });
                })
                .then(() => this.$router.push("/"))
                .catch((err: any) => alert(err.message ?? "Error logging in"));
        },

        async resetForm() {
            this.email = null;
            this.firstName = null;
            this.lastName = null;
            this.password = null;
        },
    },
});
</script>
