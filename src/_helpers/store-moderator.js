export default function configureModerator (store, router) {
  // listen to mutations
  //store.subscribe(({ type, payload }, state) => {
  // store.subscribe(({ type }) => {
  //   switch (type) {
  //     case 'auth/setToken':
  //       return store.dispatch('service/fetchData')
  //   }
  // })
  // listen to actions
  // note: doesn't not wait for the result of async actions
  store.subscribeAction(({ type }) => {
    switch (type) {
      case 'auth/logout': {
        store.dispatch(`user/AUTH_LOGOUT`);
        return router.push('/');
      }
    }
  })
}