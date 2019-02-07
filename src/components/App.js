import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import PigContainer from "../containers/PigContainer";

class App extends Component {
	state = {
		pigs: hogs
	};

	render() {
		return (
			<div className="App">
				<Nav />
				<PigContainer pigs={this.state.pigs} />
			</div>
		);
	}
}

export default App;
