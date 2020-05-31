<template>
  <v-container>
    <div>
    <v-card raised max-width="1200"
    class="mx-auto">
      <v-toolbar raised color="#74A7CB">
        <v-toolbar-title>Settings</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <v-list subheader two-line flat>
        <v-subheader>Account</v-subheader>

        <v-list-item-group v-model="settings" multiple>
          
          <v-list-item to="/Editprofile">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-list-item-icon>
                  <v-icon active color="primary" @click="toggle">mdi-account-edit</v-icon>
                </v-list-item-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Edit Profile</v-list-item-title>
                <v-list-item-subtitle>Change profile picture, email, phone number, and password.</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item to="/help">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-list-item-icon>
                  <v-icon active color="primary" @click="toggle">mdi-help</v-icon>
                </v-list-item-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Help</v-list-item-title>
                <v-list-item-subtitle>Support, FAQ, about, terms and conditions, and privacy policy.</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-divider></v-divider>

      <v-list subheader two-line flat>
        <v-subheader>Preferences</v-subheader>

        <v-list-item-group v-model="settings" multiple>
          
          <v-list-item to="/privacycontrols">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-list-item-icon>
                  <v-icon active color="primary" @click="toggle">mdi-eye</v-icon>
                </v-list-item-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Privacy Controls</v-list-item-title>
                <v-list-item-subtitle>Who can view your profile.</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>
       
          <v-list-item to="/notificationssettings">
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-list-item-icon>
                  <v-icon active color="primary" @click="toggle">mdi-bell</v-icon>
                </v-list-item-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Notifications</v-list-item-title>
                <v-list-item-subtitle>Adjust your notifications.</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>

          <v-list-item href="#">
            <template >
              <v-list-item-action>
                <v-list-item-icon>
                  <v-icon @click="logout()">mdi-bell</v-icon>
                </v-list-item-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Notifications</v-list-item-title>
                <v-list-item-subtitle>Adjust your notifications.</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-card>
    </div>
  </v-container>
</template>



<script>

import firebase from 'firebase'

export default {


  data: () => {
    return {
      settings: []
    };
    
  },
  methods:{
    logout(){
      firebase.auth().signout()
      .then(()=> {
        this.$router.replace('/');
      })
      .catch((err)=>{
        console.log(err);
      });
    }
    }
  }
</script>



  