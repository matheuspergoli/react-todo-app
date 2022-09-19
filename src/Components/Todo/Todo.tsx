import React from 'react'
import styled from 'styled-components'

const TodoContainer = styled.section`
  display: flex;
  align-items: center;

  p {
    font-size: 0.5rem;
  }
`

interface TodoProps {
  activity: string
}

function Todo({ activity }: TodoProps) {
	return (
		<TodoContainer>
      <input type="checkbox" name="" id="" />
			<p>{activity}</p>
		</TodoContainer>
	)
}

export default Todo
