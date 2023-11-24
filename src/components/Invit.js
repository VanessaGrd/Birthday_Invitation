import { useNavigate } from "react-router-dom";
import christine from "../assets/christine.jpg";

export default function Invit() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/src/components/TextInvit.js");
  };
  return (
    <div className="h-full flex flex-col rounded-md justify-center md:rounded-none border-2 bg-hero-pattern bg-cover ">
      <div className="flex flex-col items-center mt-28 px-8 mb-4 ">
        <h1 class="mb-4 text-4xl font-normal text-center leading-tight tracking-tight text-primary-50 font-abc md:text-5xl lg:text-5xl ">Reconnaissez-vous cette jeune fille ?</h1>

        <img className=" shadow-2xl rounded-md w-52 border-8 border-primary-50 md:max-w-1/2 " src={christine} alt="girl" />
      </div>

      <div className="flex justify-around flex-row">
        <button onSubmit={handleSubmit} className="font-abc text-2xl bg-primary-50 text-primary-100 p-2 px-4 shadow-xl rounded-md">
          Oui, <br></br> bien évidemment !
        </button>
        <button onSubmit={handleSubmit} className="font-abc p-2 px-4 text-2xl bg-primary-100 text-primary-50  shadow-xl rounded-md">
          Non, <br></br> j'ai besoin d'aide !
        </button>
      </div>
    </div>
  );
}
