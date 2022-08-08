<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent height="150" width="500">
      <v-card height="130" width="500">
        <v-card-title class="text-h5"> Deseja excluir aluno? </v-card-title>
        <v-card-actions>
          <v-row justify="center">
            <v-col cols="12" sm="6" md="3">
              <v-btn
                @click="closeDialog"
                color="secondary"
                height="40"
                width="100"
                elevation="2"
                >Não</v-btn
              >
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-btn
                @click="deleteStudent"
                color="primary"
                height="40"
                width="100"
                elevation="2"
                >Sim</v-btn
              >
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../global";
import { formatCPF } from "../utils/functions";

export default {
  name: "ModalComponent",
  methods: {
    closeDialog() {
      this.$store.commit("setDialog", false);
    },
    deleteStudent() {
      axios
        .delete(`${baseApiUrl}/student/${this.student.student_id}`)
        .then(() => {
          this.$store.commit("setDialog", false);
          axios.get(`${baseApiUrl}/student`).then((res) => {
            res.data.forEach((element) => {
              element.student_cpf = formatCPF(element.student_cpf);
            });

            this.$store.commit("setStudents", res.data);
          });
        });
    },
  },
  computed: {
    dialog() {
      return this.$store.state.dialog;
    },
    student() {
      return this.$store.state.student;
    },
    students() {
      return this.$store.state.students;
    },
  },
};
</script>

<style></style>
