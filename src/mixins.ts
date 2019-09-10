// Create Mixins
import { Vue, Component } from 'vue-property-decorator';
declare module 'vue/types/vue' {
  interface Vue {
    testVariable: string;
    testFunction(): string;
  }
}

@Component
export default class Mixins extends Vue {
  public testVariable: string = 'Test Variable';
  public testFunction() {
    return 'Test Function';
  }
}
