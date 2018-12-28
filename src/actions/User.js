import axios from "axios";

import { loadingStart, loadingEnd } from './Loading';

export function ubahUserNameSuccess(name) {
	return {
		type: 'UBAH_USERNAME',
		payload: {
			username: name,
		},
	};
};

export function ubahUserNameFailed(errMessage) {
	return {
		type: 'UBAH_USERNAME_ERROR',
		payload: {
			message: errMessage, 
		},
	};
};

export function ubahUserName() {
	return (dispatch) => {
		axios
			.get("https://www.swapi.co/api/people")
			.then(response => {
				let data = response.data.results;
				let hair_color = data.map(datum => datum.hair_color);
				let newUserName = hair_color [1];
				dispatch(ubahUserNameSuccess(newUserName));
			})
			.catch (err => {
				dispatch(ubahUserNameFailed(err.message));
			})
	}
}

export function ubahBirthYearSuccess(birth_year) {
	return {
		type: 'UBAH_BIRTH_YEAR',
		payload: {
			birth_year: birth_year
		}
	}
}

export function ubahBirthYear() {
	return async(dispatch) => {
		await dispatch(loadingStart());

		await axios
		.get("https://swapi.co/api/people/")
		.then(response => {
			const data = response.data.results;
			const birth_year = data.map(datum => datum.birth_year);
			const birth_years = birth_year[0];

			dispatch(ubahBirthYearSuccess(birth_years));
		})

		await dispatch(loadingEnd());
	}
}

export function ubahEmail() {
	return {
		type: 'UBAH_EMAIL',
		payload: {
			email: 'anekagudang@gmail.com',
		},
	};
};

export function ubahPhoneNumber() {
	return {
		type: 'UBAH_PHONE_NUMBER',
		payload: {
			phone_number: '888888',
		},
	};
};