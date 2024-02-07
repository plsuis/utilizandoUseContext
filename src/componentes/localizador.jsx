import React,{useContext} from 'react';
import { LocalContext } from './proveedorContext';

function useDatosContext() {
    const local = useContext(LocalContext);
    return local;
  }

export {
    useDatosContext
}