const initialState = {}

export const page = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PAGE_DATA':
      return {
        ...state,
        dealId: action.dealId
      }
    default:
      return {
        ...state
      }
  }
}
