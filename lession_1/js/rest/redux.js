// My Redux
// import { createStore } from "https://cdn.skypack.dev/redux";

// My App Thuần
function createStore(reducer) {
  let state = reducer(undefined, {});
  const subscribers = [];

  return {
    getState() {
      return state;
    },
    dispatch(action) {
      state = reducer(state, action);
      // new state = (old state, action)

      subscribers.forEach((subscriber) => subscriber());
    },
    subscribe(subscriber) {
      subscribers.push(subscriber);
    },
  };
}

// Reducer
const initCounter = 0;

function counter(state = initCounter, action) {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload;
    case "WITHDRAW":
      return state - action.payload;
    default:
      return state;
  }
}

// Store
let store = (window.store = createStore(counter));

// Action
function actiontDeposit(cost) {
  return {
    type: "DEPOSIT",
    payload: cost,
  };
}

function actiontWithdraw(cost) {
  return {
    type: "WITHDRAW",
    payload: cost,
  };
}

// Dom event
const deposit = document.querySelector("#deposit");
const withdraw = document.querySelector("#withdraw");

// Event
deposit.onclick = function () {
  store.dispatch(actiontDeposit(10));
};

withdraw.onclick = function () {
  store.dispatch(actiontWithdraw(10));
};

// Render DOM
store.subscribe(() => {
  render();
});

// Render
function render() {
  const output = document.querySelector("#output");
  output.innerText = store.getState();
}

render();
