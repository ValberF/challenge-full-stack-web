<template>
  <v-card id="Register" height="80vh">
    <v-card-title class="text-h5" style="background-color: #363638; color: #fff">Cadastro de aluno</v-card-title>
    <v-form @submit.prevent="saveStudent" lazy-validation height="100%">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8">
            <v-alert v-if="errors.fields" type="error">
              Preencha todos os campos!
            </v-alert>
            <v-text-field
              v-model="student.student_name"
              label="Nome"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="8">
            <v-text-field
              v-model="student.student_email"
              type="email"
              label="E-mail"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="8">
            <v-text-field
              v-model="student.student_academic_record"
              label="RA"
              type="number"
              outlined
            ></v-text-field>
            <v-alert v-if="errors.academic_record" type="error">
              {{ errors.academic_record }}
            </v-alert>
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
      <v-row justify="center">
        <v-col cols="12" sm="6" md="3">
          <v-btn
            @click="cancel"
            color="secondary"
            height="50"
            width="200"
            elevation="2"
            >Cancelar</v-btn
          >
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-btn
            type="submit"
            color="primary"
            height="50"
            width="200"
            elevation="2"
            >salvar</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../global";

export default {
  name: "RegisterView",
  data() {
    return {
      student: {},
      errors: {
        academic_record: "",
        fields: false,
      },
    };
  },
  methods: {
    saveStudent() {
      axios
        .post(`${baseApiUrl}/student`, this.student)
        .then(() => {
          alert("Aluno criado com sucesso!")
          this.$router.push({ path: "/" });
        })
        .catch((err) => {
          if (err.response.status == 400) {
            this.errors.fields = false;
            this.errors.academic_record = err.response.data.message;
          }
          if (err.response.status == 500) {
            this.errors.fields = true;
          }
        });
    },
    cancel() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>
