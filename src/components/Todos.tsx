import { Trash2Icon } from 'lucide-react'
import { Button } from './ui/button'

interface TodoProps {
	todos: { id: number; title: string }[]
	deleteTodo: (id: number) => void
}

export default function Todos({ todos, deleteTodo }: TodoProps) {
	const handleDelete = (id: number) => {
		deleteTodo(id)
		console.log('Delete todo', id)
	}
	return (
		<ul className='space-y-2'>
			{todos.map((todo) => (
				<li
					key={todo.id}
					className='rounded-md border px-4 py-3 text-sm'>
					<div className='flex items-center justify-between'>
						{todo.title}
						<Button
							size='icon'
							variant='destructive'
							onClick={() => handleDelete(todo.id)}>
							<Trash2Icon />
						</Button>
					</div>
				</li>
			))}
		</ul>
	)
}
