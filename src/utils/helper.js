// Maybe you would need a helper to create the display form of the question

export const formatUser = (users, id) => {
	const user = users[id]
	const score = Object.keys(user.answers).length + user.questions.length
	const answeredQuestions = Object.keys(user.answers).length
	const createdQuestions = user.questions.length
	const name = user.name
	const avatar = user.avatarURL
	return {
		name,
		createdQuestions,
		answeredQuestions,
		score,
		avatar
	}
}
//
// Create ids to question method object returned is an array of questions
const idsToQuestion = (idsArray, questions) => {
	const questionsArray = idsArray.map((id) => questions[id])
	return questionsArray
}
// Apply the sort to the array based on timestamp returned is a sorted array of objects
const sortQuestionByTimestamp = (questionsArray) => {
	const sortedQuestionsArray = questionsArray.sort((a,b) => b.timestamp - a.timestamp)
	return sortedQuestionsArray
}
// Map the object to array of sorted ids
const questionArrayToIdArray = (sortedQuestionsArray) => {
	const sortedIdsArray = sortedQuestionsArray.map((question) => question.id)
	return sortedIdsArray
}

// Combine the three methods above
const sortQuestionIds = (ids, questions) => {
	return questionArrayToIdArray(sortQuestionByTimestamp(idsToQuestion(ids, questions)))
}

export const formatDashQuestions = (users, authenticatedUser, questions) => {
	// Unsorted Ids by time
	const answeredQuestionsids = Object.keys(users[authenticatedUser].answers)
	const unansweredQuestionsids = Object.keys(questions).filter((question) => !answeredQuestionsids.includes(question))
	// Sorted Ids by time
	let answeredQuestions = sortQuestionIds(answeredQuestionsids, questions)
	let unansweredQuestions = sortQuestionIds(unansweredQuestionsids, questions)
	return {
		answeredQuestions,
		unansweredQuestions
	}
}

export const formatQuestion = (questions, users, authenticatedUser, id, answered) => {
	const question = questions[id]
	const authorName = users[question.author].name
	const authorAvatar =  users[question.author].avatarURL
	const questionOne = question.optionOne.text
	const questionTwo = question.optionTwo.text
	return {
		authenticatedUser,
		questionOne,
		questionTwo,
		authorName,
		authorAvatar,
		id,
		answered
	}
}

export const formatPollResult = (authenticatedUser, users, questions, props) => {
	const {id} = props.match.params
	const questionsAuthor = questions[id].author
	const authorsName = users[questionsAuthor].name
	const authorsAvatar = users[questionsAuthor].avatarURL
	const questionOneText = questions[id].optionOne.text
	const questionTwoText = questions[id].optionTwo.text
	const totalVotes = questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length
	const questOneVote = questions[id].optionOne.votes.length
	const questTwoVote = questions[id].optionTwo.votes.length
	return {
		id,
		questionsAuthor,
		authorsName,
		authorsAvatar,
		questionOneText,
		questionTwoText,
		totalVotes,
		questOneVote,
		questTwoVote
	}
}

export const formatPoll = (users, questions, props) => {
	const {id} = props.match.params
	const qustionAuthor = questions[id].author
	const authorName = users[qustionAuthor].name
	const authorAvatar = users[qustionAuthor].avatarURL
	const optionOne = questions[id].optionOne.text
	const optionTwo = questions[id].optionTwo.text
	return {
		authorName,
		authorAvatar,
		optionTwo,
		optionOne,
		id
	}
}

export const formatNav = (authenticatedUser, users) => {
	let usersName
	authenticatedUser === null ? 
	usersName = null :
	usersName = users[authenticatedUser].name
	
	return {
		usersName
	}
}









