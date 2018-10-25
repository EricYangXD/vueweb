// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store';
import 'vue2-animate/dist/vue2-animate.min.css';
import splitPane from 'vue-splitpane';
Vue.component('split-pane', splitPane);
import NProgress from 'nprogress'; // 跳转加载条动画
import 'nprogress/nprogress.css';

import routes from './router';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  strict: process.env.NODE_ENV !== 'production',
  /*使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置*/
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return {
        x: 0,
        y: to.meta.savedPosition || 0
      };
    }
  }
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
})
/*router配置end*/

/*引入ele框架start*/
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
/*引入ele框架end*/

/*引入echarts框架start*/
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
/*引入echarts框架end*/

/*开发者生产提示*/
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
