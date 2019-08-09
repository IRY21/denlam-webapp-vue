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
import PageSettingsUsers from '@/pages/Settings/PageSettingsUsers'
import PageSettingsServices from '@/pages/Settings/PageSettingsServices'

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
        layout: 'auth-layout'
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
        }
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
        }
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
        }
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
            }
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
            }
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
            }
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
            }
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
        }
      }
    },
    {
      path: '/plan',
      name: 'PagePlan',
      component: PagePlan,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        }
      }
    },
    {
      path: '/tasks',
      name: 'PageTasks',
      component: PageTasks,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        }
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
        }
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
            }
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
            }
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
        }
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
        }
      }
    },
    {
      path: '/kontragents',
      name: 'PageKontragents',
      component: PageKontragents,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        }
      }
    },
    {
      path: '/kontragents/add',
      name: 'PageKontragentsAdd',
      component: PageKontragentsAdd,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        }
      }
    },
    {
      path: '/kontragent/:kontragentId',
      name: 'PageKontragent',
      component: PageKontragent,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        }
      },
      children: [
        {
          path: 'about',
          name: 'PageKontragentAbout',
          component: PageKontragentAbout,
          meta: {
            layout: 'default-layout',
            permissions: {
              role: [Role.Admin]
            }
          }
        },
        {
          path: 'akts',
          name: 'PageKontragentAkts',
          component: PageKontragentAkts,
          meta: {
            layout: 'default-layout',
            permissions: {
              role: [Role.Admin]
            }
          }
        },
        {
          path: 'payments',
          name: 'PageKontragentPayments',
          component: PageKontragentPayments,
          meta: {
            layout: 'default-layout',
            permissions: {
              role: [Role.Admin]
            }
          }
        },
      ]
    },
    {
      path: '/kontragent/:kontragentId/change',
      name: 'PageKontragentChange',
      component: PageKontragentChange,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        }
      }
    },
    {
      path: '/salary', 
      name: 'PageSalary',
      component: PageSalary,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        }
      }
    },
    {
      path: '/workers',
      name: 'PageWorkers',
      component: PageWorkers,
      meta: {
        layout: 'default-layout',
        permissions: {
          role: [Role.Admin]
        }
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
        }
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
        }
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
        }
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
        }
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
            }
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
            }
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
      }
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ],
  mode: 'history'
})

export default router;


router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const { permissions } = to.meta;

  if (permissions) {
    store.dispatch('user/getAuthUser')
      .then(() => {
        const pageRole = permissions.role;
        const currentUser = store.getters['user/getProfile'];
          if (!currentUser) {
              // not logged in so redirect to login page with the return url
              return next({ name: 'PageLogin' });
          }
    
          // check if route is restricted by role
          if (pageRole.length && !pageRole.includes(currentUser.role_name)) {
              // role not authorised so redirect to home page
              return next({ name: 'PageNotAuthenticated' });
          }
      })
      .catch(() => {
        return next({ name: 'PageLogin' });
      })
  }

  next();
})