<template>
  <v-container>
    <v-bottom-navigation
      class="hidden-lg-and-up"
      v-model="activeBtn"
      color="primary"
      raised
      app
      horizontal
      fixed
    >
      <v-btn v-for="item in barItems" :key="item.title" :to="item.link">
        <span class="hidden-sm-and-down">{{ item.title }}</span>
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </v-container>
</template>

<script>
export default {

  data() {
    return {
      activeBtn: 1
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