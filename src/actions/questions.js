export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION =	'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export const receiveQuestions = (questions) => {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

export const addQuestion = (question) => {
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