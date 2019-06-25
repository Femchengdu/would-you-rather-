import React, {Component} from 'react'
import {connect} from 'react-redux'
import {asyncAddQuestion} from '../actions/questions'
import {Redirect} from 'react-router-dom'
import './css/newpoll.css'

class NewPoll extends Component {
	state = {
		quest_1: '',
		quest_2: '',
		toHome: false
	}

	handleQuestChange = (event) => {
		const {name, value} = event.target
		this.setState(() => ({
			[name]: value
		}))
	}

	handleQuestSubmit = (event) => {
		event.preventDefault()
		const {dispatch} = this.props
		dispatch(asyncAddQuestion(this.state))
		this.setState(() => ({
			quest_1: '',
			quest_2: '',
			toHome: true
		}))
	}
	render() {
		const {quest_1, quest_2, toHome} = this.state

		if (toHome) {
			return <Redirect to='/' />
		}
		
		return (
			<div className='newPollContainer'>
				<header className='introBar'>
					<h4>Create New Question</h4>
				</header>
				<article className='flexContainer'>
					<div className='newFlexItem'>
						<form onSubmit={this.handleQuestSubmit}>
							<p>
								Complete the question:<br /><br />
								<b>Would you rather...</b><br />
								<input 
									type='text'
									name='quest_1'
									value={quest_1}
									onChange={this.handleQuestChange}
								/>
								<br />or<br /> 
								<input 
									type='text'
									name='quest_2'
									value={quest_2}
									onChange={this.handleQuestChange}
								/>
							</p>
							<button
								className='button'
								type='submit'
								disabled={quest_1 === '' || quest_2 === ''}
							>
								Submit
							</button>
						</form>
					</div>
				</article>
			</div>
		)
	}
}

export default connect()(NewPoll)