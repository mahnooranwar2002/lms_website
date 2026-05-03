import { Heart } from "lucide-react";
import React from "react";

const Footer = () => {
  return (

    <footer className="bg-bannar py-16"> {/* Background bahar hi rahega */}
      <div className="container mx-auto px-5 flex flex-wrap lg:flex-nowrap gap-10">
        {/* Container andar hai, taake content beech mein rahe aur BG poori screen par */}

        {/* About Us Section */}
        <div className="w-full lg:w-4/12">
          <h4 className="text-xl font-bold mb-4 text-gray-800">About Us</h4>
          <p className="text-gray-600 leading-relaxed mb-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            voluptatibus delectus. Nesciunt voluptas dignissimos exercitationem,
            voluptate incidunt in natus assumenda!
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold">Email:</span> edplus@gmail.com
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="font-semibold">Phone:</span> +92-3350312355
            </li>
          </ul>
        </div>

        {/* Khali Divs (Future links ke liye) */}
        <div className="w-full lg:w-4/12">
          <h4 className="text-xl font-bold mb-4 text-gray-800">Quick Links</h4>
          <ul className="text-gray-600 ">
            <li className="my-2">Home</li>
            <li className="my-2">about</li>
            <li className="my-2">Crouses</li>
            <li className="my-2">Conatact</li>
            <li className="my-2">Policies</li>
            <li className="my-2">Policies</li>
          </ul>
        </div>

        <div className="w-full lg:w-4/12">
          <h4 className="text-xl font-bold mb-4 text-gray-800">Newsletter</h4>
          <p className="text-gray-600 mb-6">
            Hamare naye courses aur updates ke liye subscribe karein.
          </p>

          <form className="flex flex-col gap-3">
            <div className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-[#dce1f5] focus:outline-none focus:border-primary transition-all bg-white/50 backdrop-blur-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg hover:bg-primary/75 transition-all shadow-md active:scale-95"
            >
              Subscribe Now
            </button>
          </form>

          {/* Social Icons (Optional but Recommended) */}

        </div>

      </div>
      <div className="container border-t border-[#c5c7c9]  p-5 mx-auto mt-5 flex pt-3 justify-between">
        <img src="/logo.svg" alt="" />
        <h3>Made by <Heart className="inline text-primary fill-primary" size={12} /> <span className="text-primary"> Mahnoor Anwar</span></h3>
      </div>
    </footer>
  );
};

export default Footer;
