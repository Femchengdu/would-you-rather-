import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question'
import {formatDashQuestions} from '../utils/helper'
import './css/dashboard.css'

class Dashboard extends Component {
	state = {
		answered: false
	}

	toggleQuestions = () => {
		this.setState((prevState) => ({
			answered: !prevState.answered
		}))
	}

	

	theQuestions = (questionList) => (
		questionList.map((id) =>(
			<li key={id}>
				<Question id={id} answered={this.state.answered}/>
			</li>
		))
	)

	render() {
		const {unansweredQuestions, answeredQuestions} = this.props
		
		return(
			<div className='container'>
				<header className='header'>
					<div className='headerItem'>
						{this.state.answered === true ?
							<h3> Answered Questions</h3> :
							<h3> Unanswered Questions</h3>
						}
					</div>
					
					<div className='headerItem'>
						<button
							className='dashButton' 
							onClick={this.toggleQuestions}
						> Toggle Questions </button>
					</div>
				</header>
				
				<ul className='dashList'>
					{this.state.answered === true ?
						this.theQuestions(answeredQuestions) :
						this.theQuestions(unansweredQuestions)
					}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = ({questions, authenticatedUser, users}) => {
	return formatDashQuestions(users, authenticatedUser, questions)
}
export default connect(mapStateToProps)(Dashboard)