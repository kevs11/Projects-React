import Reloj from "../componentes/Reloj/reloj";
import GeneradorTextos from "../componentes/GeneradorTextos/GeneradorTextos";
import GeneradorPalabras from "../componentes/GeneradorPalabras/GeneradorPalabras";
import Contador from "../componentes/Contador/Contador";

const Principal = () =>
        {
            
    return(
    <>
        <header>
            <h1>
                Esta es mi Vista Principal
            </h1>
        
        </header>
        <main>
                <Reloj/>
                <GeneradorTextos/>
                <GeneradorPalabras/>
                <Contador/>
        </main>
        <footer>
                Este es mi pie de Pagina
        </footer>
    </>
    )
  
}


export default Principal;
