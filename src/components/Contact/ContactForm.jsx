import { Mail, Phone, Globe } from "lucide-react";
import ContactImg from "../../assets/img/contact/bg.avif"
function ContactForm() {
  return (
    <>
    <div className="contactform min-h-screen flex items-center justify-center p-6 lg:pt-25">
      <div className="relative w-full max-w-6xl flex flex-wrap container bg-gray-100  shadow-[0_-2px_5px_rgba(0,0,0,0.3)] rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-96 md:h-auto">
          <img
            src= {ContactImg}
            alt="Contact Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center ">
          <h1 className="text-3xl font-bold text-gray-800 text-center">Contact Us</h1>
          <p className="text-gray-600 text-center mt-2">
            &quot;Have questions or need assistance? Feel free to reach out to us - we’re here to help!&quot;
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
            <button type="submit" className="w-full animated-gradient-btn text-white py-2 rounded hover:bg-pink-700">
              Submit
            </button>
          </form>   
        </div>
      </div>

    </div>


<div className="contact min-h-[40vh] max-w-7xl mx-auto text-center wrape pt-4 flex flex-wrap gap-4 mt-15 mb-15">
<div className="card flex flex-col md:flex-row gap-4 w-full">
  <div className="cards w-full md:w-1/3 bg-white h-64 flex flex-col justify-center items-center rounded-lg">
    <div className="icons p-5 font-extrabold pb-0 text-center flex justify-center ">
    <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   stroke="url(#gradientColors)">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00AEEF" /> 
      <stop offset="50%" stopColor="#892890" /> 
      <stop offset="100%" stopColor="#ED1D7E" />  
      
        </linearGradient>
      </defs>
      <Mail
        width={24}
        height={24}
        stroke="url(#gradient)"  // Applying gradient to the icon
      />
    </svg>
    </div>
    <h1 className="text-center text-2xl pt-4 font-semibold">Email us:</h1>
    <p className="paragraph text-center mt-4 mb-4">Email us for general queries, including marketing <br /> and partnership opportunities.</p>
    <a href="#" className="link pt-2 text-vibrant-pink\ no-underline" style={{color:"gray"}}>info@codesala.com</a>
  </div>
  <div className="cards w-full md:w-1/3 bg-white h-64 flex flex-col justify-center items-center rounded-lg">
    <div className="icons p-5 pb-1 text-vibrant-pink text-center flex justify-center ">
    <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   stroke="url(#gradientColors)">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00AEEF" /> 
      <stop offset="50%" stopColor="#892890" /> 
      <stop offset="100%" stopColor="#ED1D7E" />  
      
        </linearGradient>
      </defs>
      <Phone
        width={24}
        height={24}
        stroke="url(#gradient)"  // Applying gradient to the icon
      />
    </svg>
    </div>
    <h1 className="text-center text-2xl pt-4 font-semibold">Call us:</h1>
    <p className="paragraph text-center mt-4 mb-4">Call us to speak to a member of our team. We are always happy to help.</p>
    <a href="#" className="link pt-2 text-vibrant-pink no-underline" style={{color:"gray"}}>+13323226043</a>
  </div>
  <div className="cards w-full md:w-1/3 bg-white h-64 flex flex-col justify-center items-center rounded-lg">
    <div className="icons p-10 pb-1 text-vibrant-pink no-underline text-center flex justify-center ">
    <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   stroke="url(#gradientColors)">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00AEEF" /> 
      <stop offset="50%" stopColor="#892890" /> 
      <stop offset="100%" stopColor="#ED1D7E" />  
      
        </linearGradient>
      </defs>
      <Globe
        width={24}
        height={24}
        stroke="url(#gradient)"  // Applying gradient to the icon
      />
    </svg>
    </div>
    <h1 className="text-center text-2xl pt-4 font-semibold">Support</h1>
    <p className="paragraph text-center mt-4">Email us for general queries, including marketing <br /> and partnership opportunities.</p>
    <a href="#" className="link pt-2 text-vibrant-pink no-underline  p-3 mt-4" style={{color:"gray"}}  >Support Center</a>
  </div>
</div>
</div>
</>
  );
}

export default ContactForm;
