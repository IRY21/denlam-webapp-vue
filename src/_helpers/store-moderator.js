import { AUTH_LOGIN } from '@/store/mutation-types/auth'
import { SET_AUTH_USER } from '@/store/mutation-types/user'

export default function configureModerator (store, router) {
  // listen to mutations
  //store.subscribe(({ type, payload }, state) => {
  store.subscribe(({ type }) => {
    switch (type) {
      // Когда установлен авторизованный пользователь установить состояние авторизованности
      case `user/${SET_AUTH_USER}`: {
        return store.commit(`auth/${AUTH_LOGIN}`)
      }
    }
  })
  // listen to actions
  // note: doesn't not wait for the result of async actions
  store.subscribeAction(({ type }) => {
    switch (type) {
      // При выходе перекинуть на страницу входа
      case 'auth/logout': {
        store.dispatch(`user/userLogout`);
        return router.push('/');
      }
    }
  })
}