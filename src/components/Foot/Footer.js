import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../assets/img/CI/img_ci_var01.png';
import In from '../../assets/img/instagramIcon.svg';
import Fb from '../../assets/img/facebookIcon.svg';
import NB from '../../assets/img/naver.svg';
import YT from '../../assets/img/youtube.svg';
import footer from '../../assets/scss/Foot/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={footer.footerContainer}>
      <div className={footer.imageWrapper}>
        <Image src={Logo} alt="Image" />
      </div>
      <div className={footer.infoContainer}>
        <div>
          <p>(주)천재교육</p>
          <p>사업자등록번호: 119-81-19350</p>
        </div>
        <div>
          <p>주소: 서울특별시 디지털로9길 23 마리오아울렛2관 11층 천재IT교육센터</p>
          <p>TEL: 02-3282-8589 | Email: genia@chunjae.co.kr</p>
        </div>
        <p>COPYRIGHT ⓒ 2023 BY CHUNJAE CO.,LTD ALL RIGHTS RESERVED.</p>
      </div>
      <div className={footer.divContainer}>
        <label className={footer.labelContainer}>
          <Link href={''}>회사소개</Link>
          <span>|</span>
          <Link href={''}>이용약관</Link>
          <span>|</span>
          <Link href={''}>개인정보처리방침</Link>
        </label>
        <div className={footer.iconContainer}>
          <Link href={'#instagram'}><Image src={In} alt='Instagram' width={40} height={40} /></Link>
          <Link href={'#facebook'}><Image src={Fb} alt='Facebook' width={40} height={40} /></Link>
          <Link href={'#naverblog'}><Image src={NB} alt='Naver Blog' width={40} height={40} /></Link>
          <Link href={'#youtube'}><Image src={YT} alt='Youtube' width={40} height={40} /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
