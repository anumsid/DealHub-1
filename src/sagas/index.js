import { call, put, takeEvery, select } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import {
  getPage,
  getDealIdString,
  getNewDeal,
  getAuthToken,
  getUserCredentials,
  getNewComment,
  getVote,
  getNewUser
} from '../selectors'
import {
  getPageTypeFromRoute,
  getDealId,
  serviceManager
} from '../utils'
import { endPointMapper } from '../config/endPointMapper'

function * fetchDeals () {
  try {
    const deals = yield call(serviceManager, endPointMapper.FETCH_ALL_DEALS)
    if (deals.ok) yield put({ type: 'ADD_DEALS_DATA', deals: deals.response })
  } catch (e) {
    console.error(e.message)
  }
}

function * getDealDetail () {
  try {
    const id = yield select(getDealIdString)
    const userData = yield call(serviceManager, endPointMapper.FETCH_ALL_USERS)
    const dealDetails = yield call(serviceManager, endPointMapper.FETCH_DEAL, { id })
    if (dealDetails.ok) yield put({ type: 'ADD_DEAL_DATA', dealDetails: dealDetails.response, userData: userData.response })
  } catch (e) {
    console.error(e.message)
  }
}

function * addDeal () {
  try {
    const deal = yield select(getNewDeal)
    const token = yield select(getAuthToken)
    const dealUpload = yield call(serviceManager, endPointMapper.ADD_NEW_DEAL, deal, token)
    if (dealUpload.ok) yield put({ type: 'UPLOAD_DEAL_SUCCESS', status: 'success' })
  } catch (e) {
    console.error(e.message)
  }
}

function * addComment () {
  try {
    const comment = yield select(getNewComment)
    const token = yield select(getAuthToken)
    const commentUpload = yield call(serviceManager, endPointMapper.ADD_COMMENT, comment, token)
    if (commentUpload.ok) yield put({ type: 'UPLOAD_COMMENT_SUCCESS', commentUpload: commentUpload.repsonse })
  } catch (e) {
    console.error(e.message)
  }
}

function * upVote () {
  try {
    const vote = yield select(getVote)
    const token = yield select(getAuthToken)
    const voteUpload = yield call(serviceManager, endPointMapper.VOTE, vote, token)
    if (voteUpload.ok) yield put({ type: 'UPLOAD_VOTE_SUCCESS', voteUpload: voteUpload.response })
  } catch (e) {
    console.error(e.message)
  }
}

function * userLogin () {
  try {
    const user = yield select(getUserCredentials)
    const token = yield call(serviceManager, endPointMapper.LOGIN, user)
    if (token.ok) yield put({ type: 'ADD_USER_TOKEN', token: token.response.token })
    else yield put({ type: 'LOGIN_ERROR', message: 'Invalid username or password' })
  } catch (e) {
    console.error(e.message)
  }
}

function * registerUser () {
  try {
    const newUser = yield select(getNewUser)
    const userSuccess = yield call(serviceManager, endPointMapper.REGISTER, newUser)
    if (userSuccess.ok) yield put({ type: 'USER_LOGIN', user: { email: newUser.email, password: newUser.password } })
    else yield put({ type: 'REGISTRATION_ERROR', message: 'Email already in use' })
  } catch (e) {
    console.error(e.message)
  }
}

function * loadPage () {
  const pageType = getPageTypeFromRoute(yield select(getPage))
  switch (pageType) {
    case 'deals':
      yield call(fetchDeals)
      break
    case 'deal':
      const dealId = getDealId(yield select(getPage))
      yield put({ type: 'UPDATE_PAGE_DATA', dealId })
      yield call(getDealDetail)
      break
    default:
      break
  }
}

function * rootSaga () {
  const token = window.localStorage.getItem('token')
  if (token) yield put({ type: 'ADD_USER_TOKEN', token })
  yield takeEvery(LOCATION_CHANGE, loadPage)
  yield takeEvery('UPLOAD_DEAL', addDeal)
  yield takeEvery('USER_LOGIN', userLogin)
  yield takeEvery('ADD_COMMENT', addComment)
  yield takeEvery('UPVOTE', upVote)
  yield takeEvery('REGISTER_USER', registerUser)
}

export default rootSaga