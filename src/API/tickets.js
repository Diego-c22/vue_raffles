import axios from 'axios'

const URL = 'http://127.0.0.1:8000/api/tickets/'

function createTicket (formData) {
  const options = {
    method: 'POST',
    url: URL,
    data: formData
  }

  return axios.request(options)
    .then(response => response.data)
    .catch(error => {
      console.log(error)
    })
}

function editTicket (id, formData, token) {
  const options = {
    method: 'PATCH',
    url: `${URL}${id}/`,
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

function getTickets (token) {
  const options = {
    method: 'GET',
    url: URL,
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

function getTicketsRaffle (id, token) {
  const options = {
    method: 'GET',
    url: `${URL}raffle/${id}/`,
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
  createTicket,
  editTicket,
  getTickets,
  getTicketsRaffle
}
