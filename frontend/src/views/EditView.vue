<template>
  <v-card id="Edit">
    <v-card-title class="text-h5" style="background-color: #363638; color: #fff"
      >Editar aluno: {{ student.student_name }}</v-card-title
    >
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
              disabled
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="8">
            <v-text-field
              v-model="student.student_cpf"
              label="CPF"
              disabled
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-container align-content="center">
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
            @click="saveStudent"
            color="primary"
            height="50"
            width="200"
            elevation="2"
            >salvar</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../global";

export default {
  name: "EditView",
  data() {
    return {
      student: {},
    };
  },
  methods: {
    saveStudent() {
      axios
        .put(`${baseApiUrl}/student/${this.student.student_id}`, {
          student_name: this.student.student_name,
          student_email: this.student.student_email,
        })
        .then(() => {
          this.$router.push({ path: "/" });
        });
    },
    cancel() {
      this.$router.push({ path: "/" });
    },
    setStudent() {
      this.student = this.studentStored;
      console.log(this.student);
    },
  },
  computed: {
    studentStored() {
      return this.$store.state.student;
    },
  },
  mounted() {
    this.setStudent();
  },
};
</script>
