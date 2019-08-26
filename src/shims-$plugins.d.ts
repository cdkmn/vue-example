import Vue from 'vue';
import { VuetifyObject } from 'vuetify/types';
import Api from './api/Api';

declare module 'vue/types/vue' {
  interface Vue {
    $vuetify: VuetifyObject;
    $http: Api;
  }
}
