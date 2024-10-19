import Todos from './Todos'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { useState } from 'react'
import TodoForm from './TodoForm'

export default function TodoList() {
	const [todos, setTodos] = useState<{ id: number; title: string }[]>([])

	const addTodo = (title: string) => {
		const newTodo = [...todos]
		newTodo.push({ id: todos.length + 1, title: title })
		setTodos(newTodo)
	}

	const deleteTodo = (id: number) => {
		const newTodo = todos.filter((todo) => todo.id !== id)
		setTodos(newTodo)
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
