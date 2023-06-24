"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Image from 'next/image';

import { HiOutlineViewList } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';

import ChunjaeEdu from '@/assets/img/천재교육.png';
import ChunjaeTextBook from '@/assets/img/CI/logo.png';
import EmployGovernment from '@/assets/img/고용노동부.png';
import GENIA from '@/assets/img/천재교육 디지털 러닝 GENIA.png';

import '@/assets/scss/Head/Header.scss';

const HeaderContainer = styled.header`
    margin-bottom: var(--header-height);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--header-height);
    padding: 0 1rem;
    background-color: rgb(var(--background-rgb));
    z-index: var(--z-fixed);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
    border-radius: 0 0 20px 20px;
    color: var(--text-color);

    &_toggle {
        font-size: 1.7rem;
        cursor: pointer;
    }
`;

const Header = () => {
    const [navIcon, setNavIcon] = useState(true);
  const [activeScreen, setActiveScreen] = useState(null);
  const navRef = useRef(null);

  const openScreen = (screen) => {
    if (activeScreen === screen) {
      setActiveScreen(null);
    } else {
      setActiveScreen(screen);
    }
  };

  useEffect(() => {
    const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId);
      const nav = document.getElementById(navId);

      if (toggle && nav) {
        toggle.addEventListener("click", () => {
          nav.classList.toggle("show");
          setNavIcon((prevNavIcon) => !prevNavIcon);
        });
      }
    };

    showMenu("header-toggle", "nav-menu");

    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveScreen(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

    return (
        <HeaderContainer className="header">
            <Link href={`/`} className="header_logo">
                <Image src={GENIA} alt="Picture" />
            </Link>
            <button className='header_toggle' id="header-toggle" >
                {navIcon ? <HiOutlineViewList /> : <AiOutlineClose />}
            </button>
            <nav className="nav" id="nav-menu">
                <div className="sub_header nav_content bd-grid">

                    <div className="nav_perfil">
                        <div className="nav_name">
                            <Image className="logo_sub" src={EmployGovernment} width={70} alt="Picture" />
                        </div>
                        <div className="nav_name">
                            <Image className="logo_sub" src={ChunjaeEdu} width={70} alt="Picture" />
                        </div>
                        <div className="nav_name">
                            <Image className="logo_sub" src={ChunjaeTextBook} width={70} alt="Picture" />
                        </div>
                    </div>

                    <div className="nav_menu">
                        <ul className="nav_list">
                            <BsBell className="alert" />
                            <li className="nav_item"><Link href={`/`} className="nav_link">고객센터</Link></li>
                            <li className="nav_item"><Link href={`/`} className="nav_link">공지사항</Link></li>
                            <li className="nav_item"><Link href={`/login`} className="nav_link">로그인</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="main_header nav_content bd-grid">
                    <Link href={`/`}><Image className="logo" src={GENIA} alt="Picture" /></Link>
                    <div className="nav_menu">
                        <ul className="nav_list">
                            <li className="nav_item dropdown">
                                <Link href="/" className="nav_link dropdown_link" onClick={() => openScreen(1)}>천재교육 IT센터</Link>

                                <ul className="dropdown_menu" id={activeScreen === 1 ? "show-menu" : ""}>
                                    <li className="dropdown_item"><Link href={`/`} className="nav_link">소개</Link></li>
                                    <li className="dropdown_item"><Link href={`/`} className="nav_link">교육시설</Link></li>
                                </ul>
                            </li>
                            <li className="nav_item dropdown">
                                <Link href="/" className="nav_link dropdown_link" onClick={() => openScreen(2)}>교육과정</Link>
                                <ul className="dropdown_menu" id={activeScreen === 2 ? "show-menu" : ""}>
                                    <li className="dropdown_item"><Link href={`/`} className="nav_link">빅데이터</Link></li>
                                    <li className="dropdown_item"><Link href={`/`} className="nav_link">Java 풀스택</Link></li>
                                    <li className="dropdown_item"><Link href={`/`} className="nav_link">프로덕트 매니저</Link></li>
                                </ul>
                            </li>
                            <li className="nav_item dropdown">
                                <Link href="/" className="nav_link dropdown_link" onClick={() => openScreen(3)}>강의실 예약</Link>
                                <ul className="dropdown_menu" id={activeScreen === 3 ? "show-menu" : ""}>
                                    <li className="dropdown_item"><Link href={`/`} className="nav_link">강의실 예약</Link></li>
                                </ul>
                            </li>
                            <li className="nav_item dropdown">
                                <Link href="/" className="nav_link dropdown_link" onClick={() => openScreen(4)}>블로그 게시판 </Link>
                                <ul className="dropdown_menu" id={activeScreen === 4 ? "show-menu" : ""}>
                                    <li className="dropdown_item"><Link href={`/`} className="nav_link">블로그 게시판</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </HeaderContainer>
    );
}

export default Header;