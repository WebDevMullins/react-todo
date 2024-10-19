import { useEffect, useState } from 'react'

import TodoForm from './TodoForm'
import Todos from './Todos'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'

export default function TodoList() {
	const [todos, setTodos] = useState<{ id: number; title: string }[]>([])

	useEffect(() => {
		const savedTodos = localStorage.getItem('todos')
		if (savedTodos) {
			setTodos(JSON.parse(savedTodos))
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const addTodo = (title: string) => {
		const newTodo = { id: Date.now(), title }
		setTodos([...todos, newTodo])
	}

	const deleteTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

	return (
		<Card className='w-[350px]'>
			<CardHeader>
				<CardTitle>Todo List</CardTitle>
				<CardDescription>Create your list of todos</CardDescription>
			</CardHeader>
			<CardContent>
				<div className='flex flex-col space-y-4'>
					<TodoForm addTodo={addTodo} />
					<Todos
						todos={todos}
						deleteTodo={deleteTodo}
					/>
				</div>
			</CardContent>
		</Card>
	)
}
