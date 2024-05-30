   import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hero () {
  return (
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('https://smktibazma.sch.id/static/media/hero-1.2803f83852406277b6cd.jpg')", height: 400 }}
      >
              <h1 className='mb-3'>SMK TI Bazma</h1>
              <h4 className='mb-3'>Merajut Asa, Menjenjak & Menebar Manfaat</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Info
              </a>
            </div>
    </header>
  );
}

export default Hero;