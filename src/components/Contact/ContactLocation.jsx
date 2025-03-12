import { House, Phone, Mail } from "lucide-react";

const ContactLocation = () => {
  return (
    <div className="container mx-auto pb-16 pt-12 px-4">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Location 1 - Sheridan */}
        <div className="w-full max-w-3xl text-start mb-12 shadow-md px-8 py-8">
          <h2 className="text-4xl font-semibold mb-6">30 N Gould St Ste R, <br /> Sheridan, WY 82801</h2>
          <div className="flex flex-col items-start mb-8">
            {/* Address */}
            <div className="flex items-center text-lg mb-4">
              <House className="text-vibrant-pink w-6 h-6 mr-3" />
              <span>30 N Gould St Ste R, Sheridan</span>
            </div>
            {/* Phone */}
            <div className="flex items-center text-lg mb-4">
              <Phone className="text-vibrant-pink w-6 h-6 mr-3" />
              <span>+13323226043</span>
            </div>
            {/* Email */}
            <div className="flex items-center text-lg mb-4">
              <Mail className="text-vibrant-pink w-6 h-6 mr-3" />
              <span>wy@codesala.com</span>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.777627707921!2d-106.95747832370346!3d44.79776887107084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a6d206b%3A0x1887ab0668b2495c!2s30%20N%20Gould%20St%20Suite%20R%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e1!3m2!1sen!2snp!4v1741259448010!5m2!1sen!2snp"
            width="100%"
            height="300"
            allowfullscreen=""
            loading="lazy"
            className="rounded-lg mt-6"
          ></iframe>
        </div>

        {/* Location 2 - Kathmandu */}
        <div className="w-full max-w-3xl text-start shadow-md px-8 py-8 mb-12">
          <h2 className="text-4xl font-semibold mb-6">Swayambhu,<br/> Kathmandu, Nepal</h2>
          <div className="flex flex-col items-start mb-8">
            {/* Address */}
            <div className="flex items-center text-lg mb-4">
              <House className="text-vibrant-pink w-6 h-6 mr-3" />
              <span>BhagwanPau Swyambhu, Nepal</span>
            </div>
            {/* Phone */}
            <div className="flex items-center text-lg mb-4">
              <Phone className="text-vibrant-pink w-6 h-6 mr-3" />
              <span>+977-15924442</span>
            </div>
            {/* Email */}
            <div className="flex items-center text-lg mb-4">
              <Mail className="text-vibrant-pink w-6 h-6 mr-3" />
              <span>np@codesala.com</span>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.4824973222508!2d85.29079377554079!3d27.71434237617856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f2cecf6b75%3A0xd538ce31d215ac5c!2sBhagawan%20Pau!5e1!3m2!1sen!2snp!4v1741258034865!5m2!1sen!2snp"
            width="100%"
            height="300"
            allowfullscreen=""
            loading="lazy"
            className="rounded-lg mt-6 md:-mt-5 lg:mt-5"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
