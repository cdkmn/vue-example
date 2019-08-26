<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  :counter="10"
                  label="First name"
                  required
                  name="name"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import Product from '../interfaces/Product';

@Component({
  name: 'Form',
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