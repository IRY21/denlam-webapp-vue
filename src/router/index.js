import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import { Role } from '@/_helpers'

import PageLogin from '@/pages/Auth/PageLogin'

import PageProjects from '@/pages/Projects/PageProjects'
import PageProjectsAdd from '@/pages/Projects/PageProjectsAdd'

import PageProject from '@/pages/Project/PageProject'
import PageProjectAbout from '@/pages/Project/PageProjectAbout'
import PageProjectDocs from '@/pages/Project/PageProjectDocs'
import PageProjectPayments from '@/pages/Project/PageProjectPayments'
import PageProjectWorkers from '@/pages/Project/PageProjectWorkers'

import PageSearch from '@/pages/Search/PageSearch'

//import PagePlan from '@/pages/Plan/PagePlan'

import PageTasks from '@/pages/Tasks/PageTasks'

import PageAkts from '@/pages/Akts/PageAkts'
import PageAktsSigning from '@/pages/Akts/PageAktsSigning'
import PageAktsSigned from '@/pages/Akts/PageAktsSigned'

import PagePayments from '@/pages/Payments/PagePayments'

import PageDebit from '@/pages/Debit/PageDebit'

import PageClients from '@/pages/Clients/PageClients'
import PageClientsAdd from '@/pages/Clients/PageClientsAdd'

import PageClient from '@/pages/Client/PageClient'
import PageClientAbout from '@/pages/Client/PageClientAbout'
import PageClientAkts from '@/pages/Client/PageClientAkts'
import PageClientChange from '@/pages/Client/PageClientChange'
import PageClientPayments from '@/pages/Client/PageClientPayments'

//import PageSalary from '@/pages/Salary/PageSalary'

import PageWorkers from '@/pages/Workers/PageWorkers'
import PageWorkersAdd from '@/pages/Workers/PageWorkersAdd'

import PageWorker from '@/pages/Worker/PageWorker'
import PageWorkerSalary from '@/pages/Worker/PageWorkerSalary'

import PageSettings from '@/pages/Settings/PageSettings'
import PageSettingsUsers from '@/pages/Settings/PageSettingsUsers'
import PageSettingsServices from '@/pages/Settings/PageSettingsServices'
import PageSettingsFilials from '@/pages/Settings/PageSettingsFilials'

