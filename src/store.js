import { createStore } from 'redux' 

const initialState = {
	test: 1
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case "TEST":
			return {
				...state,
				test: state.test + 1
			}
		default:
			return state
	}
}

export default createStore(reducer)