export const config = {
  apiUrl: 'http://api2.denlam.ru'
}

export const rejectError = ({ response = null}) => {
  let message = 'Ошибка сервера';

  if(response && response.data && response.data.error) {
    message = response.data.error.message;
  }

  return Promise.reject(message)
}

export const Role = {
  Admin: 'Администратор',
  Manager: 'Менеджер',
  Buhgalter: 'Бухгалтер',
  Worker: 'Сотрудник' 
}

export const programName = 'OKO';

export function axiosDataWrap(data) {
  return {['oko-data']: data};
}

export const sortAlphabet = (a, b) => {
  if(a.title.toLowerCase() < b.title.toLowerCase()) { return -1; }
  if(a.title.toLowerCase() > b.title.toLowerCase()) { return 1; }
  return 0;
}

export function throttle (func, limit) {
  let lastFunc
  let lastRan
  return function() {
    const context = this
    const args = arguments
    if (!lastRan) {
      func.apply(context, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args)
          lastRan = Date.now()
        }
      }, limit - (Date.now() - lastRan))
    }
  }
}

export function debounce(func, delay) {
  let inDebounce
  return function() {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() =>
      func.apply(context, args)
    , delay)
  }
}