import {combineReducers} from 'redux';

/**
 * Create a reducer with appropriate handlers.
 *
 * @param {*} initialState - Initial state of the reducer.
 * @param {object} handlers - Object of handlers for each action type.
 * @returns {Function} Reducer function.
 */
const createReducer = (initialState, handlers) => (state = initialState, action) =>
    // eslint-disable-next-line no-prototype-builtins
    handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action) : state;

export default combineReducers({
    value: createReducer(null, {
        SET_VALUE: (state, {value}) => value,
    }),
});