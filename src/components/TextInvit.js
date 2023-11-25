import warning from "../assets/warning.svg"
import christine2 from "../assets/christine2.jpg";

export default function TextInvit() {

    return (
      <div className="bg-hero-pattern bg-cover h-full flex justify-around text-center flex-col font-abc px-4 text-primary-50 items-center">
        <h1 className=" text-4xl font-bold  mt-10">Félicitations ! </h1>
        <h2 className="text-2xl font-medium my-4">Il s'agit bien de Christine</h2>
        <img className="w-1/2 md:w-1/3 mb-10" src={christine2} alt="pictureofchristine" />
        <p className="text-2xl font-medium mb-10">Au printemps prochain elle va fêter ses 60 ans ! Nous commptons sur vous pour l'aider à souffler ses bougies.</p>
        <p className="text-2xl ">
          La fête aura lieu
          <p className="mt-4 mb-6 font-bold text-2xl">le samedi 16 mars 2023 à 12h</p>
        </p>
        <div className="flex flex-col justify-center items-center bg-primary-50 p-2 mb-8 rounded-md">
          <img src={warning} alt="warning" className="w-20" />
          <p className="text-2xl font-semibold text-primary-100">
            Mais chut ! <br></br>
            <span className="border-b-4 border-primary-100">C'est une surprise, </span>elle n'est pas au courant !{" "}
          </p>
        </div>
        <p className="text-xl text-center font-medium mb-8">
          <span className="border-b-2 border-primary-50">Lieu de la fête :</span>
          <br></br>{" "}
          <span>
            Salle du Chevalier <br></br> 27 rue du foyer municipal <br></br>69830 Saint-Georges-de-Reneins
          </span>{" "}
        </p>

        <p className="text-xl mb-10">
          {" "}
          <span className="font-bold"> Réponse souhaitée avant le 20/01/2024 </span>
          <br></br>
          <span className="text-xl">au 06.82.46.68.83 ou vanessa.giraud.lyon@gmail.com</span>{" "}
        </p>
      </div>
    );
}