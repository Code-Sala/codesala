/* eslint-disable react/prop-types */
import { Mail, Phone, Globe } from "lucide-react";
import ContactImg from "../../assets/img/contact/bg.avif";
import { useState } from "react";
import AlertBox from "../../utils/AlertBox";

function ContactForm() {
  const [status, setStatus] = useState("Submit");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData),
    });
    let result = await response.json();
    setMessage(result.status);
    setStatus("Submit");
    setFormData({ firstname: "", lastname: "", email: "", phone: "", requirements: "" });
    setTimeout(() => setMessage(""), 3000);
  };


    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Something went wrong. Please try again."
        );
      }

      setMessage({
        text: "Your message has been sent successfully!",
        type: "success",
      });

      // Clear the form
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        requirements: "",
      });
    } catch (error) {
      setMessage({ text: error.message, type: "error" });
    }

    setStatus("Submit");

    setTimeout(() => setMessage(""), 3000);
  };

  console.log(import.meta.env.VITE_API_URL);
  console.log(import.meta.env);

  return (
    <>
      <div className="contactform min-h-screen flex items-center justify-center p-6 lg:pt-25">
        <div className="relative w-full max-w-6xl flex flex-wrap container bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <div className="relative w-full md:w-1/2 h-96 md:h-auto">
            <img src={ContactImg} alt="Contact Background" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800 text-center">Contact Us</h1>
            <p className="text-gray-600 text-center mt-2">Have questions or need assistance? Feel free to reach out to us - we&apos;re here to help!</p>
            <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium">First Name</label>
                  <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} className="w-full border p-2 rounded" required />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">Last Name</label>
                  <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} className="w-full border p-2 rounded" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border p-2 rounded" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Requirements</label>
                <textarea name="requirements" value={formData.requirements} onChange={handleChange} className="w-full border p-2 rounded" rows="4" required></textarea>
              </div>
              <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition duration-300">{status}</button>
              {message && <div className="mt-4"><AlertBox message={message} /></div>}
            </form>
          </div>
        </div>
      </div>

      <div className="contact min-h-[40vh] max-w-7xl mx-auto text-center flex flex-wrap gap-4 mt-15 mb-15">
        <div className="card flex flex-col md:flex-row gap-4 w-full">
          <ContactCard Icon={Mail} title="Email us:" text="info@codesala.com" description="Email us for general queries, including marketing and partnership opportunities." link="mailto:info@codesala.com" />
          <ContactCard Icon={Phone} title="Call us:" text="+13323226043" description="Call us to speak to a member of our team. We are always happy to help." link="tel:13323226043"/>
          <ContactCard Icon={Globe} title="Support" text="Support Center" description="Visit our support center for help with any issues you might be facing." />
        </div>
      </div>
    </>
  );
}

function ContactCard({ Icon, title, text, description,link }) {
  return (
    <div className="cards w-full md:w-1/3 bg-white h-64 flex flex-col justify-center items-center rounded-lg shadow-md">
      <div className="icons p-5 text-center flex justify-center">
        <Icon width={40} height={40} className="text-pink-600" />
      </div>
      <h1 className="text-center text-2xl pt-4 font-semibold">{title}</h1>
      <p className="paragraph text-center mt-4 mb-4">{description}</p>
      <a href={link} className="pt-2 text-gray-700 no-underline">{text}</a>
    </div>
  );
}

export default ContactForm;
