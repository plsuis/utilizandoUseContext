import { Proveedorcontexto } from './componentes/proveedorContext';

import { Home } from './pages/Home';
function App() {
  return (
   <Proveedorcontexto>
    <Home />
   </Proveedorcontexto>
    
  );
}


export default App;

/**
 * 
 *  {/* <LocalContext.Provider value={local.en}>
      <Container />
    </LocalContext.Provider> 
 */
