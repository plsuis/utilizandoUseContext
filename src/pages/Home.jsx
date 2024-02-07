import { useDatosContext } from "../componentes/localizador";

function Home(props){
    const { paragraph,title } = useDatosContext();
    console.log('Home ',paragraph,title)
    return (
        <div {...props}>
            <h1>Estou en Home</h1>
             <h1>{title}</h1>
            <p>{paragraph}</p> 
          </div>
      );
}

export{Home}