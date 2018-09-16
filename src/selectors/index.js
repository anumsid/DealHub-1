export const getPage = state => state.router.location ? state.router.location.pathname : ''
export const getDeals = state => {
  if (state.deals.filteredDeals) {
    return state.deals.filteredDeals
  }
  return state.deals.deals ? state.deals.deals : []
}
export const getDealIdString = state => state.page ? state.page.dealId : ''
export const getDealDetails = state => state.deals.dealDetails ? state.deals.dealDetails : {}
export const getUserData = state => state.deals.userData ? state.deals.userData : []
export const getNewDeal = state => state.deals.newDeal ? state.deals.newDeal : {}
export const getAuthToken = state => state.auth.token ? state.auth.token : ''
export const getUserCredentials = state => state.auth.user ? state.auth.user : ''
export const getNewComment = state => state.deals.newComment ? state.deals.newComment : ''
export const getVote = state => state.deals.vote ? state.deals.vote : {}
export const getNewUser = state => state.auth.newUser ? state.auth.newUser : {}
