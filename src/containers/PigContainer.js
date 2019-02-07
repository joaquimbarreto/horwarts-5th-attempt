import React, { Component } from "react";
import PigList from "../components/PigList";
import PigFilters from "../components/PigFilters";

const weight =
	"weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";

export default class PigContainer extends Component {
	state = {
		pigs: this.props.pigs,
		greased: false,
		sortBy: ""
	};

	handleSort = (e, { value }) => this.setState({ sortBy: value });

	handleGreased = () => this.setState({ greased: !this.state.greased });

	filterPigs = () => {
		const filteredPigs = this.state.greased
			? this.state.pigs.filter(pig => pig.greased === true)
			: this.state.pigs.slice();
		return filteredPigs;
	};

	sortPigs = pigs => {
		switch (this.state.sortBy) {
			case "name":
				return pigs.sort((a, b) => a.name.localeCompare(b.name));
			case "weight":
				return pigs.sort((a, b) => a[weight] - b[weight]);
			default:
				return pigs;
		}
	};

	render() {
		const pigsToFilter = this.filterPigs();
		const pigsAfterFilter = this.sortPigs(pigsToFilter);
		return (
			<div>
				<PigFilters sort={this.handleSort} greased={this.handleGreased} />
				<PigList pigs={pigsAfterFilter} />
			</div>
		);
	}
}
