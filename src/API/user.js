import axios from 'axios'

const URL = 'http://127.0.0.1:8000/api/'

function createUser (formData, token) {
  const options = {
    method: 'POST',
    url: `${URL}users/create/`,
    data: formData,
    headers: {
      Authorization: `Bearer ${token}`,
      'Accept-Language': 'es-es'
    }
  }
  return axios.request(options)
}

function getToken (formData) {
  const options = {
    method: 'POST',
    url: `${URL}token/`,
    data: formData,
    headers: {
      'Accept-Language': 'es'
    }
  }
  return axios.request(options)
}

export { createUser, getToken }
