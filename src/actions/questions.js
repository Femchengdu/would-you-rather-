import {saveQuestion} from '../utils/api'
import {showLoading, hideLoading} from 'react-redux-loading'


export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION =	'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export const receiveQuestions = (questions) => {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

const addQuestion = (question) => {
	return {
		type: ADD_QUESTION,
		question
	}
}

export const ansQuestion = (questions) => {
	return {
		type: ANSWER_QUESTION,
		questions
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
			.then((question) => dispatch(addQuestion(question)))
			.then(() => dispatch(hideLoading()))
	}
}