import { House, Phone, Mail } from "lucide-react";

const ContactLocation = () => {
  return (
    <div className="container mx-auto pb-16 pt-12 px-4 container_lg">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Location 1 - Sheridan */}
        <div className="w-full max-w-3xl text-start mb-12 shadow-md px-8 py-8">
          <h2 className="text-3xl font-semibold mb-6 text-black">
            30 N Gould St Ste R, <br /> Sheridan, WY 82801
          </h2>
          <div className="flex flex-col items-start mb-8">
            {/* Address */}
            <div className="flex items-center text-lg mb-4">
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
                <House
                  width={18}
                  height={24}
                  stroke="url(#gradient)" // Applying gradient to the icon
                />
              </svg>
              <span className="text-black">30 N Gould St Ste R, Sheridan</span>
            </div>
            {/* Phone */}
            <div className="flex items-center text-lg mb-4">
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
                <Phone
                  width={18}
                  height={24}
                  stroke="url(#gradient)" // Applying gradient to the icon
                />
              </svg>
              <span>
                <a href="tel:+13323226043" className="hover:underline">
                  +13323226043
                </a>
              </span>
            </div>
            {/* Email */}
            <div className="flex items-center text-lg mb-4">
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
                <Mail
                  width={18}
                  height={24}
                  stroke="url(#gradient)" // Applying gradient to the icon
                />
              </svg>
              <span>
                <a href="mailto:wy@codesala.com" className="hover:underline">
                  wy@codesala.com
                </a>
              </span>
            </div>
            {/* Email */}
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
          <h2 className="text-3xl font-semibold mb-6 text-black">
            Swayambhu,
            <br /> Kathmandu, Nepal
          </h2>
          <div className="flex flex-col items-start mb-8 text-black">
            {/* Address */}
            <div className="flex items-center text-lg mb-4">
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
                <House
                  width={18}
                  height={24}
                  stroke="url(#gradient)" // Applying gradient to the icon
                />
              </svg>
              <span>BhagwanPau Swyambhu, Nepal</span>
            </div>
            {/* Phone */}
            <div className="flex items-center text-lg mb-4">
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
                <Phone
                  width={18}
                  height={24}
                  stroke="url(#gradient)" // Applying gradient to the icon
                />
              </svg>
              <span>
                <a href="tel:+977-15924442" className="hover:underline">
                  +977-15924442
                </a>
              </span>
            </div>
            {/* Email */}
            <div className="flex items-center text-lg mb-4">
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
                <Mail
                  width={18}
                  height={24}
                  stroke="url(#gradient)" // Applying gradient to the icon
                />
              </svg>

              <span>
                <a href="mailto:np@codesala.com" className="hover:underline">
                  np@codesala.com
                </a>
              </span>
            </div>
            {/* Email */}
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
