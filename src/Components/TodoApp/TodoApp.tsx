import React from 'react'
import styled from 'styled-components'
import AddTodo from '../AddTodo/AddTodo'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'

const MainContainer = styled.main`
	margin: 0 auto;
	max-width: 400px;
`

function TodoApp() {
	return (
		<MainContainer>
			<Header />
			<Navigation />
			<AddTodo />
		</MainContainer>
	)
}

export default TodoApp
