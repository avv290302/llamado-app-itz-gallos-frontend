import { Link } from "react-router-dom";

type Props = {
    total: number;
    city: string;
}
export default function SearchResultInfo({total, city}: Props) {
    return (
        <div className="text-xl font flex flex-col gap-3 justify-between
        lg:items-center lg:flex-row">

            <span>
                {total} Restaurante(s) encontrado(s) en {city}
                <Link to="/"
                className="ml-2 text-sm font-semibold underline
                cursor-pointer text-blue-500"
                >Cambiar ubicacion</Link>
            </span>
            Agregar componente para ordenar los resultados
        </div>
    )
}