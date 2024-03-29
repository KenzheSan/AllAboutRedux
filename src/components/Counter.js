import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css'
import { counterActions,  } from '../store'

const Counter = () => {
	const counter = useSelector((state) => state.counter.counter)
	const showCounter = useSelector((state) => state.counter.showCounter)
	const dispatch = useDispatch()
	const incrementHandler = () => {
		dispatch(counterActions.increment())
	}

	const decrementHandler = () => {
		dispatch(counterActions.decrement())
	}

	const increaseHandler = () => {
		dispatch(counterActions.increace(5))
	}

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggle())
	}

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{showCounter && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>increment</button>
				<button onClick={decrementHandler}>decrement</button>
				<button onClick={increaseHandler}>increase </button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	)
}

export default Counter
