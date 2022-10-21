import React from "react";
import { Link } from "react-router-dom";
import styled from "astroturf/react";

interface IProps {}

export const Header = (props: IProps) => {
  return (
    <Container>
      <Nav>
        <StyledLink to={"/"}>Главная</StyledLink>
        <StyledLink to={"/users"}>Пользователи</StyledLink>
        <StyledLink to={"/posts"}>Посты</StyledLink>
        <StyledLink to={"/adr"}>Адреса</StyledLink>
      </Nav>
      <Block>Выход</Block>
    </Container>
  );
};
const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: black;
`;

const Nav = styled.nav`
  display: flex;
  column-gap: 16px;
  padding: 10px 16px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Block = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: green;
  height: 40px;
  width: 160px;
`;
