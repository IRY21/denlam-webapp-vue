import Vue from 'vue'
import Router from 'vue-router'

import PageLogin from '@/pages/Auth/PageLogin'

import PageProjects from '@/pages/Projects/PageProjects'
import PageProjectsAdd from '@/pages/Projects/PageProjectsAdd'

import PageProject from '@/pages/Project/PageProject'
import PageProjectAbout from '@/pages/Project/PageProjectAbout'
import PageProjectDocs from '@/pages/Project/PageProjectDocs'
import PageProjectPayments from '@/pages/Project/PageProjectPayments'
import PageProjectWorkers from '@/pages/Project/PageProjectWorkers'

import PageSearch from '@/pages/Search/PageSearch'

import PagePlan from '@/pages/Plan/PagePlan'

import PageTasks from '@/pages/Tasks/PageTasks'

import PageAkts from '@/pages/Akts/PageAkts'
import PageAktsSigning from '@/pages/Akts/PageAktsSigning'
import PageAktsSigned from '@/pages/Akts/PageAktsSigned'

import PagePayments from '@/pages/Payments/PagePayments'

import PageDebit from '@/pages/Debit/PageDebit'

import PageKontragents from '@/pages/Kontragents/PageKontragents'
import PageKontragentsAdd from '@/pages/Kontragents/PageKontragentsAdd'

import PageKontragent from '@/pages/Kontragent/PageKontragent'
import PageKontragentAbout from '@/pages/Kontragent/PageKontragentAbout'
import PageKontragentAkts from '@/pages/Kontragent/PageKontragentAkts'
import PageKontragentChange from '@/pages/Kontragent/PageKontragentChange'
import PageKontragentPayments from '@/pages/Kontragent/PageKontragentPayments'

import PageSalary from '@/pages/Salary/PageSalary'

import PageWorkers from '@/pages/Workers/PageWorkers'
import PageWorkersAdd from '@/pages/Workers/PageWorkersAdd'

import PageWorker from '@/pages/Worker/PageWorker'
import PageWorkerSalary from '@/pages/Worker/PageWorkerSalary'

import PageSettings from '@/pages/Settings/PageSettings'

import PageNotFound from '@/pages/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PageLogin',
      component: PageLogin,
      meta: {
        layout: 'auth-layout'
      }
    },
    {
      path: '/projects',
      name: 'PageProjects',
      component: PageProjects,
    },
    {
      path: '/projects/add',
      name: 'PageProjectsAdd',
      component: PageProjectsAdd
    },
    {
      path: '/project/:projectId',
      name: 'PageProject',
      component: PageProject,
      children: [
        {
          path: 'about',
          name: 'PageProjectAbout',
          component: PageProjectAbout
        },
        {
          path: 'docs',
          name: 'PageProjectDocs',
          component: PageProjectDocs
        },
        {
          path: 'payments',
          name: 'PageProjectPayments',
          component: PageProjectPayments
        },
        {
          path: 'workers',
          name: 'PageProjectWorkers',
          component: PageProjectWorkers
        }
      ]
    },
    {
      path: '/search',
      name: 'PageSearch',
      component: PageSearch
    },
    {
      path: '/plan',
      name: 'PagePlan',
      component: PagePlan
    },
    {
      path: '/tasks',
      name: 'PageTasks',
      component: PageTasks
    },
    {
      path: '/akts',
      name: 'PageAkts',
      component: PageAkts,
      children: [
        {
          path: 'signing',
          name: 'PageAktsSigning',
          component: PageAktsSigning
        },
        {
          path: 'signed',
          name: 'PageAktsSigned',
          component: PageAktsSigned
        }
      ]
    },
    {
      path: '/payments',
      name: 'PagePayments',
      component: PagePayments
    },
    {
      path: '/debit',
      name: 'PageDebit',
      component: PageDebit
    },
    {
      path: '/kontragents',
      name: 'PageKontragents',
      component: PageKontragents
    },
    {
      path: '/kontragents/add',
      name: 'PageKontragentsAdd',
      component: PageKontragentsAdd
    },
    {
      path: '/kontragent/:kontragentId',
      name: 'PageKontragent',
      component: PageKontragent,
      children: [
        {
          path: 'about',
          name: 'PageKontragentAbout',
          component: PageKontragentAbout
        },
        {
          path: 'akts',
          name: 'PageKontragentAkts',
          component: PageKontragentAkts
        },
        {
          path: 'payments',
          name: 'PageKontragentPayments',
          component: PageKontragentPayments
        },
      ]
    },
    {
      path: '/kontragent/:kontragentId/change',
      name: 'PageKontragentChange',
      component: PageKontragentChange
    },
    {
      path: '/salary', 
      name: 'PageSalary',
      component: PageSalary
    },
    {
      path: '/workers',
      name: 'PageWorkers',
      component: PageWorkers
    },
    {
      path: '/workers/add',
      name: 'PageWorkersAdd',
      component: PageWorkersAdd
    },
    {
      path: '/worker/:workerId', 
      name: 'PageWorker',
      component: PageWorker
    },
    {
      path: '/worker/:workerId/salary',
      name: 'PageWorkerSalary',
      component: PageWorkerSalary
    },
    { 
      path: '/settings', 
      name: 'PageSettings',
      component: PageSettings
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ],
  mode: 'history'
})

