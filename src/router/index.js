import Vue from 'vue'
import Router from 'vue-router'

import Full from '@/containers/Full'

import Dashboard from '@/views/Dashboard'
import Charts from '@/views/Charts/Charts'
import Widgets from '@/views/Widgets/Widgets'

import Buttons from '@/views/Components/Buttons'
import Cards from '@/views/Components/Cards'
import Forms from '@/views/Components/Forms'
import Icons from '@/views/Components/Icons'
import Modals from '@/views/Components/Modals'
import Tables from '@/views/Components/Tables'

import Login from '@/views/Pages/Login'
import Page404 from '@/views/Pages/Page404'
import Page500 from '@/views/Pages/Page500'
import Register from '@/views/Pages/Register'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: 'dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: '/widgets',
          name: 'Widgets',
          component: Widgets
        },
        {
          path: 'components',
          redirect: '/components/buttons',
          name: 'Components',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'buttons',
              name: 'Buttons',
              component: Buttons
            },
            {
              path: 'cards',
              name: 'Cards',
              component: Cards
            },
            {
              path: 'forms',
              name: 'Forms',
              component: Forms
            },
            {
              path: 'icons',
              name: 'Icons',
              component: Icons
            },
            {
              path: 'modals',
              name: 'Modals',
              component: Modals
            },
            {
              path: 'tables',
              name: 'Tables',
              component: Tables
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/login',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        },
        {
          path: 'page-404',
          name: 'Page404',
          component: Page404
        },
        {
          path: 'page-500',
          name: 'Page500',
          component: Page500
        }
      ]
    }
  ]
})
