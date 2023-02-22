const counterEL = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

// initital state

const initialState = {
  value: 0,
};

// create reducer function

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if ((action.type = "decrement")) {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return {
      ...state,
    };
  }
};

// create store
const store = Redux.createStore(counterReducer);

//ui rendering function
const render = () => {
  const state = store.getState();
  counterEL.innerText = state.value.toString();
};

//button click listener

incrementBtn.addEventListener("click", () => {
  store.dispatch({ type: "increment" });
});

decrementBtn.addEventListener("click", () => {
  store.dispatch({ type: "decrement" });
});
render();
store.subscribe(render);
