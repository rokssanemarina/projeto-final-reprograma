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
            O Brasil teve um aumento significativo em casos de depressão e suícidio nos ultimos anos e principalmente com advento da pandemia as pessoas ficaram mais em casa e isoladas, resultado em desenvolvimento de mudanças abruptas no estado da saúde mental de cada pessoa. 
          </p>
        </div>
        <div className={Style.openContainer} >
            <Coins  className={Style.iconOption} size={120} color="#000" weight="thin" />
            <h1>Acessibilidade Financeira</h1>
          <p>
            Muitas pessoas justificam que não querem fazer alguma consulta com profissional pelo fato de considerar caro ou não acessivel, a pandemia por mais que tenha trago resultados de longo prazo o maior deles é que acessibilidade ganhou um novo significado e por conta disso acabou se permitindo atendimentos via videochamadas. 
          </p>
        </div>
        <div className={Style.openContainer} >
            <Browsers className={Style.iconOption} size={120} color="#000" weight="thin" />
            <h1>Conexão</h1>
          <p>
            Atendimento via zoom,meets ou teams facilitam essa comunicação com os profissionais, para alguns que não se sentem confortavéis com atendimento presencial, o online vem com esse objetivo de atender a demanda e ainda ter um custo benefício mais acessível. 
          </p>
        </div>
      </div>
    </div>
  );
}
