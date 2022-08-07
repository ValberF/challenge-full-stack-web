<template>
  <v-app id="Register">
    <v-form>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8">
            <v-text-field
              v-model="student.student_name"
              label="Nome"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="8">
            <v-text-field
              v-model="student.student_email"
              label="E-mail"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="8">
            <v-text-field
              v-model="student.student_academic_record"
              label="RA"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="8">
            <v-text-field
              v-model="student.student_cpf"
              label="CPF"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-container align-content="center">
      <v-row justify="center">
        <v-col cols="12" sm="6" md="3">
          <v-btn @click="cancel" color="secondary" height="50" width="200" elevation="2"
            >Cancelar</v-btn
          >
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-btn @click="saveStudent" color="primary" height="50" width="200" elevation="2"
            >salvar</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../global";

export default {
  name: "RegisterView",
  data() {
    return {
        student: {}
    };
  },
  methods: {
    saveStudent () {
        axios.post(`${baseApiUrl}/student`, this.student).then(() => {
            this.$router.push({ path: "/" });
        })    
    },
    cancel() {
        this.$router.push({ path: "/" });
    }
  },
};
</script>
