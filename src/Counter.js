import React, { Component } from 'react';
import { ThemeContext } from './App';

export default class Counter extends Component {
	// overrride the constructor for application
	// constructor always takes in the props
	constructor(props) {
		super(props);
		this.state = {
			count: props.initialCount,
		};
	}
	render() {
		return (
			<ThemeContext.Consumer>
				{(style) => (
					<div>
						<button style={style} onClick={() => this.changeCount(-1)}>
							-
						</button>
						<span>{this.state.count}</span>
						<button style={style} onClick={() => this.changeCount(1)}>
							+
						</button>
					</div>
				)}
			</ThemeContext.Consumer>
		);
	}

	changeCount(amount) {
		// takes current count and overrides it with new count
		this.setState((prevState) => {
			return { count: prevState.count + amount };
		});
	}
}
