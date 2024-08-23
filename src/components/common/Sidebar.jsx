import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-custom-dark-blue text-white w-64 min-h-screen p-6">
      <img className="text-center text-2xl mb-5" title="Superintendencia de Bancos" src="https://www.sb.gob.do/media/wejckxdm/logo-sb-footer.svg" alt="Logo de la Superintendencia de Bancos"></img>
      <nav className='mt-10'>
        <ul>
          <li className="mb-4">
            <Link to="/admin/entities" className="flex items-center text-white hover:opacity-75"> 
            <span dangerouslySetInnerHTML={{__html: `<svg id='Group_5401' data-name='Group 5401' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24' viewBox='0 0 24 24'><defs><clipPath id='clip-path'><rect id='Rectangle_1726' data-name='Rectangle 1726' width='24' height='24' fill='#d9480f'/></clipPath></defs><g id='Mask_Group_958' data-name='Mask Group 958' clip-path='url(#clip-path)'><path id='home_24' data-name='home 24' d='M12.985,3.118a2.769,2.769,0,0,1,3.572,0l8.309,7.01a2.769,2.769,0,0,1,.984,2.117V24.311A2.154,2.154,0,0,1,23.7,26.465H20a2.154,2.154,0,0,1-2.154-2.154V18.157a.923.923,0,0,0-.923-.923H12.617a.923.923,0,0,0-.923.923v6.155A2.154,2.154,0,0,1,9.54,26.465H5.847a2.154,2.154,0,0,1-2.154-2.154V12.245a2.77,2.77,0,0,1,.984-2.117Z' transform='translate(-2.771 -2.465)' fill='#d9480f'/></g></svg>`}} className="w-6 h-6 mr-2" />
            <span className="ml-2">Inicio</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
