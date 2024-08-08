import './App.css';
import { useSelector, useDispatch } from 'react-redux'
// import { deposit, widthdraw } from './store/actions/bank_actions';
import Products from './components/Products';
import { deposit, widthdraw } from './rtk/slices/bankSlice';

function App() {
	const state = useSelector(state => state.bank);
	console.log(state)
	const dispatch = useDispatch();
	return (
		<div className='App'>
			<p>your bank balance: {state}</p>
			<button onClick={() => dispatch(widthdraw(100))}>widthdraw</button>
			<button onClick={() => dispatch(deposit(100))}>deposit</button>
			<Products />
		</div>
	);
}

export default App;
