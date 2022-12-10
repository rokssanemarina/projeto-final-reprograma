import Style from  '../Styles/Components/header.module.css'


export function Header (props){
    return(
    <div className={Style.headerContainer}>
        <h1 className={Style.headerTitle}>{props.title}</h1>
        <p className={Style.headerSubtitle}>{props.subtitle}</p>
        <img className={Style.headerImage} src={props.image}/>
    </div>
    )
}