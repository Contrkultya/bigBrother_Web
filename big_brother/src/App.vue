<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-left
    >
      <v-toolbar-title>Старший брат</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="user.loggedIn">
            <div class="nav-item">{{user.data.email}}</div>
            <v-btn text @click="signOut()">Выйти</v-btn>
          </template>
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
      <router-view></router-view>
        </v-row>
      </v-container>
      </v-main>
  </v-app>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld.vue';
    import { mapGetters } from "vuex";
import firebase from "firebase";

  export default {
    props: {
      source: String,
    },
  components: {
    HelloWorld,
  },
    data: () => ({
      drawer: null,
    }),
    created () {
      //this.$vuetify.theme.dark = true
      this.$vuetify.theme.primary = '#F44336';

    },
      computed: {
    ...mapGetters({
      user: "user"
    })
  },
    methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "login"
          });
        });
    }
  }

  }
</script>