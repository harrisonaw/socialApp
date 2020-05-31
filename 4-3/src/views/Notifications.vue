<template>
  <v-container>
    <v-card raised max-width="1200" class="mx-auto">
      <v-toolbar raised color="#74A7CB">
        <v-toolbar-title>Notifications</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>

      <v-list three-line>
        <template v-for="(item, index) in notifications">
          <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

          <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

          <v-list-item v-else :key="item.name" @click="v-on">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.name"></v-list-item-title>
              <v-list-item-subtitle v-html="item.newNotification"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    notifications: [
      { header: "Today" },
      {
        avatar: "friendsPic.png",
        name: "Cameron Jones",
        newNotification:
          "Liked your post"
      },
      { divider: true, inset: true },
      {
        avatar: "friendsPic.png",
        name: "Cameron Jones",
        newNotification:
          "Liked your post"
      },
      { divider: true, inset: true },
      {
        avatar: "friendsPic.png",
        name: "Cameron Jones",
        newNotification:
          "Liked your post"
      },
      { divider: true, inset: true },
      {
        avatar: "friendsPic.png",
        name: "Cameron Jones",
        newNotification:
          "Liked your post"
      },
      { divider: true, inset: true },
      {
        avatar: "friendsPic.png",
        name: "Cameron Jones",
        newNotification:
          "Liked your post"
      },
      { divider: true, inset: true },
      {
        avatar: "friendsPic.png",
        name: "Cameron Jones",
        newNotification:
          "Liked your post"
      },
      { divider: true, inset: true },
      {
        avatar: "friendsPic.png",
        name: "Cameron Jones",
        newNotification:
          "Liked your post"
      },
      { divider: true, inset: true },
      {
        avatar: "friendsPic.png",
        name: "Cameron Jones",
        newNotification:
          "Liked your post"
      },
      { divider: true, inset: true },
      {
        avatar: "friendsPic.png",
        name: "Cameron Jones",
        newNotification:
          "Liked your post"
      },
      { divider: true, inset: true },
      {
        avatar: "friendsPic.png",
        name: "Cameron Jones",
        newNotification:
          "Liked your post"
      },
    ]
  }),
  methods: {
    postTagPopUp: ["avatar" + "name" + "postTag"],
    postLikePopUp: ["avatar" + "name" + "postLike"],
    postCommentPopUp: ["avatar" + "name" + "postComment"],
    requestAcceptPopUp: ["avatar" + "name" + "requestAccept"],
    friendRequestPopUp: ["avatar" + "name" + "friendRequest"],
    newUsersInAreaPopUp: ["avatar" + "name" + "newUsersInArea"],
    newRequestsInAreaPopUp: ["avatar" + "name" + "newRequestsInArea"],
    messagesNewPopUp: ["avatar" + "name" + "messagesNew"],
    messagesLikePopUp: ["avatar" + "name" + "messagesLike"],
    reviewPopUp: ["avatar" + "name" + "review"],
    crowdfundPopUp: ["avatar" + "name" + "crowdfund" + "crowdfundAmount"]
  }
};
</script>