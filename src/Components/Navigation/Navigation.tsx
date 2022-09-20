import React from 'react'
import styled from 'styled-components'
import { TodoContext } from '../Context/TodoContext'

const NavigationContainer = styled.nav`
	padding: 0 20px;
	margin-bottom: 15px;
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
	const { setSelectedItem } = React.useContext(TodoContext)
	const $All = React.useRef<HTMLLIElement | null>(null)
	const $Active = React.useRef<HTMLLIElement | null>(null)
	const $Completed = React.useRef<HTMLLIElement | null>(null)

	function handleClick({ target }: any) {
		const menuItems = [$All, $Active, $Completed]
		menuItems.forEach((item) => item.current?.classList.remove('active'))
		target.classList.add('active')
		const activeItem = menuItems.filter((item) => {
			return item.current?.classList.contains('active')
		})
		setSelectedItem(activeItem[0].current)
	}

	return (
		<NavigationContainer>
			<ItemsContainer>
				<li onClick={handleClick} ref={$All}>
					All
				</li>

				<li onClick={handleClick} ref={$Active}>
					Active
				</li>

				<li onClick={handleClick} ref={$Completed}>
					Completed
				</li>
			</ItemsContainer>
		</NavigationContainer>
	)
}

export default Navigation
