import React from 'react'
import styled from 'styled-components'

const TodoContainer = styled.section`
	display: flex;
	align-items: center;
	gap: 10px;

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
	return (
		<TodoContainer>
			<input type='checkbox' />
			<p>{activity}</p>
		</TodoContainer>
	)
}

export default Todo
