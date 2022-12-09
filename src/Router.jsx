import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Menu} from './Components/Menu'

import {Inicio} from './Pages/Inicio'
import {Sobre} from './Pages/Sobre'
import {Encontre} from './Pages/Encontre'
import { Ajuda} from './Pages/Ajuda'



export function ApplicationRoutes (){
    return (
        <BrowserRouter>
        <Menu/>
        <Routes>
            <Route path="/" element ={<Inicio/>}/>
            <Route path="/sobre" element ={<Sobre/>}/>
            <Route path="/encontre" element ={<Encontre/>}/>
            <Route path="/ajuda" element ={<Ajuda/>}/>
        </Routes>
        </BrowserRouter>
    )
}