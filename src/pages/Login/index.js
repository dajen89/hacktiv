import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import { Header, Footer, Content } from "../../components";
import { Button } from 'bloomer'

import './style.css';

export default class Login extends Component {
	render() {
		return (
			<div>
				
					<form>
                      <div className="imgcontainer">
                      </div>
                      <div className="container">
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required/>
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required/>
                            
                        <button type="submit">Login</button>
                        <input type="checkbox" defaultChecked/> Remember me
                      </div>
                      <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="psw">Forgot <a href="#">password?</a></span>
                      </div>
                    </form>
			</div>
			);
	}
}