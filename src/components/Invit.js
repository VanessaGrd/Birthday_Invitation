
import { useNavigate } from "react-router-dom";

export default function Invit() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/src/components/TextInvit.js");
  };
  return (
    <div className="h-full justify-between flex  flex-col rounded-2xl border-2 	bg-[url('https://i.pinimg.com/564x/10/e3/90/10e390ba435801867da094592ba846ed.jpg')]">
      <div className="flex flex-col items-center justify-center mt-28 mr-8 ">
        <p className="mb-4 font-medium text-xl text-center  font-abc p-2 rounded-xl text-primary-50">
          {" "}
          Reconnaissez-vous <br></br>cette petite fille ?
        </p>{" "}
        <img className="w-32 h-32 rounded-full shadow-2xl  " src="https://cdn.pixabay.com/photo/2015/06/12/21/54/child-807533_640.jpg" alt="girl" />
      </div>
     
        <div className="flex justify-between w-full  flex-row mb-20 px-4">
          <button onSubmit={handleSubmit} className="font-abc text-xl text-primary-50 bg-primary-100 p-2 shadow-xl rounded-lg">
            Oui <br></br> bien sûr !
          </button>
          <button onSubmit={handleSubmit} className="font-abc p-2 text-xl text-primary-50 bg-primary-100 shadow-xl rounded-lg">
            Non <br></br>j'ai besoin d'aide !
          </button>
        </div>
      </div>
  );
}
