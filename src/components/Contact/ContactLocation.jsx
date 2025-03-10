import {House,Phone,Mail} from "lucide-react";
const ContactLocation = () => {
    return (
        <>
        <div className="container_lg pb-30">
        <div className="usa flex gap-35 wrap h-55 container">
            <div className="first flex-1/3">
                <h1 className="pl-12 text-4xl text-center font-bold pt-15">30 N Gould St Ste R
                Sheridan, WY 82801</h1>
            </div>
            <div className="mid flex-1/3 pt-15">
  {/* Address */}
  <div className="address flex gap-4 text-lg font-semibold pb-2 pl-4">
    <House className="text-vibrant-pink w-6 h-6 flex-shrink-0" />
    <div className="flex-1">
      <span>30 N Gould St Ste R, Sheridan</span>
    </div>
  </div>

  {/* Phone */}
  <div className="phone flex items-start gap-4 text-lg font-semibold pb-2 pl-4">
    <Phone className="text-vibrant-pink w-6 h-6 flex-shrink-0" />
    <div className="flex-1">
      <span>+13323226043</span>
    </div>
  </div>

  {/* Email */}
  <div className="mail flex items-start gap-4 text-lg font-semibold pb-2 pl-4">
    <Mail className="text-vibrant-pink w-6 h-6 flex-shrink-0" />
    <div className="flex-1">
      <span>wy@codesala.com</span>
    </div>
  </div>
</div>

            <div className="last flex-1/3 rounded-4x">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.777627707921!2d-106.95747832370346!3d44.79776887107084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5335fabc2a6d206b%3A0x1887ab0668b2495c!2s30%20N%20Gould%20St%20Suite%20R%2C%20Sheridan%2C%20WY%2082801%2C%20USA!5e1!3m2!1sen!2snp!4v1741259448010!5m2!1sen!2snp" width="400" height="200" allowfullscreen="" loading="lazy" className="rounded-3xl rounded-b-2xl"></iframe>
            </div>
        </div>

        <div className="usa gap-35 flex wrap h-55 container">
            <div className="first flex-1/3">
                <h1 className="pl-12 text-4xl font-bold pt-19 text-center">Swayambhu, <br />Kathmandu Nepal</h1>
            </div>
            <div className="mid flex-1/3 pt-15 container">
  {/* Address */}
  <div className="address flex items-start gap-4 text-lg font-semibold pb-2 pl-4">
    <House className="text-vibrant-pink w-6 h-6 flex-shrink-0" />
    <div className="flex-1">
      <h1>BhagwanPau Swyambhu, Nepal</h1>
    </div>
  </div>

  {/* Phone */}
  <div className="phone flex items-start gap-4 text-lg font-semibold pb-2 pl-4">
    <Phone className="text-vibrant-pink w-6 h-6 flex-shrink-0" />
    <div className="flex-1">
      <p>+977-15924442</p>
    </div>
  </div>

  {/* Email */}
  <div className="mail flex items-start gap-4 text-lg font-semibold pb-2 pl-4">
    <Mail className="text-vibrant-pink w-6 h-6 flex-shrink-0" />
    <div className="flex-1">
      <p>np@codesala.com</p>
    </div>
  </div>
</div>

            <div className="last flex-1/3 rounded-4x mt-5">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.4824973222508!2d85.29079377554079!3d27.71434237617856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f2cecf6b75%3A0xd538ce31d215ac5c!2sBhagawan%20Pau!5e1!3m2!1sen!2snp!4v1741258034865!5m2!1sen!2snp" width="400" height="200"  allowfullscreen="" loading="lazy" className="rounded-3xl rounded-b-2xl"></iframe>
            </div>
        </div>
        </div>
        
        </>        
    );
};

export default ContactLocation;
