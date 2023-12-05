import warning from "../assets/warning.svg"
import christine2 from "../assets/christine2.jpg";

export default function TextInvit() {
const handleSmsClick = () => {
  const phoneNumber = "06.82.46.68.83"; 
  const message = "Bonjour Vanessa, Je confirme ma présence à la fête d'anniversaire le 16 mars 2024! Signé .... ";
  const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
  window.location.href = smsLink;
};

const handleEmailClick = () => {
  const emailAddress = "vanessa.giraud.lyon@gmail.com"; // 
  const subject = "Réponse pour la fête d'anniversaire";
  const body = "Bonjour Vanessa, Je confirme ma présence à la fête d'anniversaire le 16 mars 2024! Signé ....";
  const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = emailLink;
};
    return (
      <div className="bg-hero-pattern bg-center bg-contain  lg:bg-no-repeat lg:bg-secondary-50 lg:items-center h-full flex justify-around text-center flex-col font-abc px-4 text-primary-50 items-center">
        <h1 className=" text-4xl font-bold  mt-10">Félicitations ! </h1>
        <h2 className="text-2xl font-medium my-4">Il s'agit bien de Christine</h2>
        <img className="w-[70%] md:w-1/3 mb-10" src={christine2} alt="pictureofchristine" />
        <p className="text-2xl font-medium mb-10">Au printemps elle va fêter ses 60 ans ! Nous comptons sur vous pour l'aider à souffler ses bougies.</p>
        <p className="text-2xl ">
          La fête aura lieu le
          <p className="mt-4 mb-6 font-bold text-3xl">
            {" "}
            samedi 16 mars 2024 <br></br>à 12h
          </p>
        </p>
        <div className="flex flex-col justify-center items-center bg-primary-50 p-2 mb-8 rounded-md">
          <img src={warning} alt="warning" className="w-12" />
          <p className="text-2xl font-medium text-primary-100">
            Mais chut ! <br></br>
            <span className="border-b-2 border-primary-100">C'est une surprise, </span>elle n'est pas au courant !{" "}
          </p>
        </div>
        <p className="text-2xl text-center font-medium mb-8 rounded-lg p-2">
          <span className="border-b-2 border-primary-50">Lieu de la fête :</span>
          <br></br>{" "}
          <span>
            Salle du Chevalier <br></br> 27 rue du foyer municipal <br></br>69830 Saint-Georges-de-Reneins
          </span>{" "}
        </p>

        <div className="flex flex-col mb-10">
          <p className="text-2xl mb-4">
            Réponse souhaitée <span className="font-semibold">avant le 20/01/2024</span>
          </p>
          <div className="flex flex-row text-md">
            <button className="bg-primary-50 text-secondary-50 px-2  rounded mr-4" onClick={handleSmsClick}>
              <span className="font-semibold text-lg">
                {" "}
                Cliquez-ici <br></br> pour répondre par SMS
              </span>{" "}
              <br></br>(06.82.46.68.83)
            </button>
            <button className="bg-primary-50 text-secondary-50 px-2  rounded" onClick={handleEmailClick}>
              <span className="font-semibold text-lg">
                Cliquez-ici <br></br> pour répondre par e-mail{" "}
              </span>
              (vanessa.giraud.lyon@gmail.com){" "}
            </button>
          </div>
        </div>
      </div>
    );
}