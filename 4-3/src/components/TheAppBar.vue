<template>
  <v-card raised class="mx-4 my-4" elevation="0" width="256">
    <v-navigation-drawer class="hidden-md-and-down" fixed app>
      <v-layout column align-center>
        <v-flex class="mt-5"></v-flex>
        <v-avatar size="100">
          <img src="/sircularityIconHappy.png" />
        </v-avatar>
        <p class="grey--text subheading mt-1">SIRCULARITY</p>
      </v-layout>

      <v-spacer></v-spacer>
      <v-list>
        <v-list-item v-for="item in barItems" :key="item.title" :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    barItems () {
      let barItems = [
        { title: "Sign In", icon: "mdi-login", link: "/signin" },
        { title: "Create Account", icon: "mdi-account-plus", link: "/signup" }
  
      ]
      if (this.userIsAuthenticated) {
        barItems = [
          { title: "Dashboard", icon: "mdi-view-dashboard", link: "/" },
          { title: "Timeline", icon: "mdi-chart-timeline-variant", link: "/timeline" },
          { title: "Notifications", icon: "mdi-bell", link: "/notifications" },
          { title: "Profile", icon: "mdi-account", link: "/profile" }
        ]
      }
      return barItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }    
  }
};
</script>