import Image from "next/image";

export default function About() {
  return (
    <>
      <main className="container">
        <div className="feedback-container">
          <form
            action="https://formspree.io/f/manyjqad" // replace with your unique Formspree URL
            method="POST"
            className="feedback-content"
          >
            <h2 className="feedback-heading">Feedback</h2>
            <p className="feedback-description">We value your feedback! Please share your thoughts below.</p>
            <div className="input-container">
              <label htmlFor="name" className="input-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="input-field"
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="email" className="input-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="input-field"
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="message" className="input-label">Message</label>
              <textarea
                id="message"
                name="message"
                className="input-field textarea-field"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
            <p className="feedback-note">Your feedback is important to us.</p>
          </form>
          </div>
          <section className="profile-section">
          <div className="profile-wrapper">
            <Image width={2000} height={2000} src="/assets/profile.jpeg" alt="Profile" className="profile-image" />
          </div>
        </section>

        <div className="background-image">
          <Image width={1000} height={1000} src="/assets/Vector 3.png" alt="Vector" className="vector-image-contact" />
        </div>
          
        
      </main>
    </>
  );
}
//         <section className="profile-section">
//           <div className="profile-wrapper">
//             <Image width={2000} height={2000} src="/assets/profile.jpeg" alt="Profile" className="profile-image" />
//           </div>
//         </section>

//         <div className="background-image">
//           <Image width={1000} height={1000} src="/assets/Vector 3.png" alt="Vector" className="vector-image-contact" />
//         </div>
//       </main>
//     </>
//   );
// } */}
