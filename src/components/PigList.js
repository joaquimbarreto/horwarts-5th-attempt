import React, { Component } from "react";
import PigCard from "./PigCard";

export default class PigList extends Component {
	state = {};

	render() {
		return (
			<div className="ui link cards">
				{this.props.pigs.map(pig => {
					return <PigCard key={pig.name} pig={pig} />;
				})}
			</div>
		);
	}
}
