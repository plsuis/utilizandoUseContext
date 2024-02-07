import React,{createContext} from 'react';
import { local } from '../datos/constantes';

export const LocalContext = createContext(local.es); // inicializo

function Proveedorcontexto({children}){
    
    return (
        <LocalContext.Provider value={local.en}>
            {children}
        </LocalContext.Provider>
    )
}

export{
    Proveedorcontexto
}