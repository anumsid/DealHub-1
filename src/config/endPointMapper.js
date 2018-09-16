export const endPointMapper = {
  FETCH_ALL_DEALS: {
    'method': 'GET',
    'url': '/deals'
  },
  FETCH_DEAL: {
    'method': 'GET',
    'url': '/deals/:id'
  },
  ADD_NEW_DEAL: {
    'method': 'POST',
    'url': '/deals'
  },
  FETCH_COMMENTS: {
    'method': 'GET',
    'url': '/comments'
  },
  ADD_COMMENT: {
    'method': 'POST',
    'url': '/comments'
  },
  LOGIN: {
    'method': 'POST',
    'url': '/sessions'
  },
  VOTE: {
    'method': 'POST',
    'url': '/votes'
  },
  REGISTER: {
    'method': 'POST',
    'url': '/users'
  },
  FETCH_ALL_USERS: {
    'method': 'GET',
    'url': '/users'
  }
}
