import './App.css'
import TodoList from './components/TodoList'

export default function App() {
	return (
		<>
			<main className='container mx-auto flex flex-col items-center py-24'>
				<TodoList />
			</main>
		</>
	)
}
