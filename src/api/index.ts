import _Vue from 'vue';
import Api, { ApiOptions } from './Api';

export { Api, ApiOptions };

export default function ApiPlugin(
  Vue: typeof _Vue,
  options?: ApiOptions,
): void {
  Vue.prototype.$http = new Api(options);
}
