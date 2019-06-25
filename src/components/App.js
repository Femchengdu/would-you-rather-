import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {initialDataLoad} from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewPoll from './NewPoll'
import LeaderBoard from './LeaderBoard'
import Poll from './Poll'
import PollResult from './PollResult'
import Nav from './Nav'
import SelectUser from './SelectUser'
import LogOut from './LogOut'

class App extends Component {
	componentDidMount() {
		this.props.dispatch(initialDataLoad())
	}

	render() {
		return (
			<Router>
				<Fragment>
					<LoadingBar />
					<div className="App">
						<Nav />
						{this.props.loading === true ?
							<Route path='/' component={SelectUser} /> :
						  	<div>
						  		<Route path='/' exact component={Dashboard} />
						  		<Route path='/add' component={NewPoll} />
						  		<Route path='/leaderboard' component={LeaderBoard} />
						  		<Route path='/question/:id' component={Poll} />
						  		<Route path='/result/:id' component={PollResult} />
						  		<Route path='/logout' component={LogOut} />
						  	</div>
						}
					</div>
				</Fragment>	
			</Router>
		);
	}
}

const mapStateToProps = ({authenticatedUser}) => {
	return {
		loading: authenticatedUser === null
	}
}

export default connect(mapStateToProps)(App);
