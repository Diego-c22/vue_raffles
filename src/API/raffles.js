import axios from 'axios'

const URL = 'http://127.0.0.1:8000/api/raffles/'

function getRaffles () {
  const options = {
    method: 'GET',
    url: URL
  }
  return axios.request(options)
    .then((response) => response.data)
    .catch(function (error) {
      console.error(error)
    })
}

function getRaffle (id) {
  const options = {
    method: 'GET',
    url: `${URL}${id}/`
  }
  return axios.request(options)
    .then((response) => response.data)
    .catch(function (error) {
      console.error(error)
    })
}

function editRaffle (id, formData, token) {
  const options = {
    method: 'PATCH',
    url: `${URL}${id}/`,
    data: formData,
    headers: {
      Authorization: `Bearer ${token}`,
      'Accept-Language': 'es-es'
    }
  }
  return axios.request(options)
    .then((response) => response.data)
    .catch(function (error) {
      console.error(error)
    })
}

function getMainRaffles () {
  const options = {
    method: 'GET',
    url: `${URL}principal/`
  }
  return axios.request(options)
    .then((response) => response.data)
    .catch(function (error) {
      console.error(error)
    })
}

function createRaffle (formData, token) {
  const options = {
    method: 'POST',
    url: URL,
    data: formData,
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  return axios.request(options)
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}

export {
  getMainRaffles,
  getRaffle,
  getRaffles,
  createRaffle,
  editRaffle
}
