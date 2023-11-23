import { useNavigate } from "react-router-dom";
import deco from "../assets/illu.svg";

export default function Invit() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/src/components/TextInvit.js");
  };
  return (
    <div className="h-full flex justify-around items-center bg-secondary-100 flex-col rounded-2xl md:rounded-none border-2 ">
      <img className="w-auto md:w-1/3 px-6" src={deco} alt="deco" />
      <div className="flex flex-col items-center justify-center px-8">
        <h1 class="mb-4 text-4xl font-normal text-center leading-tight tracking-tight text-gray-600 font-abc md:text-5xl lg:text-5xl ">Reconnaissez-vous cette petite fille ?</h1>

        <img className=" shadow-2xl md:w-1/2 " src="https://cdn.pixabay.com/photo/2015/06/12/21/54/child-807533_640.jpg" alt="girl" />
      </div>

      <div className="flex justify-around w-full  flex-row mb-20  ">
        <button onSubmit={handleSubmit} className="font-abc text-3xl text-gray-600 bg-secondary-150 p-2 px-4 shadow-xl rounded-lg">
          Oui, <br></br>bien sûr !
        </button>
        <button onSubmit={handleSubmit} className="font-abc p-2 px-4 text-3xl text-gray-600 bg-primary-100 shadow-xl rounded-lg">
          Non, <br></br>j'ai besoin d'aide !
        </button>
      </div>
    </div>
  );
}
