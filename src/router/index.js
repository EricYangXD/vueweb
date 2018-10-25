const layout = r => require.ensure([], () => r(require('../components/Layout')), 'layout');
// 打包组件，在下面可以直接引用，不需再考虑路径
const helloWorld = r => require.ensure([], () => r(require('../components/helloworld/HelloWorld')), 'helloWorld');
const login = r => require.ensure([], () => r(require('../components/login/Login')), 'login');
const zonar = r => require.ensure([], () => r(require('../components/zonar/Zonar')), 'zonar');



export default [{
    path: '/',
    name: 'layout',
    component: layout,
    redirect: '/layout',
    children: [{
      path: '/',
      component: helloWorld,
      meta: {
        requireAuth: false,
        title: '首页'
      }
    }, {
      path: '/',
      component: zonar,
      meta: {
        requireAuth: false,
        title: 'Zonar'
      }
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      title: '登录'
    }
  }
]
