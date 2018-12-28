const initialState = {
	username: 'tes',
	email: 'kosong@gmail.com',
	phone_number: '08080808',
	birth_year: '',
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'UBAH_USERNAME':
			return {
				...state,
				username: action.payload.username,
			};

			case 'UBAH_EMAIL':
				return {
					...state,
					phone_number: action.payload.phone_number,
				};

			case 'UBAH_BIRTH_YEAR':
				return {
					...state,
					birth_year:action.payload.birth_year,
				}

				default:
					return state;
	}
};