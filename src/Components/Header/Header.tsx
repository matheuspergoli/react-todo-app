import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
	margin-top: 20px;
	margin-bottom: 20px;

	h1 {
		font-size: 1rem;
		text-align: center;
	}
`

function Header() {
	return (
		<HeaderContainer>
			<h1>#todo</h1>
		</HeaderContainer>
	)
}

export default Header
