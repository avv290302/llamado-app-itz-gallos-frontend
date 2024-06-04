export default function Inicio(){

    return(
        <div className="flex flex-col gap-12">
            <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-blue-600">
                    ¿De cuántos gallos será el derby?
                </h1>
                <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                        5 Gallos
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                        7 Gallos
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        10 Gallos
                    </button>
                </div>
            </div>
        </div>
    )
}
