import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);


    export default new Router({
      mode: 'history',
      base: process.env.BASE_URL,
      routes: [
        {
          path: '/',
          redirect: '/Elements',
        },
        {
          path: '/Elements',
          name: 'Elements',
          component: () =>
            import(/* webpackChunkName: "bundle.Elements" */ './views/Elements.vue'),
        },
        {
          path: '/Elements/:id',
          name: 'Elements-detail',
          // props: true,
          props: parseProps,
          component: () =>
            import(/* webpackChunkName: "bundle.Elements" */ './views/Elements-detail.vue'),
        },
        {
          path: "/about",
          name: "About",
          component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
        }
],
    });
  


