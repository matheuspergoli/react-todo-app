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
	const menuItems = React.useRef<HTMLLIElement[]>([])

	function handleClick({ target }: any) {
		menuItems.current.forEach((item) => item.classList.remove('active'))
		target.classList.add('active')
		const activeElement = menuItems.current.filter((item) => {
			return item.classList.contains('active')
		})
		console.log(activeElement[0])
	}

	return (
		<NavigationContainer>
			<ItemsContainer>
				<li
					onClick={handleClick}
					ref={(element: HTMLLIElement) => menuItems.current.push(element)}
				>
					All
				</li>

				<li
					onClick={handleClick}
					ref={(element: HTMLLIElement) => menuItems.current.push(element)}
				>
					Active
				</li>

				<li
					onClick={handleClick}
					ref={(element: HTMLLIElement) => menuItems.current.push(element)}
				>
					Completed
				</li>
			</ItemsContainer>
		</NavigationContainer>
	)
}

export default Navigation