import PageNotAuthenticated from '@/pages/PageNotAuthenticated'
import PageNotFound from '@/pages/PageNotFound'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'PageLogin',
      component: PageLogin,
      meta: {
        layout: 'auth-layout',
        title: `Страница авторизации`
      }
    },
    {
      path: '/projects',
      name: 'PageProjects',
      component: PageProjects,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        },
        title: `Проекты`
      }
    },
    {
      path: '/projects/add',
      name: 'PageProjectsAdd',
      component: PageProjectsAdd,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        },
        title: `Проекты || Добавить`
      }
    },
    {
      path: '/project/:projectId',
      name: 'PageProject',
      component: PageProject,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        },
        title: `Проект`
      },
      children: [
        {
          path: 'about',
          name: 'PageProjectAbout',
          component: PageProjectAbout,
          meta: {
            layout: 'default-layout',
            permissions: {
              role: [Role.Admin]
            },
            title: `Проект || О проекте`
          }
        },
        {
          path: 'docs',
          name: 'PageProjectDocs',
          component: PageProjectDocs,
          meta: {
            layout: 'default-layout',
            permissions: {
              role: [Role.Admin]
            },
            title: `Проект || Документы`
          }
        },
        {
          path: 'payments',
          name: 'PageProjectPayments',
          component: PageProjectPayments,
          meta: {
            layout: 'default-layout',
            permissions: {
              role: [Role.Admin]
            },
            title: `Проект || Оплаты`
          }
        },
        {
          path: 'workers',
          name: 'PageProjectWorkers',
          component: PageProjectWorkers,
          meta: {
            layout: 'default-layout',
            permissions: {
              role: [Role.Admin]
            },
            title: `Проект || Исполнители`
          }
        }
      ]
    },
    {
      path: '/search',
      name: 'PageSearch',
      component: PageSearch,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        },
        title: `Поиск`
      }
    },
    // {
    //   path: '/plan',
    //   name: 'PagePlan',
    //   component: PagePlan,
    //   meta: {
    //     layout: 'default-layout',
    //     permissions: {
    //       role: [Role.Admin]
    //     },
    //     title: `Планы`
    //   }
    // },
    {
      path: '/tasks',
      name: 'PageTasks',
      component: PageTasks,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        },
        title: `Задачи`
      }
    },
    {
      path: '/akts',
      name: 'PageAkts',
      component: PageAkts,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        },
        title: `Акты`
      },
      children: [
        {
          path: 'signing',
          name: 'PageAktsSigning',
          component: PageAktsSigning,
          meta: {
            layout: 'default-layout',
            permissions: {
              role: [Role.Admin]
            },
            title: `Акты || На подписании`
          }
        },
        {
          path: 'signed',
          name: 'PageAktsSigned',
          component: PageAktsSigned,
          meta: {
            layout: 'default-layout',
            permissions: {
              role: [Role.Admin]
            },
            title: `Акты || Подписанные акты`
          }
        }
      ]
    },
    {
      path: '/payments',
      name: 'PagePayments',
      component: PagePayments,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        },
        title: `Оплаты`
      }
    },
    {
      path: '/debit',
      name: 'PageDebit',
      component: PageDebit,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        },
        title: `Должники`
      }
    },
    {
      path: '/clients',
      name: 'PageClients',
      component: PageClients,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        },
        title: `Клиенты`
      }
    },
    {
      path: '/clients/add',
      name: 'PageClientsAdd',
      component: PageClientsAdd,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        },
        title: `Клиенты || Добавить`
      }
    },
    {
      path: '/clients/:clientId',
      name: 'PageClient',
      component: PageClient,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        },
        title: `Клиент || `
      },
      children: [
        {
          path: 'about',
          name: 'PageClientAbout',
          component: PageClientAbout,
          meta: {
            layout: 'default-layout',
            permissions: {
              role: [Role.Admin]
            },
            title: `Клиент || Данные о контрагенте`
          }
        },
        {
          path: 'akts',
          name: 'PageClientAkts',
          component: PageClientAkts,
          meta: {
            layout: 'default-layout',
            permissions: {
              role: [Role.Admin]
            },
            title: `Клиент || Связанные акты`
          }
        },
        {
          path: 'payments',
          name: 'PageClientPayments',
          component: PageClientPayments,
          meta: {
            layout: 'default-layout',
            permissions: {
              role: [Role.Admin]
            },
            title: `Клиент || Поступившие оплаты`
          }
        },
      ]
    },
    {
      path: '/clients/:clientId/change',
      name: 'PageClientChange',
      component: PageClientChange,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        },
        title: `Клиент || Редактировать`
      }
    },
    // {
    //   path: '/salary', 
    //   name: 'PageSalary',
    //   component: PageSalary,
    //   meta: {
    //     layout: 'default-layout',
    //     permissions: {
    //       role: [Role.Admin]
    //     },
    //     title: `Зарплаты`
    //   }
    // },
    {
      path: '/workers',
      name: 'PageWorkers',
      component: PageWorkers,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        },
        title: `Сотрудники`
      }
    },
    {
      path: '/workers/add',
      name: 'PageWorkersAdd',
      component: PageWorkersAdd,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        },
        title: `Сотрудники || Добавить`
      }
    },
    {
      path: '/worker/:workerId', 
      name: 'PageWorker',
      component: PageWorker,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        },
        title: `Сотрудник`
      }
    },
    {
      path: '/worker/:workerId/salary',
      name: 'PageWorkerSalary',
      component: PageWorkerSalary,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        },
        title: `Сотрудник || Расчет`
      }
    },
    { 
      path: '/settings', 
      name: 'PageSettings',
      component: PageSettings,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        },
        title: `Настройки`
      },
      children: [
        {
          path: 'users',
          name: 'PageSettingsUsers',
          component: PageSettingsUsers,
          meta: {
            layout: 'default-layout',
            permissions: {
              role: [Role.Admin]
            },
            title: `Настройки || Пользователи`
          }
        },
        {
          path: 'services',
          name: 'PageSettingsServices',
          component: PageSettingsServices,
          meta: {
            layout: 'default-layout',
            permissions: {
              role: [Role.Admin]
            },
            title: `Настройки || Услуги`
          }
        },
        {
          path: 'filials',
          name: 'PageSettingsFilials',
          component: PageSettingsFilials,
          meta: {
            layout: 'default-layout',
            permissions: {
              role: [Role.Admin]
            },
            title: `Настройки || Филиалы`
          }
        },
      ]
    },
    {
      path: '/401',
      name: 'PageNotAuthenticated',
      component: PageNotAuthenticated,
      meta: {
        layout: 'default-layout',
        title: `Ошибка авторизации`
      }
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound,
      meta: {
        title: `Страницы не существует`
      }
    }
  ],
  mode: 'history'
})

export default router;


let entryUrl = null;
router.beforeEach((to, from, next) => {
  
  // redirect to login page if not logged in and trying to access a restricted page
  const { permissions } = to.meta;
  
  if (permissions) {
    store.dispatch('user/getAuthUser')
      .then(() => {
        const pageRole = permissions.role;
        const currentUser = store.getters['user/getProfile'];
          if (entryUrl) {
            const url = entryUrl;
            entryUrl = null;
            return next(url); // goto stored url
          } 
          
          if (!currentUser) {
              // not logged in so redirect to login page with the return url
              entryUrl = to.path; // store entry url before redirect
              return next({ name: 'PageLogin' });
          }
          // check if route is restricted by role
          if (pageRole.length && !pageRole.includes(currentUser.role_name)) {
              
              // role not authorised so redirect to home page
              entryUrl = to.path; // store entry url before redirect
              return next({ name: 'PageNotAuthenticated' });
          }
      })
      .catch(() => {
        entryUrl = to.path; // store entry url before redirect
        return next({ name: 'PageLogin' });
      })
  }
 
  next();
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
})