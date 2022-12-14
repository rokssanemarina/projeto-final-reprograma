import { Header } from "../Components/Header";
import gatoImg from "../assets/me-illustration.svg";
import profileFoto from "../assets/rocks-profile.png";

import Style from "../Styles/Components/sobre.module.css";

import {InstagramLogo, LinkedinLogo, GithubLogo, TwitterLogo} from 'phosphor-react'

export function Sobre() {
  return (
    <div>
      <Header title="Sobre a autora" image={gatoImg} />
      <div className={Style.bioContainer}>
        <img className={Style.profileImg} src={profileFoto} />
        <p>
          Meu nome é rokssane marina, eu tenho 26 anos e sou de fortaleza/ce, a
          terra do sol. Atualmente eu me encontro ainda em transição de carreira
          do marketing para tecnologia e me encontro atuando com UX Designer.
          Sou apaixonada por cinema, cultura pop, animações e algumas coisas que
          envolve arte. Um fato curioso sobre mim é que quando as pessoas me
          conheçem na vida real, elas fazem a menor ideia de que eu sou muito
          baixinha.
        </p>
      </div>
      <div className={Style.socialContainter}>
        <p className={Style.socialGeneral}>Minhas redes</p>
      </div>
      <div className={Style.mediaContainer}>
        <div className={Style.linkContainer}>
            <LinkedinLogo size={120} weight="thin" color="#000" />
            <h2 className={Style.socialTitle}>Linkedin</h2>
            <p className={Style.socialDescription}>Rokssane Marina</p>
        </div>
        <div className={Style.linkContainer} >
            <GithubLogo size={120} weight="thin" color="#000"/>
            <h2 className={Style.socialTitle}>GitHub</h2>
            <p>@rokssanemarina</p>
        </div>
        <div className={Style.linkContainer} >
            <TwitterLogo size={120} weight="thin" color="#000"/>
            <h2 className={Style.socialTitle} >Twitter</h2>
            <p className={Style.socialSubitle}>@rokssanemarina</p>
        </div>
        <div className={Style.linkContainer} >
            <InstagramLogo size={120} weight="thin" color="#000"/>
            <h2 className={Style.socialTitle} >Instagram</h2>
            <p>@rokssanemarina</p>
        </div>

      </div>
    </div>
  );
}
