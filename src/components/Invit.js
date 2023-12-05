import { Link } from "react-router-dom";
import christine from "../assets/christine.jpg";

export default function Invit() {
  return (
    <div className="h-[100vh] flex flex-col  justify-center md:rounded-none border-2 bg-hero-pattern bg-cover bg-center lg:bg-contain lg:bg-no-repeat lg:bg-secondary-50 lg:items-center">
      <div className="h-[100vh] lg:w-1/3 flex justify-center flex-col ">
        <div className="flex flex-col items-center mb-10 px-8  ">
          <h1 className="mb-4 text-4xl font-normal text-center leading-tight tracking-tight drop-shadow-xl text-primary-50 font-abc ">Reconnaissez-vous cette jeune fille ?</h1>

          <img className=" shadow-2xl rounded-md w-52 border-8 border-primary-50 md:max-w-1/2 " src={christine} alt="girl" />
        </div>

        <div className="flex  justify-between flex-row lg:flex-row w-full px-4 ">
          <Link className="font-abc text-xl text-center flex items-center  bg-primary-50 justify-center text-primary-100 p-2 shadow-xl rounded-md" to="/invitation">
            Oui, <br></br> bien évidemment
          </Link>
          <Link className="font-abc p-2 px-4 text-xl flex items-center text-center bg-primary-100 text-primary-50  shadow-xl rounded-md justify-center" to="/aide">
            Non, <br></br> j'ai besoin d'aide
          </Link>
        </div>
      </div>
    </div>
  );
}
