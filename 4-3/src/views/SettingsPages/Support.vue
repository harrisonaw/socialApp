<template>
  <v-container>
    <v-card raised max-width="700" class="mx-auto">
      <v-toolbar raised color="accent">
        <v-toolbar-title>Help</v-toolbar-title>
      </v-toolbar>

      <v-list subheader two-line flat>
        <v-list-item-group v-model="settings" multiple>

          <v-list-item>
        <template v-slot:default="{ active, toggle }">
          <v-list-item-action>
            <v-list-item-icon>
              <v-icon active color="primary" @click="toggle">mdi-trash-can</v-icon>
            </v-list-item-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Delete my Singularity account</v-list-item-title>
            <v-list-item-subtitle>Thank you for visiting us!</v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active, toggle }">
              <v-list-item-action>
                <v-list-item-icon>
                  <v-icon active color="primary" @click="toggle">mdi-frequently-asked-questions</v-icon>
                </v-list-item-icon>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>Get in touch</v-list-item-title>
                <v-list-item-subtitle>Contact our support line.</v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>



<script>

export default {

  data: () => ({})
};
</script>