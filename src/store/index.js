import { configureStore } from '@reduxjs/toolkit'
import authenticationSlice from './auth'
import counterSlice from './counter'


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authenticationSlice.reducer
    }
})
export const authActions = authenticationSlice.actions
export const counterActions = counterSlice.actions
export default store


// const counterReducer = (state = init, action) => {
//     if(action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         }
//     }
//     if(action.type === 'decrement') {
//         return {
//             counter: state.counter -1,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'toogle') {
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }
//     return state
// }

// const store = createStore(counterReducer)

// export default store