<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.text" :to="item.path">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1"
          >SUBSCRIPTIONS</v-subheader
        >
        <v-list>
          <v-list-item v-for="item in items2" :key="item.text">
            <v-list-item-avatar>
              <img
                :src="
                  `https://randomuser.me/api/portraits/men/${item.picture}.jpg`
                "
                alt=""
              />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list-item class="mt-4">
          <v-list-item-action>
            <v-icon color="grey darken-1">add_circle_outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Browse Channels</v-list-item-title
          >
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon color="grey darken-1">settings</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >Manage Subscriptions</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="red" dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon class="mx-4">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Youtube</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row align="center" style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-row>
    </v-app-bar>

    <v-content>
      <keep-alive>
        <transition>
          <router-view></router-view>
        </transition>
      </keep-alive>
    </v-content>
  </v-app>
</template>
<style lang="scss">
#keep {
  .v-navigation-drawer__border {
    display: none;
  }
}
</style>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  name: 'App',
  components: { HelloWorld },
})
export default class App extends Vue {
  public drawer: any = null;
  public items = [
    { icon: 'home', text: 'Home', path: '/' },
    { icon: 'table_chart', text: 'Data-Table', path: '/data-table' },
    { icon: 'lock_open', text: 'Login', path: '/login' },
  ];
  public items2 = [
    { picture: 28, text: 'Joseph' },
    { picture: 38, text: 'Apple' },
    { picture: 48, text: 'Xbox Ahoy' },
    { picture: 58, text: 'Nokia' },
    { picture: 78, text: 'MKBHD' },
  ];
  public created() {
    this.$vuetify.theme.dark = true;
  }
}
</script>
