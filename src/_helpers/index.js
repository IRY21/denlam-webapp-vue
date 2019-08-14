export const config = {
  apiUrl: 'http://api2.denlam.ru'
}

export const rejectError = ({ response = null}) => {
  let message = 'Ooops, something went wrong'

  if(response && response.data && response.data.error) {
    message = response.data.error.message
  }

  return Promise.reject(message)
}

export const Role = {
  Admin: 'Администратор',
  Worker: 'worker',
}

export const programName = 'OKO';