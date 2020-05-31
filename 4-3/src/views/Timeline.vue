<template>
<div>
  <v-layout row wrap align-center>
    <v-flex>

      <v-flex v-for="groceryList in groceryLists" :key="groceryList.name">
        <v-card max-width="344" class="mx-auto my-4" raised>
          <v-list-item>
            <v-list-item-avatar>
              <img :src="groceryList.avatar" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ groceryList.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ groceryList.location }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-tooltip right>
              <template v-slot:activator="{ on }">              
                <v-btn icon v-on="on">
                  <v-icon color="#37DAA3">mdi-share-variant</v-icon>
                </v-btn>
              </template>
              <span>Share</span>
            </v-tooltip>
          </v-list-item>

          <v-divider class="mx-4"></v-divider>


          <v-card-text>Buy an item off of the<strong class="black--text"> grocery list!</strong></v-card-text>

          <v-divider class="mx-4"></v-divider>



          <v-list dense>
            <v-subheader>Grocery List</v-subheader>
            <v-list-item-group>
              <v-layout>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="#37DAA3">mdi-plus</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="groceryList.groceryItem"></v-list-item-title>
                  <v-list-item-subtitle v-text="groceryList.groceryPrice"></v-list-item-subtitle>
                  <v-list-item-subtitle v-text="groceryList.status"></v-list-item-subtitle>

                </v-list-item-content>
              </v-list-item>
              </v-layout>
            </v-list-item-group>
          </v-list>


          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <p class="font-weight-light grey--text my-1">{{ groceryList.date }}</p>
            <v-spacer></v-spacer>

            <v-btn to="/assist" color="#74A7CB" text>Purchase Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-flex>
  </v-layout>
</div>
</template>



<script>

import db from '@/fb' 

export default {
  data() {
    return {
      groceryList: [],
      
      groceryLists: [
        {
          avatar: "profilepic.png",
          name: "Rachel Jenkins",
          location: "Florence, AL",
          date: "May 1st",
          groceryItem: 'Milk gallon', 
          groceryPrice: '$1.15',
          status: 'available'
        },
        {
          avatar: "profilepic.png",
          name: "Bob Sand",
          nameFirstPlural: "Bob's",
          location: "Florence, AL",
          date: "May 1st",
          groceryItem: 'Egg Carton 18 count', 
          groceryPrice: '$2.00',
          status: 'unavailable'
        },
      ],
    };
  },
  created() {
    db.collection('groceryList').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added'){
          this.groceryList.push({
            ...change.doc.data(),
            id: change.doc.GroceryList.name
          })
        }
      })
    })
  }
};
</script>



