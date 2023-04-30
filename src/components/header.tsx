import React from 'react';
import  Link  from "next/link";

function HEADER() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white">
      <div>
        <img src="logo2.png" alt="Logo" width={75} height={75} />
      </div>
      <nav className="flex items-center">
        <ul className="flex">
          <li className="mx-2">
            <Link href="#Seccion1" className="text-gray-700 hover:text-gray-900">Personal</Link>
          </li>
          <li className="mx-2">
            <Link href="#Seccion2" className="text-gray-700 hover:text-gray-900">Proyecto</Link>
          </li>
          <li className="mx-2">
            <Link href="#Seccion3" className="text-gray-700 hover:text-gray-900">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HEADER;