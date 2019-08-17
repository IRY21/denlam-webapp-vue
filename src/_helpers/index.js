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