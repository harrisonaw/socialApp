<template>
  <div id="signup">
    <v-container>
      <v-card color="white" width="600" class="mx-auto my-5 mt-auto" raised>
        <v-card-title>
          <h1 class="display-1">Sign Up</h1>
        </v-card-title>
        <v-card-text>
          <form id="signup-form" @submit.prevent="onSignup">
            <v-text-field
              v-model="firstname"
              id="firstname"
              :counter="10"
              label="First name"
              required
              solo
              single-line
            ></v-text-field>

            <v-text-field
              v-model="lastname"
              id="lastname"
              :counter="10"
              label="Last name"
              required
              solo
            ></v-text-field>

            <v-text-field
              v-model="email"
              id="email"
              :rules="emailRules"
              label="E-mail"
              required
              solo
            ></v-text-field>

            <v-text-field
              v-model="username"
              id="username"
              :rules="usernameRules"
              single-line
              solo
              label="Username"
              prefix="@"
            ></v-text-field>

            <v-text-field
              type="number"
              v-model="phoneNumber"
              id="phoneNumber"
              :rules="phoneRules"
              label="Phone Number"
              required
              solo
              counter="10"
            ></v-text-field>

            <v-text-field
              v-model="password"
              id="password"
              :rules="passswordRules"
              single-line
              solo
              prepend-inner-icon="mdi-textbox-password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
              label=" Enter Password"
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              id="confirmPassword"
              :rules="passswordRules"
              single-line
              solo
              prepend-inner-icon="mdi-textbox-password"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="showPassword ? 'text' : 'Password'"
              @click:append="showPassword = !showPassword"
              label="Confirm Password"
            ></v-text-field>

            <v-divider></v-divider>
            <template>
              <TermsOfServiceDialog />
            </template>
            <v-checkbox v-model="terms" label="I agree to the terms of service"></v-checkbox>
            <v-card-actions>
              <v-btn color="#3830A6" class="mx-5 my-4 white--text" type="submit">Create Account</v-btn>
            </v-card-actions>
          </form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import TermsOfServiceDialog from "@/components/TermsOfServiceDialog";


export default {
  components: {
    TermsOfServiceDialog,
  },

  data: () => ({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password: "",
    username: "",
    confirmPassword: "",

    showPassword: false,


    msg: null,
    success: false,
    terms: false,

    usernameRules: [
      v => v.length <= 15 || "Number must be less than 15 characters"
    ],
    phoneRules: [
      v => v.length <= 10 || "Number must be less than 10 characters"
    ],
    nameRules: [
      v => !!v || "Name is required",
      v => v.length <= 10 || "Name must be less than 10 characters"
    ],
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    passswordRules: [
      v => v.length <= 10 || "Password must be less than 10 characters"
    ]
  }),
 computed: {
   user () {
     return this.$store.getters.user
   },

 },
 watch: {
   user (value) {
     if (value !== null && value !== undefined) {
       this.$router.push('/')
     }
   }
 },
  methods: {
    onSignup() {

      this.$store.dispatch("signUserUp", {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        email: this.email,
        phoneNumber: this.phoneNumber,
        password: this.password,
        confirmPassword: this.confirmPassword
      });
    },
  }
};
</script>