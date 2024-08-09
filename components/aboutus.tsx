import Member from "./member";

const AboutUs = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-3xl md:text-5xl tracking-tight">
          De la conception à la réalisation,{" "}
          <strong className="text-yellow-300">
            Intuitive Design apporte une approche globale et une vision à 360°
            pour vous accompagner dans toutes les étapes de vos projets de
            communication.
          </strong>
           Plus de 50 clients nous font confiance. Alors pourquoi pas vous !
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our Team</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <Member
            id="hassan"
            name="Hassan"
            socialId="@hassan123"
            link="https://github.com/hassan"
          />
          <Member
            id="khadija"
            name="Khadija"
            socialId="@Khadija5651"
            link="https://github.com/khadija"
          />
          <Member
            id="maryam"
            name="Maryam"
            socialId="@maryam852"
            link="https://github.com/maryam"
          />
          <Member
            id="mohammed"
            name="Mohammed"
            socialId="@mohammed6"
            link="https://github.com/mohammed"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
