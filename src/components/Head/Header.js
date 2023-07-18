"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Image from 'next/image';

import { HiOutlineViewList } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';
import { FaUserCircle } from "react-icons/fa";

import ChunjaeEdu from '@/assets/img/천재교육.png';
import ChunjaeTextBook from '@/assets/img/CI/logo.png';
import EmployGovernment from '@/assets/img/고용노동부.png';
import GENIA from '@/assets/img/천재교육 디지털 러닝 GENIA.png';

import '@/assets/scss/Head/Header.scss';
import { signOut, useSession } from "next-auth/react";

const LoginArea = styled.div`
    svg {
        cursor: pointer;
        font-size: 35px;
        margin-top: 3px;
    }
    
    & ul.popup {
        display: none;

        &_show {
            @media screen and (min-width: 1024px) {
                position: fixed;
                background-color: rgb(var(--background-rgb));
                padding: 10px;
                border-radius: 5px;
                border: 1px solid var(--text-color);
                margin-top: -15px;;
                margin-left: -30px;
                z-index: 1;

                .popup_item {
                    cursor: pointer;
                    width: 100%;
                    height: 40px;
                    line-height: 5px;
        
                    &:hover {
                        color: var(--theme-color);
                    }
                }
            }
            
        }

        @media screen and (max-width: 1024px) {
            display: block;
            & li:hover {
                color: black;
                cursor: pointer;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        li.popup {
            display: none;
        }
    }
    
`;

const Header = () => {
    const [navIcon, setNavIcon] = useState(false);
    const [activeScreen, setActiveScreen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(false);
    const navRef = useRef(null);
    const buttonRef = useRef(null)
    const { status } = useSession();

    const toggleDropdown = (Dropdown) => {
        if (activeDropdown === Dropdown) {
            setActiveDropdown(false);
        } else {
            setActiveDropdown(Dropdown);
        }
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setActiveScreen(false);
            }
        };
        document.addEventListener("click", handleOutsideClick);

        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        setNavIcon((prev) => !prev);
    }, [activeScreen]);

    return (
        <header className="header">
            <Link href={`/`} className="header_logo">
                <Image src={GENIA} alt="Picture" priority />
            </Link>
            <button onClick={() => {
                setActiveScreen(prev => !prev);
            }} ref={buttonRef} className='header_toggle'>
                {navIcon ? <HiOutlineViewList /> : <AiOutlineClose />}
            </button>
            <nav ref={navRef} className={`nav ${activeScreen ? 'show' : null}`} id="nav-menu">
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
                            <LoginArea>
                                {status === "authenticated" ? (
                                    <ul>
                                        <li className="nav_item popup">
                                            <FaUserCircle onClick={() => toggleDropdown(true)} />
                                        </li>
                                        <ul className={activeDropdown ? `popup_show` : `popup`}>
                                            <li className="nav_item popup_item">
                                                <Link href={'/'}>마이페이지</Link>
                                            </li>
                                            <li className="nav_item popup_item" onClick={() => signOut()} >로그아웃</li>
                                        </ul>
                                    </ul>
                                ) : (
                                    <li className="nav_item"><Link href={`/login`} className="nav_link">로그인</Link></li>
                                )}
                            </LoginArea>
                        </ul>
                    </div>
                </div>

                <div className="main_header nav_content bd-grid">
                    <Link href={`/`}><Image className="logo" src={GENIA} alt="Picture" priority /></Link>
                    <div className="nav_menu">
                        <ul className="nav_list">
                            <li className="nav_item dropdown">
                                <Link href="/" className="nav_link dropdown_link" onClick={() => openDropdown(1)}>천재교육 IT센터</Link>

                                <ul className="dropdown_menu" id={activeDropdown === 1 ? "show-menu" : ""}>
                                    <li className="dropdown_item"><Link href={`/`} className="nav_link">소개</Link></li>
                                    <li className="dropdown_item"><Link href={`/`} className="nav_link">교육시설</Link></li>
                                </ul>
                            </li>
                            <li className="nav_item dropdown">
                                <Link href="/" className="nav_link dropdown_link" onClick={() => openDropdown(2)}>교육과정</Link>
                                <ul className="dropdown_menu" id={activeDropdown === 2 ? "show-menu" : ""}>
                                    <li className="dropdown_item"><Link href={`/curriculum/java`} className="nav_link">Java 풀스택</Link></li>
                                    <li className="dropdown_item"><Link href={`/curriculum/bigdata`} className="nav_link">빅데이터</Link></li>
                                    <li className="dropdown_item"><Link href={`/curriculum/pm`} className="nav_link">프로덕트 매니저</Link></li>
                                </ul>
                            </li>
                            <li className="nav_item dropdown">
                                <Link href="/" className="nav_link dropdown_link" onClick={() => openDropdown(3)}>강의실 예약</Link>
                                <ul className="dropdown_menu" id={activeDropdown === 3 ? "show-menu" : ""}>
                                    <li className="dropdown_item"><Link href={`/`} className="nav_link">강의실 예약</Link></li>
                                </ul>
                            </li>
                            <li className="nav_item dropdown">
                                <Link href="/" className="nav_link dropdown_link" onClick={() => openDropdown(4)}>블로그 게시판 </Link>
                                <ul className="dropdown_menu" id={activeDropdown === 4 ? "show-menu" : ""}>
                                    <li className="dropdown_item"><Link href={`/`} className="nav_link">블로그 게시판</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;