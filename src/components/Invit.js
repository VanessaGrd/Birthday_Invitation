import { useNavigate } from "react-router-dom";
import christine from "../assets/christine.jpg";

export default function Invit() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/src/components/TextInvit.js");
  };
  return (
    <div className="h-full flex flex-col rounded-2xl justify-center md:rounded-none border-2 bg-hero-pattern bg-cover ">
      <div className="flex flex-col items-center mt-40 px-8 mb-12 ">
        <h1 class="mb-4 text-4xl font-normal text-center leading-tight tracking-tight text-primary-50 font-abc md:text-5xl lg:text-5xl ">Reconnaissez-vous cette jeune fille ?</h1>

        <img className=" shadow-2xl rounded-md w-60 md:max-w-1/2 " src={christine} alt="girl" />
      </div>

      <div className="flex justify-around w-full  flex-col  ">
        <button onSubmit={handleSubmit} className="font-abc text-2xl text-primary-50  p-2 px-4 shadow-xl rounded-lg">
          Oui, bien sûr !
        </button>
        <button onSubmit={handleSubmit} className="font-abc p-2 px-4 text-2xl text-primary-50  shadow-xl rounded-lg">
          Non, j'ai besoin d'aide !
        </button>
      </div>
    </div>
  );
}
