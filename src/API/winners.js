const URL = 'http://127.0.0.1:8000/api/winners/'

function createWinner(formData, token) {
  const options = {
    mehtod: 'POST',
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

function editWinner (id, formData, token) {
  const options = {
    mehtod: 'PATCH',
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

export {
  createWinner,
  editWinner
}
