export const getRequest = url => {
  return fetch(url).then(res => res.json())
}

export const postRequest = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
}

export const putRequest = (url, data) => {
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
}

export const deleteRequest = (url) => {
  return fetch(url, {
    method: 'DELETE'
  })
}
