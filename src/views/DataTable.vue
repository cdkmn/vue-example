<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col>
        <v-data-table
          :headers="headers"
          :items="products"
          :items-per-page="5"
          :loading="loading"
          :server-items-length="totalCount"
          :options.sync="options"
          multi-sort
        ></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import Product from '../interfaces/Product';

@Component({
  name: 'DataTable',
})
export default class DataTable extends Vue {
  public loading: boolean = false;
  public products: Product[] = [];
  public totalCount: number = 0;
  public options = {};
  public headers = [
    {
      text: 'Dessert (100g serving)',
      align: 'left',
      sortable: false,
      value: 'name',
    },
    { text: 'Calories', value: 'calories' },
    { text: 'Fat (g)', value: 'fat' },
    { text: 'Carbs (g)', value: 'carbs' },
    { text: 'Protein (g)', value: 'protein' },
    { text: 'Iron (%)', value: 'iron' },
  ];

  @Watch('options', { deep: true })
  public optionsObserver(val: string, oldVal: string) {
    this.loadData();
  }
  public async loadData() {
    this.loading = true;
    try {
      const res = await this.$http.getProducts(this.options);
      this.products = res.data;
      this.totalCount = res.totalCount;
    } catch (err) {
      console.log(err);
    }
    this.loading = false;
  }
  public created() {
    this.loadData();
  }
}
</script>

<style>
</style>