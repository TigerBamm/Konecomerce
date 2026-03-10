import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaTelegram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-8">
        {/* Shop Cart */}
        <div>
          <h3 className="font-bold mb-4">Cart App</h3>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://example.com"
            alt="QR"
            className="w-28"
          />
        </div>

        {/* Loyalty */}
        <div>
          <h3 className="font-bold mb-4">LOYALTY</h3>
          <p className="flex items-center gap-2">❤️ Membership & Benefits</p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-bold mb-4">FOLLOW US</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaFacebook /> Facebook
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram /> Instagram
            </li>
            <li className="flex items-center gap-2">
              <FaTiktok /> TikTok
            </li>
            <li className="flex items-center gap-2">
              <FaYoutube /> Youtube
            </li>
          </ul>
        </div>

        {/* Customer Services */}
        <div>
          <h3 className="font-bold mb-4">CUSTOMER SERVICES</h3>
          <ul className="space-y-2">
            <li>Online exchange policy</li>
            <li>Privacy Policy</li>
            <li>FAQs & guides</li>
            <li>Find a store</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-4">CONTACT US</h3>
          <ul className="space-y-2">
            <li className="flex gap-2 items-center">
              <FaEnvelope /> customer.care@shopcart.com
            </li>
            <li className="flex gap-2 items-center">
              <FaPhone /> (+855) 085 330 330
            </li>
            <li className="flex gap-2 items-center">
              <FaTelegram /> Telegram
            </li>
          </ul>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <h3 className="font-bold mb-4">WE ACCEPT</h3>

        <div className="flex flex-wrap gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
            className="h-8"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            className="h-8"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/40/JCB_logo.svg"
            className="h-8"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/30/UnionPay_logo.svg"
            className="h-8"
          />
        </div>
      </div>
    </footer>
  );
}
