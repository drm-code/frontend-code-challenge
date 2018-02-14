import { SHOW_LOADING, HIDE_LOADING } from '../types'

const initialState = {
  show: true
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING: {
      return { ...state, show: true }
    }

    case HIDE_LOADING: {
      return { ...state, show: false }
    }

    default: {
      return state
    }
  }
}
