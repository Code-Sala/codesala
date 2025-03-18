/* eslint-disable react/prop-types */
import { Mail, Phone, Globe } from "lucide-react";
import ContactImg from "../../assets/img/contact/bg.avif";
import { useState } from "react";
import AlertBox from "../../utils/AlertBox";

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
    setStatus("Sending...");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json().catch(() => ({
        status: "ERROR",
        message: "Invalid JSON response",
      }));

      setMessage({
        type: result.status === "Message Sent" ? "success" : "error",
        text: result.status || "Something went wrong!",
      });

      if (result.status === "Message Sent") {
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          requirements: "",
        });
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setMessage({ type: "error", text: "Error sending message" });
    } finally {
      setStatus("Submit");
      setTimeout(() => setMessage(null), 3000); // Reset message after 3 seconds
    }
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
                className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700 transition duration-300"
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
    </>
  );
}

export default ContactForm;
