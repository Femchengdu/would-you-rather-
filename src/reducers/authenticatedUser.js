import {SET_AUTHORIZED_USER} from '../actions/authenticatedUser'
import {REMOVE_USER} from '../actions/authenticatedUser'

const authenticatedUser = (state = null, action) => {
	switch(action.type) {
		case SET_AUTHORIZED_USER:
			return action.id
		case REMOVE_USER:
			return null
		default:
			return state
	}
}

export default authenticatedUser