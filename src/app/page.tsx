import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaDownload, FaPhone } from "react-icons/fa";


export default function Home() {
  return (
    <>
      <main className="container">
        <div className="content">
          <h1 className="title">
            HELLO I AM <br />
            <span className="name">Muhammad Nahyan Khan</span>
          </h1>
          <p className="description">
          FRONT END DEVELOPER, NEXT JS & TYPESCRIPT DEVELOPER
          </p>

          <div className="social-icons">
            <a href="https://github.com/DevNahyanK" target="_blank" rel="noopener noreferrer" className="icon">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-nahyan-khan-13b0022bb" target="_blank" rel="noopener noreferrer" className="icon">
              <FaLinkedin size={30} />
            </a>
            
            <a href="https://www.facebook.com/nahyan.khan.24?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="icon">
              <FaFacebook size={30} />
            </a>
          </div>

          <div className="cta-buttons">
            <Link href="\assets\NAHYAN_RESUME.pdf" className="btn resume-btn">
              <span className="text">RESUME </span>
              <FaDownload size={20} />
            </Link>
            <Link href="/contact" className="btn contact-btn">
              <span className="text">Contact</span>
              <FaPhone size={20} />
            </Link>
          </div>
        </div>

        <section className="profile-section">
          <div className="profile-wrapper">
            <Image width={2000} height={2000} src="/assets/profile.jpeg" alt="Profile" className="profile-image" />
          </div>
        </section>

        <div className="background-image">
          <Image width={1000} height={1000} src="/assets/Vector 3.png" alt="Vector" className="vector-image" />
        </div>
      </main>
    </>
  );
}
