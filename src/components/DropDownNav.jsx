import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: rgba(250, 250, 250, 0.8);
  width: 260px;
  position: fixed;
  top: 0;
  left: 50%;
  height: 250px;
  transform: ${({ open }) => (open ? "translate(-50%, 0)" : "translate(-50%, -100%)")};
  transition: transform 0.5s ease;
  z-index: 11;
  padding: 15px;
  a {
    font-size: 16px;
    text-decoration: none;
    display: block;
    margin-bottom: 20px;
  }
`;

const DropDownNav = ({ open }) => {
  return (
    <StyledNav open={open}>
      <Link
        to="title"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        home
      </Link>
      <Link
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        about
      </Link>
      <Link
        to="portfolio"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        work
      </Link>
      <a
        href="https://docdro.id/jpzcvsT"
        target="_blank"
      >
        resume
      </a>
      <a
        href="http://www.linkedin.com/in/vasilya-nizamova"
        target="_blank"
      >
        linkedin
      </a>
      <a
        href="https://github.com/vasynizami"
        target="_blank"
      >
        github
      </a>
      <a
        href="mailto:victoriartz89@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        e-mail
      </a>
    </StyledNav>
  );
};
export default DropDownNav;
