const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200,
};

const reducer = (state = initialWagonState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case "gather": {
      return {
        ...state,
        supplies: state.supplies + 15,
        distance: state.distance,
        days: state.days + 1,
      };
    }
    case "travel": {
      if (state.supplies <= 0) {
        return state;
      }
      return {
        ...state,
        supplies: state.supplies - 20 * action.payload,
        distance: state.distance + 10 * action.payload,
        days: state.days + action.payload,
      };
    }
    case "tippedWagon": {
      return {
        ...state,
        supplies: state.supplies - 30,
        distance: state.distance,
        days: state.days + 1,
      };
    }
    case "sell": {
      if (state.supplies <= 0) {
        return state;
      }
      return {
        ...state,
        supplies: state.supplies,
        distance: state.distance,
        days: state.days + 1,
        cash: state.cash + 5,
      };
    }
    case "buy": {
      if (state.cash <= 0) {
        return state;
      }
      return {
        ...state,
        supplies: state.supplies + 25,
        distance: state.distance,
        days: state.days + 1,
        cash: state.cash - 15,
      };
    }
    case "theft": {
      if (state.cash <= 0) {
        return state;
      }
      return {
        ...state,
        supplies: state.supplies,
        distance: state.distance,
        days: state.days + 1,
        cash: state.cash / 2,
      };
    }
  }
};
let wagon = reducer(undefined, {});
console.log(wagon);
wagon = reducer(wagon, { type: "travel", payload: 1 });
console.log(wagon);
wagon = reducer(wagon, { type: "gather" });
console.log(wagon);
wagon = reducer(wagon, { type: "tippedWagon" });
console.log(wagon);
wagon = reducer(wagon, { type: "travel", payload: 3 });
console.log(wagon);
wagon = reducer(wagon, { type: "sell" });
console.log(wagon);

wagon = reducer(wagon, { type: "buy" });
console.log(wagon);

wagon = reducer(wagon, { type: "theft" });
console.log(wagon);
