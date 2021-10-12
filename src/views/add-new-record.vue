<script>
import Logo from "../components/logo.vue";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { appAxios } from "../lib/app-axios";
import moment from "moment";

export default {
  components: {
    Logo,
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    const schema = yup.object({
      NameSurname: yup.string().required().min(4).max(60).trim(),
      Country: yup.string().required().min(2).max(40).trim(),
      City: yup.string().required().min(2).max(40).trim(),
      Email: yup.string().required().email().trim(),
    });

    return {
      schema,
    };
  },

  methods: {
    onSubmit(record, { resetForm }) {
      // const {NameSurname, Company, Email,Date, Country, City } = record

      //  const newRecords = [
      //   NameSurname,
      //   "TESODEV",
      //   Email,
      //   moment(new Date()).format("DD/MM/YYYY"),
      //   Country,
      //   City,
      //   new Date().getTime(),
      // ];

      const newRecords = {
        id: new Date().getTime(),
        Date: moment(new Date()).format("DD/MM/YYYY"),
        Company: "TESODEV",
        ...record,
      };

      appAxios
        .post("/records", newRecords)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      resetForm();
    },
  },
};
</script>

<template lang="pug">
div
  header.header
    Logo
    div
      button(@click="$router.back()") Return To Previous Page

  Form(:validation-schema="schema", @submit="onSubmit", v-slot="{ errors }")
    div
      label Name Surname
      Field.input(
        :class="{ error: errors.NameSurname }",
        type="text",
        name="NameSurname",
        placeholder="Enter name and surname"
      )
      ErrorMessage.error-message(name="NameSurname")

    div
      label Country
      Field.input(
        :class="{ error: errors.Country }",
        type="text",
        name="Country",
        placeholder="Enter a Country"
      )
      ErrorMessage.error-message(name="Country")

    div
      label City
      Field.input(
        :class="{ error: errors.City }",
        type="text",
        name="City",
        placeholder="Enter a city"
      )
      ErrorMessage.error-message(name="City")

    div
      label E-mail
      Field.input(
        :class="{ error: errors.Email }",
        type="email",
        name="Email",
        placeholder="Enter a e-mail"
      )
      ErrorMessage.error-message(name="Email")

    .btn-container
      button.btn Add
</template>

<style lang="scss" scoped>
@import "../assets/_varaibles.scss";
@import "../assets/_mixin.scss";

div {
  width: 100vw;

  .header {
    display: flex;
    margin-top: 1rem;

    logo {
      max-width: 30vw !important;
    }
    div {
      button {
        font-size: 18px;
        margin-top: 3rem;
        margin-right: 30rem;
        width: 34rem;
        color: #c4c;
        display: inline-block;
        border: none;
        background: transparent;
        font-weight: normal;
        
        &:hover {
          font-weight: bold;
          cursor: pointer;
          color: #000;
        }
      }
    }
  }

  Form {
    width: 50vw;
    margin: 5rem auto;

    div {
      margin: 3rem 0;
      width: inherit;

      label {
        display: block;
        margin-bottom: 0.5rem;
      }

      .input {
        width: inherit;
        padding: 0.5rem;
        border: 2px solid $text-color;
        border-radius: 0.25rem;

        &:focus {
          background: rgba(100, 100, 100, 0.08);
          border: 2px solid rgba(0, 0, 0, 0.6);
        }
      }
    }
    .btn-container {
      text-align: right;
      .btn {
        padding: 0.5rem 1.5rem;
      }
    }

    .error {
      border: 2px solid #ff0000 !important;

      &::placeholder {
        color: #ff0000;
      }
    }

    .error-message {
      font-size: 12px;
      color: #ff0000;
    }
  }
}
</style>