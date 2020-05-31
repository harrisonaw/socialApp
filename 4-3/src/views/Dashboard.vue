<template>
  <v-card raised max-width="1200" class="mx-auto">
    <v-app-bar raised color="#74A7CB">
      <v-toolbar-title>Dashboard</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-card-title >Featured Posts</v-card-title>

     
    
    <v-container>
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card :color="item.color" :to="item.route" raised dark click>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline" v-text="item.page"><strong></strong></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  
  data: () => ({
    items: [
      {
        color: "#7973C9",
        src: "message.png",
        page: "Messages",
        artist: "Learn how micro-crowdfunding works!",
        route: "/privatechat"
      },
      {
        color: "#37DAA3",
        src: "cogs.png",
        page: "Settings",
        artist: "Follow this link to our trustworthy news source.",
        route: "/settings"
      }
    ]
  }),
  
  
};
</script>