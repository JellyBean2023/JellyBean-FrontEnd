'use client';
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import '../../../assets/scss/Curriculum/swiper.scss';
import { useState, useEffect, useRef } from "react";

SwiperCore.use([Navigation, Pagination]);

const RendingContainer = styled.section`
    background-color: black;
    padding: 10rem 1rem;
    position: relative;

  #popup {
    position: absolute;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    iframe {
      position: absolute;
    }
  }
`

const video = [
  {id: "dAH5prLK_QQ"},
  {id: "8SHu9ksFqk0"},
  {id: "4isSj9WcXUI"},
  {id: "JQvF3vLe1Gc"},
  {id: "5r4IQh4SPNo"},
  {id: "MYPVQccHhAQ"},
]

const RendingJava = () => {
  const [popup, setPopup] = useState(null);
  const popupRef = useRef(null);

  const handler = (ID) => {
    setPopup(ID);
  }

  const handleOutsideClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setPopup(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <RendingContainer className={popup !== null ? 'screen' : ''}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation={true}
      >
        {video.map((v, idx) => (
            <SwiperSlide key={idx}>
                <img src={`https://img.youtube.com/vi/${v.id}/0.jpg`} onClick={() => handler(v.id)} alt="Thumbnail" />
            </SwiperSlide>
        ))}
      </Swiper>
      {popup &&
        <div id="popup">
          <iframe ref={popupRef} width="560" height="315" src={`https://www.youtube.com/embed/${popup}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      }
    </RendingContainer>
  )
}

export default RendingJava;