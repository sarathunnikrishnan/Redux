// Action types
const INCREMENT = 'INCREMENT';

// Action creators
const increment = () => {
    return { type: INCREMENT };
};

// Reducer
const initialState = {
    count: 0
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        default:
            return state;
    }
};

// Redux store
const store = Redux.createStore(counterReducer);

// DOM manipulation
const countElement = document.getElementById('count');
const incrementButton = document.getElementById('incrementBtn');

// Function to update count in the DOM
const updateCount = () => {
    const state = store.getState();
    countElement.textContent = state.count;
};

// Initial count display
updateCount();

// Subscribe to store changes
store.subscribe(updateCount);

// Event listener for increment button
incrementButton.addEventListener('click', () => {
    store.dispatch(increment());
});