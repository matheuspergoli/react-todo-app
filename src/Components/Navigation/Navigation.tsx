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
	const { selectedItem, setSelectedItem } = React.useContext(TodoContext)
	const itemsContainerRef = React.useRef<HTMLUListElement | null>(null)

	function handleClick({ target }: any) {
		const menuItems: HTMLLIElement[] = []
		itemsContainerRef.current?.childNodes.forEach((item) => {
			menuItems.push(item as HTMLLIElement)
		})
		menuItems.forEach((item) => item.classList.remove('active'))
		target.classList.add('active')
		const selectedMenuItem = menuItems.filter((item) => item.classList.contains('active'))
		setSelectedItem(selectedMenuItem[0])
	}

	console.log(selectedItem)

	return (
		<NavigationContainer>
			<ItemsContainer ref={itemsContainerRef}>
				<li onClick={handleClick}>All</li>
				<li onClick={handleClick}>Active</li>
				<li onClick={handleClick}>Completed</li>
			</ItemsContainer>
		</NavigationContainer>
	)
}

export default Navigation
