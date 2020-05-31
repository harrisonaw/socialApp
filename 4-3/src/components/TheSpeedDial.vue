<template>
  <v-row>
    <v-container>
      <v-speed-dial
        v-model="fab"
        :top="top"
        :right="right"
        :direction="direction"
        :transition="transition"
        :absolute="true"
      >
        <template v-slot:activator>
          <v-btn v-model="fab" color="blue darken-2" dark fab>
            <v-icon v-if="fab">mdi-close</v-icon>
            <v-icon v-else>mdi-emoticon-happy-outline</v-icon>
          </v-btn>
        </template>

        <template>
          <CreatePost />
        </template>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn fab small dark to="/cart" class="mx-5" color="pink">
              <v-icon icon v-on="on">mdi-cart</v-icon>
            </v-btn>
          </template>
          <span>Grocery Cart</span>
        </v-tooltip>
      </v-speed-dial>
    </v-container>
  </v-row>
</template>

<script>

import CreatePost from './CreatePost'

export default {

  components: {
    CreatePost
  },

  data: () => ({
    direction: "left",
    fab: false,
    tabs: null,
    top: true,
    right: true,
    transition: "slide-y-reverse-transition"
  })
};
</script>