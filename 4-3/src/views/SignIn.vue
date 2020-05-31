<template>
  <div id="signin">
    <v-container>
      <v-card color="white" width="600" class="mx-auto my-5 mt-auto" raised>
        <v-card-title>
          <h1 class="display-1">Sign In</h1>
        </v-card-title>
        <v-card-text>
          <form id="signup-form" @submit.prevent="onSignin">

            <v-text-field
              v-model="email"
              id="email"
              :rules="emailRules"
              label="E-mail"
              required
              solo
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


            <v-divider></v-divider>
            <v-card-actions>
              <v-btn color="#3830A6" class="mx-5 my-4 white--text" type="submit">Submit</v-btn>
            </v-card-actions>
          </form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default {
  

  data: () => ({

    email: "",
    password: "",

    showPassword: false,


    msg: null,
    success: false,
    terms: false,

    
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
   }
 },
 watch: {
   user (value) {
     if (value !== null && value !== undefined) {
       this.$router.push('/')
     }
   }
 },
  methods: {
    onSignin() {

      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password,
      });
    }
  }
};
</script>