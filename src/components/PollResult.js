import React, {Component} from 'react'
import {connect} from 'react-redux'
import Avatar from './Avatar'
import './css/pollresult.css'
import {formatPollResult} from '../utils/helper'

class PollResult extends Component {
	render () {
		const {
			authorsAvatar, 
			authorsName, 
			questionOneText, 
			questionTwoText,
			totalVotes,
			questOneVote,
			questTwoVote
		} = this.props
		return (
			<div className='pollResultContainer'>
				<header className='polResHeader'>
					<b>Asked by: {authorsName} </b>
				</header>
				<article className='polResContainer'>
					<div className='polResflexItem'>
						<Avatar authorsAvatar={authorsAvatar} size={120} authorsName={authorsName}/>
					</div>
					<section className='polResflexItem'>
						<h3>Results:</h3>
						<p>
							{questionOneText}<br />
							<em><b>{`${questOneVote} out of votes ${totalVotes}`}</b></em>
						</p>
						<p>
							{questionTwoText}<br />
							<em><b>{`${questTwoVote} out of votes ${totalVotes}`}</b></em>
						</p>
					</section>
				</article>
			</div>
		)
	}
}

const mapStateToProps = ({authenticatedUser, users, questions}, props) => {
	return formatPollResult(authenticatedUser, users, questions, props)
}
export default connect(mapStateToProps)(PollResult)