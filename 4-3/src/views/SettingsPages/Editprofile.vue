<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card raised ref="form" class="text-center mx-auto">
          <v-avatar size="300" center class="grey lighten-2">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
          </v-avatar>

          <v-card-text>
            <v-chip class="text-center ma-1" color="indigo" text-color="white" @click="v-on">
              <v-avatar left>
                <v-icon>mdi-camera</v-icon>
              </v-avatar>Change Profile Picture
            </v-chip>

            <v-text-field
              readonly
              label="First Name"
              placeholder="Kennedy (I need to make placeholder's dymanic)"
              hint="This field can't be edited"
            ></v-text-field>

            <v-text-field
              readonly
              label="Last Name"
              placeholder="Thomas"
              hint="This field can't be edited"
            ></v-text-field>

            <v-text-field
              v-model="email"
              label="email"
              placeholder="kthomas@gmail.com (I need to signify that there is information here already)"
              required
            ></v-text-field>

            <v-text-field
              label="phonenumber"
              placeholder="(555) 555-5555 (I need to signify that there is information here already)"
              required
            ></v-text-field>

            <v-text-field
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              label="Password"
              placeholder="Password"
              @click:append="show = !show"
              required
            ></v-text-field>

            <v-text-field
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              label="Confirm Password"
              placeholder="Confirm Password"
              required
            ></v-text-field>
          </v-card-text>
          <v-divider class="mt-12"></v-divider>
          <v-card-actions>
            <v-btn text color="secondary" router to="/settings">Cancel</v-btn>

            <v-spacer></v-spacer>

            <v-btn text color="success" router to="/settings">Update</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    errorMessages: "",
    name: null,
    email: null,
    phoneNumber: null,
    confirmPassword: null,
    password: null,
    formHasErrors: false,
    return: {
      show: false,
      password: "Password",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min. 8 characters",
        passwordMatch: () => "Make sure your password's are matching"
      }
    }
  }),

  computed: {
    form() {
      return {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phoneNumber: this.phoneNumber,
        password: this.password,
        confirmPassword: this.confirmPassword
      };
    }
  }
};
</script>