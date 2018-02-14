import { SET_VACANT_LIST } from '../types'

const initialState = {
  vacantList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VACANT_LIST: {
      return { ...state, vacantList: action.payload }
    }

    default: {
      return state
    }
  }
}
