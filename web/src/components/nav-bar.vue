
<template>
    <v-navigation-drawer
        app
        v-model="$vuetify.smAndUp"
        style="background-color: lightgrey"
    >
        <v-list nav>
            <v-list-item-group active-class="deep-purple--text text--accent-4">
                <v-list-item prepend-icon="mdi-home" title="Home">
                </v-list-item>

                <v-list-item prepend-icon="mdi-account" title="Account">
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useDisplay } from "vuetify";

export default defineComponent({
    setup() {
        let display = useDisplay();

        return {
            display,
            isPermanent: computed(() => display.smAndUp),
        };
    },
});
</script>
