<template>
  <v-container>
    <v-card raised max-width="700" class="mx-auto">
      
      <v-toolbar raised color="accent">
        
        <v-toolbar-title>Help</v-toolbar-title>
      
      </v-toolbar>

      <v-list subheader two-line flat>
        <v-list-item-group v-model="settings" multiple>
          
          <v-list-item to="/Support">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-list-item-icon>
                  <v-icon active color="primary" @click="toggle">mdi-face-agent</v-icon>
                </v-list-item-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Support</v-list-item-title>
                <v-list-item-subtitle>Delete Sircularity account and get in touch.</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item to="/faq">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-list-item-icon>
                  <v-icon active color="primary" @click="toggle">mdi-frequently-asked-questions</v-icon>
                </v-list-item-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>FAQ</v-list-item-title>
                <v-list-item-subtitle>Check out some of the frequently asked questions!</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item to="/about">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-list-item-icon>
                  <v-icon active color="primary" @click="toggle">mdi-information-variant</v-icon>
                </v-list-item-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>About</v-list-item-title>
                <v-list-item-subtitle>Learn more about Sircularity!</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item to="termsandconditions">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-list-item-icon>
                  <v-icon active color="primary" @click="toggle">mdi-book-open-page-variant</v-icon>
                </v-list-item-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Terms and Conditions</v-list-item-title>
                <v-list-item-subtitle>By operating Sircularity, you have agreed with our terms and conditions.</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item to="privacypolicy">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-list-item-icon>
                  <v-icon active color="primary" @click="toggle">mdi-shield-account</v-icon>
                </v-list-item-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Privacy Policy</v-list-item-title>
                <v-list-item-subtitle>Thank you for using Sircularity! We wrote this policy to help you understand more about what we do.</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>



<script>


export default {


  data: () => ({
    
  })
};
</script>