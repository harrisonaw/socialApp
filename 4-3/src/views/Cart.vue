<template>
  <v-row>
    <v-fab-transition>
      <v-btn class="ma-2" color="blue" @click.stop="dialog = true" dark fab bottom right>
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-fab-transition>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-list-item>
          <v-list-item-avatar>
            <img src="profilepic.png" alt="John" size="25" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">{{ name }}</v-list-item-title>
            <v-list-item-subtitle>{{ location }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-col cols="12" md="12">
          <v-text-input>
            <v-textarea solo color="white" name="input-7-4" label="Write about anything!"></v-textarea>
          </v-text-input>
        </v-col>

        <v-card-actions>
          <v-flex>
            <Exchangeskills />
          </v-flex>
        </v-card-actions>

        <v-card-actions>
          <v-flex>
            <Crowdfundrequest />
          </v-flex>
        </v-card-actions>

        <v-card-actions>
          <v-flex>
            <Addgrocery />
          </v-flex>
        </v-card-actions>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            :loading="loading3"
            :disabled="loading3"
            color="#74A7CB"
            class="ma-2 white--text"
            @click="loader = 'loading3'"
          >
            Upload
            <v-icon color="white" left dark>mdi-cloud-upload</v-icon>
          </v-btn>

          <v-btn
            class="ma-2 white--text"
            :loading="loading4"
            :disabled="loading4"
            color="#37DAA3"
            @click="loader = 'loading3'"
          >Post</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Exchangeskills from "./Exchangeskills";
import Crowdfundrequest from "./Crowdfundrequest";
import Addgrocery from "./Addgrocery";

export default {
  components: {
    Exchangeskills,
    Crowdfundrequest,
    Addgrocery
  },

  data() {
    return {
      name: "Kennedy Thomas",
      location: "Florence, AL",
      dialog: false
    };
  }
};
</script>