<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <span>Módulo Acadêmico</span>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          @click="redirectPage(text)"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "SideNav",
  data: () => ({
    drawer: null,
    links: [
      ["mdi-account", "Alunos"],
      ["mdi-help", "Sobre"],
    ],
  }),
  methods: {
    redirectPage(text) {
      if (text == "Alunos") this.$router.push({ path: "/" });
      if (text == "Sobre") this.$router.push({ path: "/about" });
    },
  },
};
</script>

<style></style>
