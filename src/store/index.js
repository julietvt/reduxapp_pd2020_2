import { createStore } from 'redux';
// редюсер это не просто функция. она должна вернуть состояние.
// это чистая функция!
// два параметра - состояние (предыдущее состояние) и действие. оба этих параметра - это объекты

const initialState = {
  value: 0,
};

// !!!! все значения состояний меняются в редюсере
const reducer = (prevState = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      value: prevState.value + 1,
    };
  } else if (action.type === 'DECREMENT') {
    return {
      value: prevState.value - 1,
    };
  } else {
    return prevState;
  }
  return prevState;
};

const store = createStore(reducer);

export default store;
