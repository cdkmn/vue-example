<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col class="shrink">
        <hello-world />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  name: 'Home',
  components: { HelloWorld },
})
export default class Home extends Vue {}
</script>

<style>
</style>