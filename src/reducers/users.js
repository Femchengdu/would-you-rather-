import {RECEIVE_USERS, UPDATE_USER_ANSWER, ADD_USER_QUESTION} from '../actions/users'

const users = (state = {}, action) => {
	switch(action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users
			}
		case UPDATE_USER_ANSWER:
			const {users} = action
			return {
				...users
			}
		case ADD_USER_QUESTION:
			const {questionId, authenticatedUser} = action
			let updatedUser = {...state[authenticatedUser]}
			updatedUser.questions.push(questionId)
			return {
				...state,
				[authenticatedUser]: {
					...state[authenticatedUser],
					questions: updatedUser.questions
				}
			}
		default:
			return state
	}
}

export default users