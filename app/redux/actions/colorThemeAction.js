import types from "../types";
import store from "../store";
import { COLORS } from "../../constants";

const { dispatch } = store;

export const switchColorThemeBegin = () => ({
    type: types.SWITCH_COLOR_THEME_BEGIN
});

export const switchColorThemeSuccess = (selectedColor) => ({
    type: types.SWITCH_COLOR_THEME_SUCCESS,
    payload: { selectedColor }
});

export const switchColorThemeFailure = (error) => ({
    type: types.SWITCH_COLOR_THEME_FAILURE,
    payload: { error }
});

export const switchColorTheme = (themeColor) => {
    return dispatch => {
        dispatch(switchColorThemeBegin());
        switch (themeColor) {
            case "dark":
                dispatch(switchColorThemeSuccess(COLORS.dark));
                break;
            case "light":
                dispatch(switchColorThemeSuccess(COLORS.light));
                break;
            default:
                dispatch(switchColorThemeFailure({ error: "Invalid theme type" }))
                break;
        }
    }
}