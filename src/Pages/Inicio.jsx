import { Header } from "../Components/Header";
import { Brain, Coins, Browsers } from "phosphor-react";

import Style from "../Styles/Components/inicio.module.css";

export function Inicio() {
  return (
    <div>
      <Header
        title="ponto e vírgula"
        subtitle="ajudando a reescrever sua história"
      />
      <div className={Style.titleContainer}>
        <h1 className={Style.titleName} >O que esse projeto defende ? </h1>
      </div>
      <div className={Style.inicioContainer}>
        <div className={Style.openContainer}>
          <Brain  className={Style.iconOption} size={120} color="#000" weight="thin" />
          <h1 className={Style.causeTitle}>Saúde Mental</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
        <div className={Style.openContainer} >
            <Coins  className={Style.iconOption} size={120} color="#000" weight="thin" />
            <h1>Acessibilidade Financeira</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
        <div className={Style.openContainer} >
            <Browsers className={Style.iconOption} size={120} color="#000" weight="thin" />
            <h1>Conexão</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </p>
        </div>
      </div>
    </div>
  );
}
