import React, { Component } from "react";
import { Form, Radio } from "semantic-ui-react";

export default class PigFilters extends Component {
	render() {
		return (
			<Form>
				<Form.Group>
					<Form.Field>Sort By:</Form.Field>
					<Form.Field>
						<Radio
							label="Name"
							name="radioGroup"
							value="name"
							checked={this.props.sort.value === "value"}
							onChange={this.props.sort}
						/>
					</Form.Field>
					<Form.Field>
						<Radio
							label="Weight"
							name="radioGroup"
							value="weight"
							checked={this.props.sort.value === "value"}
							onChange={this.props.sort}
						/>
					</Form.Field>
				</Form.Group>
				<Form.Group>
					<Form.Field>
						<Radio
							toggle
							label="Greased"
							name="greased"
							value="greased"
							onChange={this.props.greased}
						/>
					</Form.Field>
				</Form.Group>
			</Form>
		);
	}
}
