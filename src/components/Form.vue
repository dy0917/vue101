<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form @submit.prevent="onSubmitButtonClick">
      <input name="email" v-model="email" />
      <span :class="{ 'is-invalid': emailError }" style="color: Red">
        {{ emailError }}</span
      >
      <button type="submit">Submit</button>
    </form>
    {{ email }}
  </div>
</template>

<script>
import * as yup from "yup";
import { useForm, useField } from "vee-validate";
export default {
  props: ["msg"],
  setup() {
    const simpleSchema = yup.object({
      email: yup.string().required("Enter your email address.").email(),
    });

    const { handleSubmit } = useForm({
      validationSchema: simpleSchema,
    });

    const { value: email, errorMessage: emailError } = useField("email");

    function onInvalidSubmit({ values, errors, results }) {
      console.log("values", values); // current form values
      console.log("errors", errors); // a map of field names and their first error message
      console.log("results", results); // a detailed map of field names and their validation results
    }

    const onSubmit = handleSubmit((values) => {
      console.log(values); // send data to API
      // reset the form and the field values to their initial values
    }, onInvalidSubmit);

    return {
      onSubmit,
      email,
      emailError,
    };
  },
  methods: {
    onSubmitButtonClick() {
      console.log("Asdfasdfasdf");
      this.onSubmit();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
