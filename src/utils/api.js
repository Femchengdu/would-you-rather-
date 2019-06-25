import {
	_saveQuestionAnswer,
	_saveQuestion,
	_getQuestions,
	_getUsers
} from './_Data.js'

export const getInitialData = () => {
	return Promise.all([
		_getUsers(),
		_getQuestions()
	]).then(([users, questions]) => ({
		users,
		questions
	}))
}

export const saveQuestion = (question) => {
	return _saveQuestion(question)
}

export const saveQuestionAnswer = (answerObject) => {
	return _saveQuestionAnswer(answerObject)
}