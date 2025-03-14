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

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formData),
    });

    let result = await response.json();
    setMessage(result.status);
    setStatus("Submit");

    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      requirements: "",
    });

    setTimeout(() => setMessage(""), 3000);
  };

  return (
    <>
      <div className="contactform min-h-screen flex items-center justify-center p-6 lg:pt-25">
        <div className="relative w-full max-w-6xl flex flex-wrap container bg-gray-100 shadow-[0_-2px_5px_rgba(0,0,0,0.3)] rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 h-96 md:h-auto">
            <img
              src={ContactImg}
              alt="Contact Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800 text-center">
              Contact Us
            </h1>
            <p className="text-gray-600 text-center mt-2">
              &quot;Have questions or need assistance? Feel free to reach out
              to us - we&apos;re here to help!&quot;
            </p>
            <form className="space-y-4 mt-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Requirements
                </label>
                <textarea
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition duration-300"
              >
                {status}
              </button>

              {/* Show Success Message */}
              {message && (
                <div className="mt-4">
                  <AlertBox message={message} />
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="contact min-h-[40vh] max-w-7xl mx-auto text-center flex flex-wrap gap-4 mt-15 mb-15">
        <div className="card flex flex-col md:flex-row gap-4 w-full">
          {[
            { Icon: Mail, title: "Email us:", text: "info@codesala.com" },
            { Icon: Phone, title: "Call us:", text: "+13323226043" },
            { Icon: Globe, title: "Support", text: "Support Center" },
          ].map(({ Icon, title, text }, index) => (
            <div
              key={index}
              className="cards w-full md:w-1/3 bg-white h-64 flex flex-col justify-center items-center rounded-lg"
            >
              <div className="icons p-5 text-center flex justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00AEEF" />
                      <stop offset="50%" stopColor="#892890" />
                      <stop offset="100%" stopColor="#ED1D7E" />
                    </linearGradient>
                  </defs>
                  <Icon width={24} height={24} stroke={`url(#gradient-${index})`} />
                </svg>
              </div>
              <h1 className="text-center text-2xl pt-4 font-semibold">{title}</h1>
              <p className="paragraph text-center mt-4 mb-4">
                {title === "Email us:"
                  ? "Email us for general queries, including marketing and partnership opportunities."
                  : "Call us to speak to a member of our team. We are always happy to help."}
              </p>
              <a href="#" className="link pt-2 text-gray-700 no-underline">
                {text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ContactForm;
