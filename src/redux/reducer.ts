import * as ActionTypes from '../constants/actionTypes';

interface StoreType {
  userName: string;
}

interface Action {
  type: string;
  payload: StoreType;
}

const initialState: StoreType = {
  userName: '',
};

const reducer = (state = initialState, action: Action) => {
  if (action.type === ActionTypes.ADD_USER) {
    return { userName: action.payload.userName };
  } else {
    return state;
  }
};

export default reducer;
