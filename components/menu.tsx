import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.nav`
    width: 100%;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1000;
`;

const MainNav = styled.ul`
    list-style-type: none;
    flex-direction: column;
    padding: 1rem;

    backdrop-filter: blur(10px) saturate(159%);
    -webkit-backdrop-filter: blur(10px) saturate(159%);
    background-color: rgba(245, 245, 245, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.125);
    border-radius: 2vh;

    @media (min-width: 768px) {
        display: flex !important;
        flex-direction: row;
        justify-content: flex-end;
        gap: 1rem;
    }

`
const NavLi = styled.li`
    text-align: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    margin: 0;
    padding: 0;
    gap: 0.3rem;
`
const NavLink = styled.span`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    line-height: 1rem;
`

const Button = styled.button`
    padding: 1rem 1.2rem;
    background: white;
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    &:hover {
        -ms-transform: scale(1.04); 
        -webkit-transform: scale(1.04); 
        transform: scale(1.04); 
    }
`

const Menu = () => {
    return (
        <Wrapper>
            <Image draggable={false} width={42} height={42} src="/static/logo.png" alt="Quietly Logo" />
            <MainNav>
                <NavLi>
                    <Link href="#home" scroll={false}>
                        <NavLink>Home</NavLink>
                    </Link>
                </NavLi>
                <NavLi>
                    <Link href="#about" scroll={false}>
                        <NavLink>About</NavLink>
                    </Link>
                </NavLi>
                <NavLi>
                    <Link href="#guidelines" scroll={false}>
                        <NavLink>Community</NavLink>
                    </Link>
                </NavLi>
                <NavLi>
                    <Link href="" scroll={false}>
                        <NavLink>Status</NavLink>
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </NavLi>
                <NavLi>
                    <Link href="#contact" scroll={false}>
                        <NavLink>Contact</NavLink>
                    </Link>
                </NavLi>
            </MainNav>
            <Link href='https://download.quietly.space'>
                <Button>
                    Dive into
                </Button>
            </Link>
        </Wrapper>
    )
}

export default Menu;