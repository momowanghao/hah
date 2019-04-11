import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/common/login'
import ChangePassword from '@/components/common/changepassword'
import Register from '@/components/common/register'
import SecondRegister from '@/components/common/secondregister'
import ScenicRegister from '@/components/common/scenicregister'
import store from '../store/store'

// 一级平台路由--主页面
import FirstHome from '@/components/pages/one/home/onepageone'
import FirstHomeTwo from '@/components/pages/one/home/onepagetwo'
import FirstHomeThree from '@/components/pages/one/home/onepagethree'
import FirstHomeFour from '@/components/pages/one/home/onepagefour'
import FirstHomeFive from '@/components/pages/one/home/onepagefive'
import FirstHomeSix from '@/components/pages/one/home/onepagesix'
import FirstHomeSeven from '@/components/pages/one/home/onepageseven'
//一级平台路由--详情页面-第一页
import ScenicDetails from '@/components/pages/one/details/scenicdetails'
import ScenicData from '@/components/pages/one/details/scenicdata'
import ScenicStrategy from '@/components/pages/one/details/scenicstrategy'
import ScenicDataManage from '@/components/pages/one/details/scenicdatamanage'
// 一级平台路由--详情页面-第二页
import DeclareData from '@/components/pages/one/details/declaredata'
// 一级平台路由--详情页面-第三页
import AuditData from '@/components/pages/one/details/auditdata'
//一级平台路由--详情页面-第四页
import OnePageFourStrategy from '@/components/pages/one/details/onepagefourstrategy'
import StrategyDeclare from '@/components/pages/one/details/strategydeclare'
import DataContent from '@/components/pages/one/details/datacontent'
// 一级平台-问卷调查-问卷列表
import QuestionReturn from '@/components/pages/one/details/questionreturn'
//一级平台-每月巡查-巡查详情
import PatrolList from '@/components/pages/one/details/patrollist'
import PatrolListData from '@/components/pages/one/details/patrollistdata'
//一级平台-我的消息-消息详情
import NewsList from '@/components/pages/one/details/newslist'
import PublicNews from '@/components/pages/one/details/publicnews'

//二级平台--主页面
import SecondHome from '@/components/pages/two/home/twopageone'
import SecondHomeTwo from '@/components/pages/two/home/twopagetwo'
import SecondHomeThree from '@/components/pages/two/home/twopagethree'
import SecondHomeFour from '@/components/pages/two/home/twopagefour'
import SecondHomeFive from '@/components/pages/two/home/twopagefive'
import SecondHomeSix from '@/components/pages/two/home/twopagesix'
//二级平台-第一页-详情页面
import ScenicDataView from '@/components/pages/two/details/scenicdataview'
import TwoScenicDetails from '@/components/pages/two/details/twoscenicdetails'
import OneTwoPageFour from '@/components/pages/two/details/onetwopagefour'

