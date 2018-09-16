const initialState = {}

export const deals = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DEALS_DATA':
      return {
        ...state,
        deals: [
          ...action.deals
        ],
        status: null,
        commentStatus: null
      }
    case 'ADD_DEAL_DATA':
      return {
        ...state,
        dealDetails: action.dealDetails,
        userData: action.userData,
        status: null,
        commentStatus: null
      }
    case 'UPLOAD_DEAL':
      return {
        ...state,
        newDeal: action.deal,
        status: null
      }
    case 'FILTER_DEALS':
      return {
        ...state,
        filteredDeals: action.value && state.deals.filter(deal => deal.title.toLowerCase().includes(action.value.toLowerCase()) || deal.category.toLowerCase().includes(action.value.toLowerCase()))
      }
    case 'UPLOAD_DEAL_SUCCESS':
      return {
        ...state,
        status: action.status
      }
    case 'ADD_COMMENT':
      return {
        ...state,
        newComment: action.comment,
        commentStatus: null
      }
    case 'UPLOAD_COMMENT_SUCCESS':
      return {
        ...state,
        dealDetails: {
          ...state.dealDetails,
          comments: [
            ...state.dealDetails.comments,
            action.commentUpload
          ]
        }
      }
    case 'UPVOTE':
      return {
        ...state,
        vote: action.vote
      }
    case 'UPLOAD_VOTE_SUCCESS':
      return {
        ...state,
        dealDetails: {
          ...state.dealDetails,
          votes: [
            ...state.dealDetails.votes,
            action.voteUpload
          ]
        }
      }
    default:
      return {
        ...state
      }
  }
}
