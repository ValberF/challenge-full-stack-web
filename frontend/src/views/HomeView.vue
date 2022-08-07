<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-app id="Home">
    <v-container>
      <v-row justify="space-around">
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="search"
            label="Digite sua busca"
            solo
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-btn
            @click="redirectRegister"
            color="primary"
            height="50"
            width="200"
            elevation="2"
            >Cadastrar Aluno</v-btn
          >
        </v-col>
      </v-row>
    </v-container>

    <v-data-table
      app
      :headers="headers"
      :items="filteredList"
      :items-per-page="10"
      class="elevation-1"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="redirectEdit(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-app>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../global";
import { formatCPF } from "../utils/functions";

export default {
  name: "HomeView",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Registro Acadêmico",
          align: "center",
          value: "student_academic_record",
        },
        { text: "Nome", align: "center", value: "student_name" },
        { text: "E-mail", align: "center", value: "student_email" },
        { text: "CPF", align: "center", value: "student_cpf" },
        { text: "Ações", value: "actions" },
      ],
      desserts: [],
    };
  },
  methods: {
    getStudent() {
      axios.get(`${baseApiUrl}/student`).then((res) => {
        res.data.forEach((element) => {
          element.student_cpf = formatCPF(element.student_cpf);
          element.action = (
            <div>
              <span>editar</span> <span>excluir</span>
            </div>
          );
        });

        this.desserts = res.data;
      });
    },
    redirectRegister() {
      this.$router.push({ path: "/register" });
    },
    redirectEdit(item) {
      this.$store.commit('setStudent', item)
      this.$router.push({ path: "/edit" });
    },
  },
  mounted() {
    this.getStudent();
  },
  computed: {
    filteredList() {
      return this.desserts.filter((element) => {
        let name = element.student_name;
        return name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>
