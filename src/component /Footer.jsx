import { Film, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className="h-[308px] py-9 px-9 w-full bg-indigo-700 ">
      <div className="pt-4 text-sm gap-2 flex text-white md:flex ">
        <Film className="w-[16px] h-[16px]" />
        <p>MovieZ</p>
      </div>
      <p className="text-white">© 2024 Movie Z. All Rights Reserved.</p>

      <div className="flex items-center gap-2">
        <div className="py-10 text-sm px-4">
          <p className="text-white"> Contact Information</p>
          <div className="flex items-center gap-2 ">
            <Mail className="text-white w-[16px] h-[16px]" />
            <div className="flex flex-col text-white ">
              <span>Email:</span>
              <span>support@movieZ.com</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <Phone className="text-white w-[16px] h-[16px] " />
            <div className="flex flex-col text-white ">
              <span>Phone:</span>
              <span>+976 (11) 123-4567</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-white text-sm gap-2 pt-4">
          <a>Follow us </a>
          <a>Facebook</a>
          <a>Instagram</a>
          <a>Twitter</a>
          <a>Youtube</a>
        </div>
      </div>
    </div>
  );
};
