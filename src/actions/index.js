export const addDeal = deal => ({
  type: 'UPLOAD_DEAL',
  deal
})

export const userCredentials = user => ({
  type: 'USER_LOGIN',
  user
})

export const logout = () => ({
  type: 'LOGOUT'
})

export const filterDeals = value => ({
  type: 'FILTER_DEALS',
  value
})

export const onAddComment = comment => ({
  type: 'ADD_COMMENT',
  comment
})

export const upVote = vote => ({
  type: 'UPVOTE',
  vote
})

export const registerUser = newUser => ({
  type: 'REGISTER_USER',
  newUser
})
