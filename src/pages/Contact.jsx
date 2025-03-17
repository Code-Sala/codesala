import ContactForm from "../components/Contact/ContactForm";
import ContactLocation from "../components/Contact/ContactLocation";
// import ContactHero from "../components/Contact/ContactHero"

function Contact() {
  return (
    <div className="bg-white">
      {/* <ContactHero/> */}
      <ContactForm />
      <ContactLocation />
    </div>
  );
}

export default Contact;
