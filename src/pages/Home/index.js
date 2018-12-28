import React, { Component } from "react";
import axios from "axios";
import { Link, Route } from 'react-router-dom'

import { Header, Footer, Content } from "../../components";
import { Button } from 'bloomer'

import "./style.css";

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			people: "react",
			tempat: "pacific place",
			tanggal: "16 Desember 2018",
			actors: []
		};
	}

	componentDidMount() {

	}

	handleClickHeader(){
		const newPeople = this.state.people === "Alex" ? "Nainggolan" : "Alex"
		this.setState({
			people: newPeople
		});
	}

	handleClickContent() {
		const tempat = this.state.tempat === "Pacific Place" ? "Kota Tua" : "Pacific Place";
		const tanggal = this.state.tanggal === "16 Desember 2018" ? "16 Desember 2019" : "16 Desember 2018";

		this.setState({
			tempat,
			tanggal
		});
	}

	loginYuk = () => {
		return (
			<Link to="/login" />
			)
	}

	render() {
		let { people, tempat, tanggal, actors } = this.state;

		return (
			<div>
				<Header />
					<Button>
						<Link to="/login"> Login </Link>
					</Button>

					<Route path={'${this.props.match.path}/content'} render={() => {
						return(
							<Content
								location={tempat}
								date={tanggal}
								onClick={() => this.handleClickContent()}
								actors={actors}
							/>
							)
					}} />

					<Route exact path={'${this.props.match.path}'} render={() => <h2>HOME!</h2>} />

					<Footer footer="Footer" />
				</div>
			);
	}
	
}