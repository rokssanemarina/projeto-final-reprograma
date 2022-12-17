import {Header} from '../Components/Header'
import testeImg from '../assets/help-assist.svg'

import Style from '../Styles/Components/encontre.module.css'

const lugares =[
    {
        id: 1,
        nome:'clínica escola UFC ',
        tipo:'presencial',
        custo:'gratuito',
    },
    {
        id:2,
        nome:'Curso de Psicicologia - UECE ',
        tipo:'presencial',
        custo:' gratuito',
    },
    {
        id:3,
        nome:'CAPS- Atendimento psicossocial',
        tipo:'presencial ou online ',
        custo:'gratuito',
    },
    {
        id:4,
        nome:'CAPS- Atendimento psicossocial',
        tipo:'presencial ou online ',
        custo:'gratuito',
    },
]

export function Encontre (){
    return(
        <div>
            <Header title="Não sabe onde achar? A gente te ajuda!"  image={testeImg}/>
            <div className={Style.listaContainer}>
                <h2 className={Style.listaTitle}>Saiba onde encontrar ajuda!</h2>
                <div className={Style.ondeContainer}>
                    {lugares.map(enderecos => {
                        return (
                            <div className={Style.card} key={enderecos.id}>
                                <h1 className={Style.cardTitle}>{enderecos.nome}</h1>
                                <p className={Style.cardType}>{enderecos.tipo}</p>
                                <p className={Style.cardMoney}>{enderecos.custo}</p>
                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}