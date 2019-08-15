import { AUTH_LOGIN, AUTH_LOGOUT } from '@/store/mutation-types/auth'
import { SET_AUTH_USER, AUTH_USER_LOGOUT } from '@/store/mutation-types/user'

export default function configureModerator (store, router) {
  // listen to mutations
  //store.subscribe(({ type, payload }, state) => {
  store.subscribe(({ type }) => {
    switch (type) {
      // Когда установлен авторизованный пользователь установить состояние авторизованности
      case `user/${SET_AUTH_USER}`: {
        return store.commit(`auth/${AUTH_LOGIN}`)
      }
      case `user/${AUTH_USER_LOGOUT}`: {
        return store.commit(`auth/${AUTH_LOGOUT}`)
      }
    }
  })
  // listen to actions
  // note: doesn't not wait for the result of async actions
  store.subscribeAction(({ type }) => {
    switch (type) {
      // При выходе перекинуть на страницу входа
      case 'auth/logout': {
        store.commit(`auth/${AUTH_LOGOUT}`)
        store.dispatch(`user/userLogout`);
        return router.push('/');
      }
    }
  })
}