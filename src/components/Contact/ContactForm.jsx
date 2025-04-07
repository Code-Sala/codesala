/* eslint-disable react/prop-types */
import { Mail, Phone, Globe } from "lucide-react";
import ContactImg from "../../assets/img/contact/bg.avif";
import { useState } from "react";
import AlertBox from "../../utils/AlertBox";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [status, setStatus] = useState("Submit");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const validateForm = () => {
    let newErrors = {};

    if (!formData.firstname.trim()) {
      newErrors.firstname = "First name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (formData.phone.trim() && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.requirements.trim()) {
      newErrors.requirements = "Please enter your message";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    if (errors[e.target.name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("Sending...");

    const templateParams = {
      firstname: formData.firstname,
      lastname: formData.lastname,
      email: formData.email,
      phone: formData.phone,
      requirements: formData.requirements,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setMessage({
            type: "success",
            text: "Message Sent Successfully!",
          });

          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            requirements: "",
          });

          setStatus("Submit");
          console.log(formData);

          setTimeout(() => setMessage(null), 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setMessage({
            type: "error",
            text: "Failed to send message. Please contact us via WhatsApp!",
          });
          setStatus("Submit");
          setTimeout(() => setMessage(null), 5000);
        }
      );
  };

  return (
    <>
      <div className="contactform min-h-screen flex items-center justify-center p-6 lg:pt-25 text-black">
        <div className="relative w-full max-w-6xl flex flex-wrap container bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 h-96 md:h-auto">
            <img
              src={ContactImg}
              alt="Contact Background"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800 text-center">
              Contact Us
            </h1>
            <p className="text-gray-600 text-center mt-2">
              Have questions or need assistance? Feel free to reach out to us -
              we&apos;re here to help!
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
                  />
                  {errors.firstname && (
                    <p className="text-red-500 text-sm">{errors.firstname}</p>
                  )}
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
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
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
                ></textarea>
                {errors.requirements && (
                  <p className="text-red-500 text-sm">{errors.requirements}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[1rem] hover:scale-95  transition duration-300 text-white"
              > 
                {status}
              </button>
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
      <div className="contact min-h-[40vh] max-w-9xl mx-auto text-center flex flex-col gap-12 mt-10 mb-10 text-black  py-10">
        <div className="card flex flex-col md:flex-row flex-wrap justify-center gap-6 w-full p-4">
          <ContactCard
            Icon={Mail}
            title="Email us:"
            text="info@codesala.com"
            description="Email us for general queries, including marketing and partnership opportunities."
            link="mailto:info@codesala.com"
          />

          <ContactCard
            Icon={Phone}
            title="Call us:"
            text="+13323226043"
            description="Call us to speak to a member of our team. We are always happy to help."
            link="tel:13323226043"
          />

          <ContactCard
            Icon={Globe}
            title="Support"
            text="Support Center"
            description="Visit our support center for help with any issues you might be facing."
            link="https://support.codesala.com"
          />
        </div>
      </div>
    </>
  );
}
function ContactCard({ Icon, title, text, description, link }) {
  return (
    <div className="w-full sm:w-3/4 md:w-1/3 max-w-sm bg-white flex flex-col items-center text-center rounded-lg shadow-md p-8">
      <div className="mb-3 flex justify-center">
      <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="url(#gradientColors)"
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%" 
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#00AEEF" />
                    <stop offset="50%" stopColor="#892890" />
                    <stop offset="100%" stopColor="#ED1D7E" />
                  </linearGradient>
                </defs>
                <Icon
                  width={18}
                  height={24}
                  stroke="url(#gradient)" // Applying gradient to the icon
                />
              </svg>
        {/* <Icon width={48} height={48} className="text-pink-600" /> */}
      </div>
      <h1 className="text-xl md:text-2xl font-semibold">{title}</h1>
      <p className="text-gray-700 mt-2">{description}</p>
      {link && (
        <a href={link} className="mt-4 text-blue-600 hover:underline">
          {text}
        </a>
      )}
    </div>
  );
}

export default ContactForm;
