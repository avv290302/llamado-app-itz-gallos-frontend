export default function Footer() {
    return (
      <div className="bg-blue-500 py-10">
        <div className="container mx-auto flex flex-col
  md:flex-row justify-between items-center">
          <span className="text-3xl text-white font-bold tracking-tight">
            AppGallos.com
          </span>
          <span
            className="text-white font-bold tracking-tight
  flex gap-4"
          >
            <span>Politica de privacidad</span>
            <span>Términos del servicio</span>
          </span>
        </div>
      </div>
    )
  }
  