import React from 'react'
import styled from 'styled-components'

const TodoContainer = styled.section`
	display: flex;
	align-items: center;
	gap: 10px;

	&.completed p {
		text-decoration: line-through;
	}

	p {
		font-size: 1.5rem;
	}

	input {
		width: 1rem;
		height: 1rem;
	}
`

interface TodoProps {
	activity: string
}

function Todo({ activity }: TodoProps) {
	const [isChecked, setIsChecked] = React.useState(false)

	function handleChange() {
		setIsChecked(!isChecked)
	}

	return (
		<TodoContainer className={`${isChecked ? 'completed' : ''}`}>
			<input type='checkbox' checked={isChecked} onChange={handleChange} />
			<p>{activity}</p>
		</TodoContainer>
	)
}

export default Todo
