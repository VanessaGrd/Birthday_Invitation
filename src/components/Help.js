import { Link } from "react-router-dom";

export default function Help() {
  return (
    <div className="h-[100vh] flex flex-col  justify-around md:rounded-none  bg-hero-pattern bg-cover bg-center lg:bg-no-repeat lg:bg-secondary-50 items-center lg:bg-contain font-abc text-2xl text-primary-50 p-8">
      <h2 className="font-semibold">Quelques indices...</h2>

      <ul className="px-4  font-medium list-disc ">
        <li>Je suis née le jour du printemps.</li>
        <li>Je suis mariée depuis 37 ans ! </li>
        <li>J'ai 2 enfants et 2 petits-enfants que j'aime.</li>
        <li>Ma destination préférée est l'île de Beauté.</li>
      </ul>

      <img
        className="w-[80%] lg:w-1/3 rounded-md shadow-xl"
        src="https://www.lalibre.be/resizer/6LH9_Rggn7bkANfSwK7CB--TTxo=/1200x800/filters:format(jpeg):focal(465x240:475x230)/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/GF2TL66HZNACFKHZJJZV6GD4BI.jpg"
        alt="lepers"
      />

      <Link className="bg-primary-50 text-primary-100 p-2 rounded-full font-medium" to="/invitation">
        Vérifier ma réponse
      </Link>
    </div>
  );
}