//三级平台--主页
import ThirdHome from '@/components/pages/three/home/threepageone'
import ThirdHomeTwo from '@/components/pages/three/home/threepagetwo'
import ThirdHomeThree from '@/components/pages/three/home/threepagethree'
//三级平台-第一页-详情页面
import ThreeScenicDetails from '@/components/pages/three/details/threescenicdetails'
import ThreeScenicData from '@/components/pages/three/details/threescenicdata'
import PublicStrategy from '@/components/pages/three/details/threescenicdata'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/changepassword',
      name: 'ChangePassword',
      component: ChangePassword,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path:'/secondregister',
      name:'SecondRegister',
      component:SecondRegister,
    },
    {
      path:'/scenicregister',
      name:'ScenicRegister',
      component:ScenicRegister,
    },
    // 一级平台的路由
    {
      path: '/firsthome',
      name: 'FirstHome',
      component: FirstHome,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/firsthometwo',
      name: 'FirstHomeTwo',
      component: FirstHomeTwo,
    },
    {
      path: '/firsthomethree',
      name: 'FirstHomeThree',
      component: FirstHomeThree,
    },
    {
      path: '/firsthomefour',
      name: 'FirstHomeFour',
      component: FirstHomeFour,
    },
    {
      path: '/firsthomefive',
      name: 'FirstHomeFive',
      component: FirstHomeFive,
    },
    {
      path: '/firsthomesix',
      name: 'FirstHomeSix',
      component: FirstHomeSix,
    },
    {
      path: '/firsthomeseven',
      name: 'FirstHomeSeven',
      component: FirstHomeSeven,
    },
    // 一级平台详情页路由-第一页
    {
      path:'/scenicdetails',
      name:'ScenicDetails',
      component:ScenicDetails,
    },
    {
      path:'/scenicdata',
      name:'ScenicData',
      component:ScenicData,
    },
    {
      path:'/scenicstrategy',
      name:'ScenicStrategy',
      component:ScenicStrategy,
    },
    {
      path:'/scenicdatamanage',
      name:'ScenicDataManage',
      component:ScenicDataManage,   
    },
    // 第二页
    {
      path:'/declaredata',
      name:'DeclareData',
      component:DeclareData,
    },
    // 第三页
    {
      path:'/auditdata',
      name:'AuditData',
      component:AuditData,
    },
    //第四页
    {
      path:'/onepagefourstrategy',
      name:'OnePageFourStrategy',
      component:OnePageFourStrategy,
    },
    {
      path:'/strategydeclare',
      name:'StrategyDeclare',
      component:StrategyDeclare,
    },
    {
      path:'/datacontent',
      name:'DataContent',
      component:DataContent,
    },
    //第五页
    {
      path:'/questionreturn',
      name:'QuestionReturn',
      component:QuestionReturn,
    },
    //第六页
    {
      path:'/patrollist',
      name:'PatrolList',
      component:PatrolList,
    },
    {
      path:'/patrollistdata',
      name:'PatrolListData',
      component:PatrolListData,
    },
    //第七页
    {
      path:'/newslist',
      name:'NewsList',
      component:NewsList,
    },
    {
      path:'/publicnews',
      name:'PublicNews',
      component:PublicNews,
    },
    //二级路由
    {
      path:'/secondhome',
      name:'SecondHome',
      component:SecondHome,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path:'/secondhometwo',
      name:'SecondHomeTwo',
      component:SecondHomeTwo,
    },
    {
      path:'/secondhomethree',
      name:'SecondHomeThree',
      component:SecondHomeThree,
    },
    {
      path:'/secondhomefour',
      name:'SecondHomeFour',
      component:SecondHomeFour,
    },
    {
      path:'/secondhomefive',
      name:'SecondHomeFive',
      component:SecondHomeFive,
    },
    {
      path:'/secondhomesix',
      name:'SecondHomeSix',
      component:SecondHomeSix,
    },
    //二级路由详情页--第一页
    {
      path:'/scenicdataview',
      name:'ScenicDataView',
      component:ScenicDataView,
    },
    {
      path:'/twoscenicdetails',
      name:'TwoScenicDetails',
      component:TwoScenicDetails,
    },
    {
      path:'/onetwopagefour',
      name:'OneTwoPageFour',
      component:OneTwoPageFour,
    },
    //三级路由主页
    {
      path:'/thirdhome',
      name:'ThirdHome',
      component:ThirdHome,
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path:'/thirdhometwo',
      name:'ThirdHomeTwo',
      component:ThirdHomeTwo,
    },
    {
      path:'/thirdhomethree',
      name:'ThirdHomeThree',
      component:ThirdHomeThree,
    },
    //三级平台-第一页
    {
      path:'/threescenicdetails',
      name:'ThreeScenicDetails',
      component:ThreeScenicDetails,
    },
    {
      path:'/threescenicdata',
      name:'ThreeScenicData',
      component:ThreeScenicData,
    },
    {
      path:'/publicstrategy',
      name:'PublicStrategy',
      component:PublicStrategy,
    },
  ]
})
router.beforeEach((to, from, next) => {
  const token = store.state.token
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    if (token) { // 通过vuex state获取当前的token是否存在
      next()
    } else {
      console.log('该页面需要登陆')
      next({
        path: '/login'
        // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})