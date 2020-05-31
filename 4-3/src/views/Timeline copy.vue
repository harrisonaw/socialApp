<template>
<div>
  <v-layout row wrap align-center>
    <v-flex>
      <v-flex v-for="user in textPost" :key="user.name">
        <v-card max-width="344" color="#EEEEEE" class="mx-auto my-4" raised>
          <v-list-item>
            <v-list-item-avatar>
              <img :src="user.avatar" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ user.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.location }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-tooltip v-model="show" right>
              <template v-slot:activator="{ on }">              
                <v-btn icon v-on="on">
                  <v-icon color="#37DAA3">mdi-share-variant</v-icon>
                </v-btn>
              </template>
              <span>Share</span>
            </v-tooltip>
          </v-list-item>

          <v-divider class="mx-4"></v-divider>

          <v-card-text>{{ user.postMessage }}</v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <p class="font-weight-light grey--text my-1">{{ user.date }}</p>
            <v-spacer></v-spacer>
            <v-btn
                :class="fav ? 'red--text' : ''"
                icon
                @click="fav = !fav"
              >
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            <v-btn icon>
              <v-icon>mdi-message-reply-text</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

    <!-- break -->

      <v-flex v-for="user in picturePost" :key="user.name">
        <v-card max-width="344" color="#EEEEEE" class="mx-auto my-4" raised>
          <v-list-item>
            <v-list-item-avatar>
              <img :src="user.avatar" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ user.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.location }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-tooltip v-model="show" right>
              <template v-slot:activator="{ on }">              
                <v-btn icon v-on="on">
                  <v-icon color="#37DAA3">mdi-share-variant</v-icon>
                </v-btn>
              </template>
              <span>Share</span>
            </v-tooltip>
          </v-list-item>

          <v-divider class="mx-4"></v-divider>

          <v-img :src="user.postImage" height="194"></v-img>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <p class="font-weight-light grey--text my-1">{{ user.date }}</p>
            <v-spacer></v-spacer>
            <v-btn
                :class="fav2 ? 'red--text' : ''"
                icon
                @click="fav2 = !fav2"
              >
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            <v-btn icon>
              <v-icon>mdi-message-reply-text</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

    <!-- break -->

      <v-flex v-for="user in pictureTextPost" :key="user.name">
        <v-card max-width="344" color="#EEEEEE" class="mx-auto my-4" raised>
          <v-list-item>
            <v-list-item-avatar>
              <img :src="user.avatar" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ user.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.location }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-tooltip v-model="show" right>
              <template v-slot:activator="{ on }">              
                <v-btn icon v-on="on">
                  <v-icon color="#37DAA3">mdi-share-variant</v-icon>
                </v-btn>
              </template>
              <span>Share</span>
            </v-tooltip>
          </v-list-item>

          <v-divider class="mx-4"></v-divider>

          <v-img :src="user.postImage" height="194"></v-img>

          <v-divider class="mx-4"></v-divider>

          <v-card-text>{{ user.postMessage }}</v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <p class="font-weight-light grey--text my-1">{{ user.date }}</p>
            <v-spacer></v-spacer>
            <v-btn
                :class="fav3 ? 'red--text' : ''"
                icon
                @click="fav3 = !fav3"
              >
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            <v-btn icon>
              <v-icon>mdi-message-reply-text</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

    <!-- break -->

      <v-flex v-for="user in exchangeSkillsPost" :key="user.name">
        <v-card max-width="344" class="mx-auto my-4" raised>
          <v-list-item>
            <v-list-item-avatar>
              <img :src="user.avatar" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ user.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.location }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-tooltip v-model="show" right>
              <template v-slot:activator="{ on }">              
                <v-btn icon v-on="on">
                  <v-icon color="#37DAA3">mdi-share-variant</v-icon>
                </v-btn>
              </template>
              <span>Share</span>
            </v-tooltip>
          </v-list-item>

          <v-divider class="mx-4"></v-divider>

          <v-card-text>
            Kennedy is looking for
            <strong class="black--text">{{ user.skillsWanted }}</strong> in return of
            <strong class="black--text">{{ user.skillsOwned }}.</strong>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <p class="font-weight-light grey--text my-1">{{ user.date }}</p>
            <v-spacer></v-spacer>

            <v-btn to="/interested" color="#3830A6" text>I'm Interested</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

    <!-- break -->

      <v-flex v-for="user in crowdfundPost" :key="user.name">
        <v-card max-width="344" class="mx-auto my-4" raised>
          <v-list-item>
            <v-list-item-avatar>
              <img :src="user.avatar" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ user.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.location }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-tooltip v-model="show" right>
              <template v-slot:activator="{ on }">              
                <v-btn icon v-on="on">
                  <v-icon color="#37DAA3">mdi-share-variant</v-icon>
                </v-btn>
              </template>
              <span>Share</span>
            </v-tooltip>
          </v-list-item>

          <v-divider class="mx-4"></v-divider>

          <v-card-text>
            Kennedy needs
            <strong class="black--text">{{ user.amount }}</strong> by
            <strong class="black--text">{{ user.dueDate }}</strong> to pay for
            <strong class="black--text">{{ user.reason }}.</strong>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <p class="font-weight-light grey--text my-1">{{ user.date }}</p>
            <v-spacer></v-spacer>

            <v-btn to="/assist" color="#74A7CB" text>Assist {{ user.nameFirst }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>

    <!-- break -->

      <v-flex v-for="user in groceryList" :key="user.name">
        <v-card max-width="344" class="mx-auto my-4" raised>
          <v-list-item>
            <v-list-item-avatar>
              <img :src="user.avatar" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{ user.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ user.location }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-tooltip v-model="show" right>
              <template v-slot:activator="{ on }">              
                <v-btn icon v-on="on">
                  <v-icon color="#37DAA3">mdi-share-variant</v-icon>
                </v-btn>
              </template>
              <span>Share</span>
            </v-tooltip>
          </v-list-item>

          <v-divider class="mx-4"></v-divider>


          <v-card-text>Buy an item off of {{ user.nameFirstPlural }}<strong class="black--text"> grocery list!</strong></v-card-text>

          <v-divider class="mx-4"></v-divider>


          <!-- start -->

          <v-list dense>
            <v-subheader>Grocery List</v-subheader>
            <v-list-item-group v-model="item" color="primary">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon color="#37DAA3">mdi-plus</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.groceryItem"></v-list-item-title>
                  <v-list-item-subtitle v-text="item.groceryPrice"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <!-- End -->

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <p class="font-weight-light grey--text my-1">{{ user.date }}</p>
            <v-spacer></v-spacer>

            <v-btn to="/assist" color="#74A7CB" text>Purchase Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-flex>
  </v-layout>
</div>
    <!-- break -->
</template>



<script>
export default {
  data() {
    return {
      fav: false,
      fav2: false,
      fav3: false,
      textPost: [
        {
          avatar: "profilepic.png",
          name: "Rachel Jenkins",
          location: "Florence, AL",
          date: "May 1st",
          postMessage: "This is the best app ever!"
        }
      ],
      picturePost: [
        {
          avatar: "profilepic.png",
          name: "Rachel Jenkins",
          location: "Florence, AL",
          date: "May 1st",
          postImage: "foodbanner.png"
        }
      ],
      pictureTextPost: [
        {
          avatar: "profilepic.png",
          name: "Rachel Jenkins",
          location: "Florence, AL",
          date: "May 1st",
          postImage: "foodbanner.png",
          postMessage: "This is the best app ever!"
        }
      ],
      exchangeSkillsPost: [
        {
          avatar: "profilepic.png",
          name: "Rachel Jenkins",
          location: "Florence, AL",
          date: "May 1st",
          skillsOwned: "food/grocery delivery",
          skillsWanted: "car repair"
        }
      ],
      crowdfundPost: [
        {
          avatar: "profilepic.png",
          name: "Rachel Jenkins",
          nameFirst: "Rachel",
          location: "Florence, AL",
          date: "May 1st",
          amount: "$200",
          dueDate: "June 1st",
          reason: "rent"
        }
      ],
      groceryList: [
        {
          avatar: "profilepic.png",
          name: "Rachel Jenkins",
          nameFirstPlural: "Rachel's",
          location: "Florence, AL",
          date: "May 1st"
        }
      ],
      item: 1,
      items: [
        { groceryItem: 'Milk gallon', 
          groceryPrice: '$1.15',
        },
        { groceryItem: 'Bread loaf', 
          groceryPrice: '$2.30',
        },
        { groceryItem: 'Egg carton', 
          groceryPrice: '$1.10',
        },
        { groceryItem: 'Light bulbs', 
          groceryPrice: '$5.50',
        },
        { groceryItem: 'Toilet paper 24 count', 
          groceryPrice: '$20.25',
        },
      ],
    };
  }
};
</script>

