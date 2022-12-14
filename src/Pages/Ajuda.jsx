import {Header} from '../Components/Header'
import helpImg from '../assets/help-assist.svg'

export function Ajuda (){
    return(
        <div>
        <Header title="essa é a central de ajuda" image={helpImg}/>
        <form> 
            <input type="text" placeholder='coloque o nome do lugar' />
            <input type="text" placeholder='coloque o endereço com numero'/>
            
        </form>
        </div>
    )
}