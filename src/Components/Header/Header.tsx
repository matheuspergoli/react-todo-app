import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.header`
	margin-bottom: 50px;

	h1 {
		font-size: 2.5rem;
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
