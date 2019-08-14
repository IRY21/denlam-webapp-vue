import { AUTH_LOGIN, AUTH_LOGOUT } from '@/store/mutation-types/auth'
import { SET_AUTH_USER } from '@/store/mutation-types/user'

export default function configureModerator (store, router) {
  // listen to mutations
  //store.subscribe(({ type, payload }, state) => {
  store.subscribe(({ type, payload }) => {
    switch (type) {
      case `user/${SET_AUTH_USER}`: {
        if(payload === null) return store.commit(`auth/${AUTH_LOGOUT}`)
        return store.commit(`auth/${AUTH_LOGIN}`)
      }
    }
  })
  // listen to actions
  // note: doesn't not wait for the result of async actions
  store.subscribeAction(({ type }) => {
    switch (type) {
      case 'auth/logout': {
        store.commit(`auth/${AUTH_LOGOUT}`)
        store.dispatch(`user/userLogout`);
        return router.push('/');
      }
    }
  })
}