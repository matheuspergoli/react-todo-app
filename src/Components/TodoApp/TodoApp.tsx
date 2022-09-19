import React from 'react'
import styled from 'styled-components'
import AddTodo from '../AddTodo/AddTodo'
import Header from '../Header/Header'
import Navigation from '../Navigation/Navigation'

const MainContainer = styled.main`
	max-width: 400px;
	margin: 50px auto 0 auto;
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
