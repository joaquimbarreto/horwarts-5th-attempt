import React, { Component } from "react";

const weight =
	"weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";
const medal = "highest medal achieved";

export default class PigCard extends Component {
	state = {
		showDetails: false
	};

	togglePigDetails = () => {
		if (this.state.showDetails === false) {
			this.setState({
				showDetails: true
			});
		} else {
			this.setState({
				showDetails: false
			});
		}
	};

	render() {
		const imageUrl = this.props.pig.name.toLowerCase().replace(/\s/g, "_");
		const image = require(`../hog-imgs/${imageUrl}.jpg`);
		return (
			<div className="ui card">
				<div className="image">
					<img
						src={image}
						alt={this.props.pig.name}
						onClick={this.togglePigDetails}
					/>
				</div>
				<div className="content">
					<a className="header">{this.props.pig.name}</a>
				</div>
				{this.state.showDetails && (
					<div className="extra content">
						<p>Weight: {this.props.pig[weight]}</p>
						<p>Speciality: {this.props.pig.speciality}</p>
						<p>Greased: {this.props.pig.grease}</p>
						<p>Highest Medal: {this.props.pig[medal]}</p>
					</div>
				)}
			</div>
		);
	}
}
