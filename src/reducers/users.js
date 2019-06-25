import {RECEIVE_USERS, UPDATE_USER_ANSWER} from '../actions/users'

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
		default:
			return state
	}
}

export default users