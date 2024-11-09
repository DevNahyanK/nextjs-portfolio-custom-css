import Image from "next/image";

export default function About() {
  return (
    <>
      <main className="container">
        <div className="content-box">
          <h2 className="heading-text heading-text-lg">
             Muhmmmad Nahyan Khan
          </h2>

          <p className="description-about">
            I am a Front-End Developer and Typescript building and designing websites and web apps from scratch.
            Html, CSS, Bootstrap, Javascript, Typescript, React.js, Next.js, and Python are the fields of my expertise.
            I also deal with servers.
          </p>

          <div className="info-grid info-grid-lg">
            <div>
              <div className="info-title">Age:</div>
              <div className="info-content">18</div>
            </div>
            <div>
              <div className="info-title">Email:</div>
              <div className="info-content info-content-break">nahyangaming789@gmail.com</div>
            </div>
            <div>
              <div className="info-title">Phone:</div>
              <div className="info-content">+923308487967</div>
            </div>
            <div>
              <div className="info-title">Address:</div>
              <div className="info-content">Karachi, Pakistan</div>
            </div>
            <div>
              <div className="info-title">Status:</div>
              <div className="info-content">Available</div>
            </div>
          </div>
        </div>

        <section className="profile-section">
          <div className="profile-wrapper">
            <Image width={2000} height={2000} src="/assets/profile.jpeg" alt="Profile" className="profile-image" />
          </div>
        </section>

        <div className="background-image">
          <Image width={1000} height={1000} src="/assets/Vector 3.png" alt="Vector" className="vector-image-about" />
        </div>
      </main>
    </>
  );
}
