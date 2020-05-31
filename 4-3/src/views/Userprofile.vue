<template>
  <v-container>
    
     
  
    <v-card raised max-width="650" max-height="700" class="text-center mx-auto">
      <v-avatar size="300" centered class="grey lighten-2">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
      </v-avatar>

      <v-card-text class="text-center">
        <h6 class="display-1 mb-1 grey--text">{{ location }}</h6>

        <h4 class="display-2 font-weight-light mb-3 black--text">{{ name }}</h4>

        <v-rating :value="4.5" color="#FDC02F" dense half-increments readonly size="40"></v-rating>

        <template>
          <div class="text-center">
            <v-btn text color="success" @click="sheet = !sheet">
              Reviews
            </v-btn>

            <v-bottom-sheet v-model="sheet">
              <v-sheet class="text-center" height="200px">
                <v-btn class="mt-6" text color="#DA3749" @click="sheet = !sheet">close</v-btn>
                <div class="py-3">This is where your reviews will go.</div>
              </v-sheet>
            </v-bottom-sheet>
          </div>
        </template>

        <v-divider class="mx-4"></v-divider>

        <v-card-text>
          <p class="text-center">{{ bio }}</p>
        </v-card-text>

        <div class="my-2">
          <v-btn color="success" class="#success" text>Add friend</v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
    name: "John Hattaway",
    location: "Muscle Shoals, AL",
    bio:
      "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
    sheet: false,
    tiles: [
      { img: "keep.png", title: "Keep" },
      { img: "inbox.png", title: "Inbox" },
      { img: "hangouts.png", title: "Hangouts" },
      { img: "messenger.png", title: "Messenger" },
      { img: "google.png", title: "Google+" }
    ],

    methods: {
      reserve() {
        this.loading = true;

        setTimeout((this.loading = false), 2000);
      }
    }
  })
};
</script>




