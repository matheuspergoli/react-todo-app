import React from 'react'
import styled from 'styled-components'

const FormContainer = styled.form`
	display: flex;
	align-items: center;
	justify-content: space-between;

	input:focus,
	input:active {
		outline: none;
	}

	input {
		width: 150px;
		padding: 2px;
		border-radius: 5px;
		border: 1px solid rgba(0, 0, 0, 0.2);
	}

	button {
		border: none;
		cursor: pointer;
		padding: 3px 10px;
		border-radius: 5px;
		background-color: #04c2c9;
	}
`

function AddTodo() {
	const [value, setValue] = React.useState('')
	const [todos, setTodo] = React.useState([
		{
			todo: ''
		}
	])

	function addNewTodo() {
		setTodo([...todos, { todo: value }])
	}

	return (
		<>
			<FormContainer onSubmit={(e) => e.preventDefault()}>
				<input
					type='text'
					placeholder='add details'
					value={value}
					onChange={({ target }) => setValue(target.value)}
				/>
				<button type='button' onClick={addNewTodo}>
					Add
				</button>
			</FormContainer>

			{todos &&
				todos.map((todo, index) => (
					<section key={index}>
						<p>{todo.todo}</p>
					</section>
				))}
		</>
	)
}

export default AddTodo
