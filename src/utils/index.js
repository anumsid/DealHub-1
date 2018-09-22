/* eslint-disable */
import { serviceUrl } from '../config'
import { patterns } from './patterns'

export const urlGenerator = url => `${serviceUrl}${url}`

export const serviceManager = (endpoint, state, token) => {
  const { url, method } = endpoint
  let body
  let headers = {
    'content-type': 'application/json'
  }
  let finalUrl = urlGenerator(url)

  if (url.includes(':')) {
    const key = url.match(/\:(\w+)/)[1]
    const newUrl = url.replace(/\:\w+/, state[key])
    finalUrl = urlGenerator(newUrl)
  }

  if (method === 'POST') {
    body = JSON.stringify(state)
  }

  if (token) {
    headers = {
      ...headers,
      'Authorization': `Bearer ${token}`,
    }
  }

  return fetch(finalUrl, {
    method,
    headers,
    body
  })
  .then(async res => ({ ok: res.ok, response: await res.json() }))
}

export const getPageTypeFromRoute = route => Object.keys(patterns).filter(p => patterns[p].test(route))[0]

export const getDealId = route => route.match(/[0-9]+/).join('')
