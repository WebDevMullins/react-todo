import './App.css'
import TodoList from './components/TodoList'

export default function App() {
	return (
		<>
			<main className='container mx-auto flex flex-col items-center p-4'>
				<TodoList />
			</main>
		</>
	)
}
