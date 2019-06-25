import {getInitialData, saveQuestionAnswer} from '../utils/api'
import {receiveUsers, updateUserAnswer} from './users'
import {receiveQuestions, ansQuestion} from './questions'
//import {setAuthorizedUser} from './authenticatedUser'
import {showLoading, hideLoading} from 'react-redux-loading'


export const initialDataLoad = () => {
	return (dispatch) => {
		dispatch(showLoading())
		return getInitialData()
			.then(({users, questions}) => {
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
				dispatch(hideLoading())
			})
	}
}


export const combineAsyncAnsQuestion = (payload) => {
	return (dispatch, getState) => {
		const {authenticatedUser} = getState()
		dispatch(showLoading())
		const sentAnswer = {
			authedUser: authenticatedUser,
			qid: payload.qid,
			answer: payload.answer
		}
		return saveQuestionAnswer(sentAnswer)
			.then(({users, questions}) => {
				dispatch(ansQuestion(questions))
				dispatch(updateUserAnswer(users))
			})
			.then(() => dispatch(hideLoading()))
	}
}