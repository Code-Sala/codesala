import { Mail, Phone, Globe } from "lucide-react";

function ContactForm() {
  return (
    <>
    <div className="contactform min-h-screen flex items-center justify-center p-6 pt-30">
      <div className="relative w-full max-w-6xl flex flex-wrap bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-96 md:h-auto">
          <img
            src="../src/assets/img/contact/bg.avif"
            alt="Contact Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center ">
          <h1 className="text-3xl font-bold text-gray-800 text-center">Contact Us</h1>
          <p className="text-gray-600 text-center mt-2">
            "Have questions or need assistance? Feel free to reach out to us - we’re here to help!"
          </p>
          <form className="space-y-4 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium">First Name</label>
                <input type="text" className="w-full border p-2 rounded" required />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">Last Name</label>
                <input type="text" className="w-full border p-2 rounded" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input type="email" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Phone</label>
              <input type="tel" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Requirements</label>
              <textarea className="w-full border p-2 rounded" rows="4"></textarea>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-700">
                By submitting, I confirm my acceptance of the
                <a href="#" className="text-pink-600"> T&C </a> and
                <a href="#" className="text-pink-600"> privacy policy</a>.
              </label>
            </div>
            <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded hover:bg-pink-700">
              Submit
            </button>
          </form>   
        </div>
      </div>

    </div>


<div className="contact min-h-[40vh] max-w-7xl mx-auto text-center wrape pt-4 flex flex-wrap gap-4">
<div className="card flex flex-col md:flex-row gap-4 w-full">
  <div className="cards w-full md:w-1/3 bg-white h-64 flex flex-col justify-center items-center rounded-lg">
    <div className="icons p-5 font-extrabold pb-0 text-center flex justify-center ">
      <Mail className="text-center text-vibrant-pink h-[30px]" />
    </div>
    <h1 className="text-center text-2xl pt-4 font-semibold">Email us:</h1>
    <p className="paragraph text-center mt-4 mb-4">Email us for general queries, including marketing <br /> and partnership opportunities.</p>
    <a href="#" className="link pt-2 text-vibrant-pink no-underline">codesalaofficial@gmail.com</a>
  </div>
  <div className="cards w-full md:w-1/3 bg-white h-64 flex flex-col justify-center items-center rounded-lg">
    <div className="icons p-5 pb-1 text-vibrant-pink text-center flex justify-center ">
      <Phone className="text-center" />
    </div>
    <h1 className="text-center text-2xl pt-4 font-semibold">Call us:</h1>
    <p className="paragraph text-center mt-4 mb-4">Call us to speak to a member of our team. We are always happy to help.</p>
    <a href="#" className="link pt-2 text-vibrant-pink no-underline">+1 (646) 786-5060</a>
  </div>
  <div className="cards w-full md:w-1/3 bg-white h-64 flex flex-col justify-center items-center rounded-lg">
    <div className="icons p-5 pb-1 text-vibrant-pink no-underline text-center flex justify-center ">
      <Globe className="text-center" />
    </div>
    <h1 className="text-center text-2xl pt-4 font-semibold">Support</h1>
    <p className="paragraph text-center mt-4 mb-4">Email us for general queries, including marketing <br /> and partnership opportunities.</p>
    <a href="#" className="link pt-2 text-vibrant-pink border-2 no-underline border-vibrant-pink p-3 mt-6">Support Center</a>
  </div>
</div>
</div>
</>
  );
}

export default ContactForm;
