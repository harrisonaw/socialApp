<template>
  <v-app style="background: #A6EAD3;">
    <TheAppBar />
    <TheBottomBar />
    <TheSpeedDial />
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheAppBar from "./components/TheAppBar"
import TheBottomBar from "./components/TheBottomBar"
import TheSpeedDial from "./components/TheSpeedDial";


export default {
  name: "app",

  components: {
    TheAppBar,
    TheBottomBar,
    TheSpeedDial
  },

  data: () => ({})
};
</script>