import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface TodoFormProps {
	addTodo: (value: string) => void
}

export default function TodoForm({ addTodo }: TodoFormProps) {
	const [title, setTitle] = useState<string>('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (!title) return
		if (title.trim()) {
			addTodo(title)
			setTitle('')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className='flex w-full max-w-sm items-center space-x-2'>
				<Input
					type='text'
					placeholder='Add a new todo'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
				<Button type='submit'>Add</Button>
			</div>
		</form>
	)
}
