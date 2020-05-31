<template>
  <v-row>
    <v-tooltip v-model="show" bottom>
      <template v-slot:activator="{ on }">
        <v-btn class="mx-5" color="pink" @click.stop="dialog = true" small dark fab>
          <v-icon icon v-on="on">mdi-plus</v-icon>
        </v-btn>
      </template>
      <span class="hidden-lg-and-up">Create Post</span>
    </v-tooltip>

    <v-dialog v-model="dialog" max-width="344">
      <v-card max-width="344" class="mx-auto my-4" v-model="closer" raised>
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="headline">{{ name }}</v-list-item-title>
            <v-list-item-subtitle>{{ location }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <!-- table -->
        <v-divider class="mx-4"></v-divider>

        <v-data-table
          :headers="headers"
          :items="groceryItems"
          sort-by="calories"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>Grocery List</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog2" max-width="500px">
                <template v-slot:activator="{ on }">
                  <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.name" label="Grocery Item"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field v-model="editedItem.price" label="Price"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="save">Add</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
          </template>
        </v-data-table>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn class="ma-2 white--text" color="#37DAA3" @click="submit">Post</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>



<script>

import db from "@/fb";

export default {
  data: () => ({
    avatar: "friendsPic.png",
    name: "Charlie Go-Getter",
    location: "Florence,AL",

    dialog: false,
    dialog2: false,

    headers: [
      {
        text: "Grocery Item",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Price", value: "price" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    groceryItems: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      price: 0
    },
    defaultItem: {
      name: "",
      price: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.groceryItems = [
        {
          name: "Milk gallon",
          price: 1.15
        },
        {
          name: "Bread loaf",
          price: 2.3
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.groceryItems.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.groceryItems.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.groceryItems.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.groceryItems[this.editedIndex], this.editedItem);
      } else {
        this.groceryItems.push(this.editedItem);
      }
      
    },

    submit() {

      const groceryList = {
        avatar: this.avatar,
        name: this.name,
        location: this.location,
        groceryItems: this.groceryItems
      };

      db.collection("groceryList")
        .add(groceryList)
        .then(() => {
          this.dialog = false;
        });
    }
  }
};
</script>