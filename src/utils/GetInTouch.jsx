import { FaWhatsapp } from "react-icons/fa";

function GetInTouch() {
  return (
    <div className="fixed right-5 bottom-25 z-90">
      <div className="bg-white rounded-full hover:scale-90">
        <a
          href="https://wa.me/9841255592"
          className="p-2 flex items-center justify-center"
        >
          <svg width="40" height="40" viewBox="0 0 16 16">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00AEEF" />
                <stop offset="50%" stopColor="#892890" />
                <stop offset="100%" stopColor="#ED1D7E" />
              </linearGradient>
            </defs>
            <FaWhatsapp
              width={24}
              height={24}
              style={{ fill: "url(#gradient)" }}
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default GetInTouch;
