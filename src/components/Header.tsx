import styled from "@emotion/styled"
import { ReactNode } from "react"
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom"

const Header = () => {
	const {pathname} = useLocation()
	return (
		<HeaderStyled>
			LowPrice
			<Links>
				<StyledLink isActive={pathname === "/"} to='/'>Home</StyledLink>
				<StyledLink isActive={pathname === "/login"} to='/chart'>Chart</StyledLink>
			</Links>
		</HeaderStyled>
	)
}

const HeaderStyled = styled.header`
	display: flex;
	align-items: center;
	padding: 0 30px;
	position: fixed;
	left: 0;
	top: 0;
	height: 60px;
	width: 100%;
	background-image: linear-gradient(to right, #d63031, #fdcb6e);
	border-bottom: 4px solid #ffeaa7;
	color: white;
	font-size: 40px;
	font-weight: 700;
	z-index: 100;
`

const Links = styled.nav`
	font-size: 18px;
	margin-left: auto;

	a:first-child {
		margin-right: 15px;
	}
`

type LinkProps = {
	children: ReactNode;
	isActive: boolean;
	to: string;
}
const Link = ({children, isActive, ...props}: LinkProps) => {
	return (
		<ReactRouterDomLink {...props}>
			{children}
		</ReactRouterDomLink>
	)
}
const StyledLink = styled(Link)`
	color: #0984e3;
	text-decoration: none;
`

export default Header
