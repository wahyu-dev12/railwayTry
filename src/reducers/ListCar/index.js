import { GET_LIST_CAR } from "../../actions/CarAction";

const intialState = {
    getListCarData: false,
    getListCarLoading: false,
    getListCarErr: false
}

const car = (state = intialState, action) => {
    switch (action.type) {
        case GET_LIST_CAR:
            return {
                ...state,
                // Input data from action to initialState
                getListCarData: action.payloads.data,
                getListCarLoading: action.payloads.loading,
                getListCarErr: action.payloads.errMsg
            }
        default:
            return state;
    }
}

export default car;