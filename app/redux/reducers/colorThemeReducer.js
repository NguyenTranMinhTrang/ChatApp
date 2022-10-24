import types from "../types";
import { COLORS } from "../../constants";

const initialState = {
    appTheme: COLORS.light,
    error: null
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SWITCH_COLOR_THEME_BEGIN:
            return {
                ...state,
                error: null
            }

        case types.SWITCH_COLOR_THEME_SUCCESS:
            return {
                appTheme: action.payload.selectedColor,
                error: null
            }
        case types.SWITCH_COLOR_THEME_FAILURE:
            return {
                ...state,
                error: action.payload.error
            }

        default:
            return state;
    }
}

export default themeReducer;
