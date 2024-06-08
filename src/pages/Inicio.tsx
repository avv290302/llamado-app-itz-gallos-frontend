
import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-blue-600">
          ¿De cuántos gallos será el derby?
        </h1>
        <div className="flex justify-center">
          {/* Utilizamos el componente Link para redirigir a las páginas */}
          <Link to="/Gallos/3" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            3 Gallos
          </Link>
          <Link to="/Gallos/4" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            4 Gallos
          </Link>
          <Link to="/Gallos/5" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            5 Gallos
          </Link>
          
        </div>
      </div>
    </div>
  );
}



