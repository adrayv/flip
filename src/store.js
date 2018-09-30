import { createStore } from 'redux' 
import produce from 'immer'

import { pickRandomFrom } from './services/tools'

import symbols from './config/symbols'

const initialState = {
	gameBoard: null
}

const reducer = (state = initialState, action) => {
	return produce(state, draft => {
		switch(action.type){
			case "MAKE_BOARD":
				draft.gameBoard = Array(5).fill(Array(5).fill(null))
				draft.gameBoard = draft.gameBoard.map(row => row.map(() => pickRandomFrom(symbols)))
				console.log('RESULT OF MAKE_BOARD', draft.gameBoard)
		}
	})
}

export default createStore(reducer)