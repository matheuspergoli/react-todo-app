import React from 'react'
import styled from 'styled-components'

const NavigationContainer = styled.nav`
	padding: 0 20px;
	margin-bottom: 10px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`

const ItemsContainer = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;

	li {
		cursor: pointer;
		font-size: 1rem;
		padding: 5px 10px;
		margin-bottom: 5px;

		&.active {
			border-radius: 5px;
			background-color: #04c2c9;
		}
	}
`

function Navigation() {
	return (
		<NavigationContainer>
			<ItemsContainer>
				<li>All</li>
				<li>Active</li>
				<li>Completed</li>
			</ItemsContainer>
		</NavigationContainer>
	)
}

export default Navigation
