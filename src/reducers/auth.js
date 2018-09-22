const initialState = {}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        user: action.user
      }
    case 'ADD_USER_TOKEN':
      if (action.token) window.localStorage.setItem('token', action.token)
      return {
        token: action.token
      }
    case 'REGISTER_USER':
      return {
        ...state,
        newUser: action.newUser
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        message: action.message
      }
    case 'REGISTRATION_ERROR':
      return {
        ...state,
        message: action.message
      }
    case 'LOGOUT':
      window.localStorage.removeItem('token')
      return {}
    default:
      return {
        ...state
      }
  }
}
