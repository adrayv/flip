import { createStore } from 'redux' 
import produce from 'immer'

const initialState = {
	test: 1
}

const reducer = (state = initialState, action) => {
	return produce(state, draft => {
		switch(action.type){
			case "TEST":
				draft.test += 10
		}
	})
}

export default createStore(reducer)