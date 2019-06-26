import {getInitialData, saveQuestionAnswer, saveQuestion} from '../utils/api'
import {receiveUsers, updateUserAnswer, addUserQuestion} from './users'
import {receiveQuestions, ansQuestion, addQuestion} from './questions'
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

export const asyncAddQuestion = (newPoll) => {
	return (dispatch, getState) => {
		const {authenticatedUser} = getState()
		dispatch(showLoading())
		return saveQuestion({
			author: authenticatedUser,
			optionOneText: newPoll.quest_1,
			optionTwoText: newPoll.quest_2
		})
			.then((question) => {
				dispatch(addQuestion(question))
				dispatch(addUserQuestion(question.id, authenticatedUser))	
			} )
			.then(() => dispatch(hideLoading()))
	}
}