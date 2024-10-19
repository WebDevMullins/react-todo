import { CheckIcon, Trash2Icon } from 'lucide-react'

import { Todo } from './TodoList'

import { Button } from '@/components/ui/button'

interface TodoProps {
	todos: Todo[]
	deleteTodo: (id: number) => void
	completeTodo: (id: number) => void
}

export default function Todos({ todos, deleteTodo, completeTodo }: TodoProps) {
	const handleDelete = (id: number) => {
		deleteTodo(id)
	}

	const handleComplete = (id: number) => {
		completeTodo(id)
	}

	return (
		<ul className='space-y-2'>
			{todos.map((todo) => (
				<li
					key={todo.id}
					className={`text-md rounded-md border px-4 py-3 ${todo.completed ? 'line-through' : ''}`}>
					<div className='flex items-center justify-between'>
						{todo.title}
						<div className='flex items-center space-x-2'>
							<Button
								size='icon'
								variant='secondary'
								onClick={() => handleComplete(todo.id)}
								className='bg-emerald-700'
								disabled={todo.completed}>
								<CheckIcon />
							</Button>
							<Button
								size='icon'
								variant='destructive'
								onClick={() => handleDelete(todo.id)}>
								<Trash2Icon />
							</Button>
						</div>
					</div>
				</li>
			))}
		</ul>
	)
}
