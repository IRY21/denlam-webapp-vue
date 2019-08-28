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

export const sortAlphabet = (a, b) => {
  if(a.title.toLowerCase() < b.title.toLowerCase()) { return -1; }
  if(a.title.toLowerCase() > b.title.toLowerCase()) { return 1; }
  return 0;
}

export function throttle (callback, limit) {
  var wait = false;
  return function () {
      if (!wait) {
          callback.call();
          wait = true;
          setTimeout(function () {
              wait = false;
          }, limit);
      }
  }
}
