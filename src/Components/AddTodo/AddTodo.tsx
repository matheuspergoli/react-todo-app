import React from 'react'
import styled from 'styled-components'
import Todo from '../Todo/Todo'

const FormContainer = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	margin-bottom: 10px;

	input:focus,
	input:active {
		outline: none;
	}

	input {
		width: 100%;
		padding: 5px;
		font-size: 1rem;
		border-radius: 5px;
		border: 1px solid rgba(0, 0, 0, 0.2);
	}

	button {
		border: none;
		font-size: 1rem;
		cursor: pointer;
		padding: 6px 20px;
		border-radius: 5px;
		background-color: #04c2c9;
	}
`

function AddTodo() {
	const [value, setValue] = React.useState('')
	const [todos, setTodo] = React.useState<{ activity: string }[]>([
		{
			activity: ''
		}
	])

	function addNewTodo() {
		if (value.length) {
			setTodo([...todos, { activity: value }])
		} else {
			alert('Digite alguma coisa')
		}
	}

	return (
		<>
			<FormContainer onSubmit={(e) => e.preventDefault()}>
				<input
					type='text'
					placeholder='Add details'
					value={value}
					onChange={({ target }) => setValue(target.value)}
				/>
				<button type='button' onClick={addNewTodo}>
					Add
				</button>
			</FormContainer>

			{todos &&
				todos.map((todo, index) => (
					<Todo key={index} activity={todo.activity} />
				))}
		</>
	)
}

export default AddTodo
