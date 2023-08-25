import Link from "next/link";
import React from 'react';
import Head from 'next/head';
import Image from 'next/image'; 
import './../../styles/container.css'
import FacebookIcon from '../../public/icons/facebook-f.svg';
import InstagramIcon from '../../public/icons/instagram.svg';


export default function Container({ children }) {
  return (
    <div className="d-flex">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
      </Head>
      <nav className="navbar navbar-dark justify-content-center fixed-top">
        <div className="d-flex flex-column align-items-center justify-content-center">
         <h5 className="text-white mb-3">
            <Image src="/logoCantin.png" alt="logo du photpgraphe" width={110} height={50} />
          </h5>
          <Link href="/" className="navbar-brand mb-1 text-center custom-link">Accueil</Link>
          <Link href="/gallerie" className="navbar-brand mb-1 custom-link">Gallerie</Link>
          <Link href="/contact" className="navbar-brand custom-link">Contact</Link>
          <div className="pt-3">
            <div className="social-icons">
              <a href="https://www.facebook.com"><Image src="/icons/facebook.png" alt="Facebook Icon" width={36} height={36} /></a>
              <a href="https://www.instagram.com"><Image src="/icons/instagram.png" alt="Instagram Icon" width={36} height={36} /></a>
            </div>
        </div>
        </div>
      </nav>
      <div className="flex-grow-1">
        {children}
      </div>
    </div>
  );
}


