import React from "react";
import { Facebook, Twitter, WhatsApp } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <footer className="bg-lime-300 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <p className="text-gray-800 text-sm">
            &copy; {new Date().getFullYear()} Amantes de plantas. Todos os
            direitos reservados.
          </p>
        </div>
        <div className="flex space-x-2">
          <a
            href="https://www.facebook.com/your-facebook-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="text-blue-600 h-6 w-auto" />
          </a>
          <a
            href="https://twitter.com/your-twitter-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="text-blue-400 h-6 w-auto" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp className="text-green-500 h-6 w-auto" />
          </a>
        </div>
      </div>
      <div className="container mx-auto mt-4">
        <p className="text-sm text-gray-600">
          Isenção de responsabilidade: as informações fornecidas neste site são
          apenas para fins informativos gerais. Não deve ser considerado um
          conselho profissional. Consulte um especialista em plantas antes de
          implementar quaisquer práticas de jardinagem ou dicas de cuidados com
          as plantas mencionadas aqui.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
