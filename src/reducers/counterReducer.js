import ACTION_TYPES from '../actions/actionsType.js';

const initialState = {
  value: 0,
  step: 1,
};

// !!!! все значения состояний меняются в редюсере
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.COUNTER_INCREMENT:
      return {
        ...state,
        value: state.value + state.step,
      };
    case ACTION_TYPES.COUNTER_DECREMENT:
      return {
        ...state,
        value: state.value - state.step,
      };
    default:
      return state;
  }
}
