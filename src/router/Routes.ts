import { RouteConfig } from 'vue-router';
// function loadView(view: string, path: string = '@/views/') {
//   if (path[path.length - 1] === '/') {
//     path = path.substring(0, path.length);
//   }
//   return () => import(`${path}/${view}.vue`);
// }
// const list: RouteConfig[] = [{ path: '/', component: loadView('Home') }];

const list: RouteConfig[] = [
  { path: '/', component: () => import('@/views/Home.vue') },
  { path: '/data-table', component: () => import('@/views/DataTable.vue') },
  { path: '/form', component: () => import('@/views/Form.vue') },
];

export default list;
