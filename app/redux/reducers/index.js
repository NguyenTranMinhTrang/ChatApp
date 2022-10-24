import { CombinedState } from "redux";
import themeReducer from "./colorThemeReducer";

const appReducer = combineReducers({
    themeReducer
});

const rootReducer = (state, action) => {
    if (action.type == types.CLEAR_REDUX_STATE) {
        state = undefined;
    }

    return appReducer(state, action);
}

export default rootReducer;