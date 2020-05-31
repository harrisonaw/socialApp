<template>
  
  <v-container>
    <v-flex v-for="user in profileCard" :key="user.name">
      <v-card raised max-width="650" class="mx-auto my-4">
        <v-parallax height="150" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax>

        <v-card-text class>
          <v-container>
            <v-avatar size="150" left class="profile d-flex mb-6">
              <img :src="user.avatar" />
            </v-avatar>
          </v-container>

          <h4 class="display-2 d-flexcd font-weight-light black--text">{{ user.name }}</h4>

          <h6 class="display-1 d-flex grey--text">{{ user.location }}</h6>

          <template>
            <div class="d-flex mb-6">
              <v-rating :value="4.5" color="#FDC02F" dense half-increments readonly size="40"></v-rating>
            </div>
          </template>

          <v-divider class="mx-4"></v-divider>

          <v-card-text>
            <p class="text-center">{{ user.bio }}</p>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>
        </v-card-text>

        <v-tabs background-color="#74A7CB" centered dark icons-and-text>
          <v-tabs-slider></v-tabs-slider>
          <v-spacer></v-spacer>

          <v-tab v-for="user in postsTab" :key="user.name">
            <v-icon left>mdi-post</v-icon>Posts
          </v-tab>
          <v-spacer></v-spacer>
          <v-tab v-for="user in friendsTab" :key="user.name">
            <v-icon left>mdi-account-group</v-icon>Friends
          </v-tab>

          <v-spacer></v-spacer>

          <v-tab v-for="user in ratingsTab" :key="user.name">
            <v-icon left>mdi-star</v-icon>Ratings
          </v-tab>

          <v-spacer></v-spacer>
        </v-tabs>

        <v-tab-item>
          <v-card flat>
            <pictureTextPost />
          </v-card>
        </v-tab-item>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
            <v-card raised>
              <v-card-text>{{ text }}</v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-flex>

    <!-- end of profile card -->
  </v-container>
</template>

<script>


export default {
  

  data: () => ({
    profileCard: [
      {
        avatar: "profilepic.png",
        name: "Rachel Jenkins",
        location: "Florence, AL",
        bio:
          "Dont be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        reviews: "This is where your reviews will go."
      }
    ],
    loading: false,
    selection: 1,
    sheet: false,

    methods: {
      reserve() {
        this.loading = true;

        setTimeout((this.loading = false), 2000);
      },
      tab: null,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    friends: [
      {
        name: "John Jenkins",
        location: "Florence, AL",
        avatar: "https://cdn.vuetifyjs.com/images/john.jpg"
      }
    ],
    postsTab: [{}],
    friendsTab: [{}],
    ratingsTab: [{}]
  })
};
</script>
