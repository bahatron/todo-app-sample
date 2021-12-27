
<template>
    <AuthLayout>
        <v-card>
            <v-card-header> Login </v-card-header>
            <v-form>
                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="email"
                                label="E-mail"
                                required
                                outlined
                            ></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <v-text-field
                                v-model="password"
                                :counter="10"
                                type="password"
                                label="Password"
                                required
                                outlined
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-btn color="primary" @click="doLogin">
                                Login
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-form>
            <v-card-actions>
                <span>
                    <a href="/register">Don't have an account yet? Register</a>
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
            email: "",
            password: "",
        };
    },

    methods: {
        async doLogin() {
            await this.$store
                .dispatch("auth/login", {
                    email: this.email,
                    password: this.password,
                })
                .then(() => {
                    this.$router.push("/");
                })
                .catch((err: any) => alert(err.message ?? "Error logging in"));
        },
    },
});
</script>
