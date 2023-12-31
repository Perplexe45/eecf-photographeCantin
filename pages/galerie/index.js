"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './../../src/app/page.module.css';
import Container from "components/Container/Container";
import React, { useState, useEffect } from "react";// Import du hook useState
import { useRouter } from "next/router";
import "./../galerie/galerie.css";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios'; //Pour ne pas recharger la page


export default function Index({ themes }) {
  const [photos, setPhotos] = useState([]); // Déclaration unique de useState
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleButtonClick = (label) => {
    setClickedButton(label);
  };

  const openImageFullScreen = (imageUrl) => {
    // On ouvre la nouvelle fenêtre avec l'image agrandie
    const newWindow = window.open("", "_blank");
    newWindow.document.write(
      `<html><head><title>Image en plein écran</title></head><body style="margin: 0; overflow: hidden; display: flex; justify-content: center; align-items: center;"><img src="${imageUrl}" style="width: 80%; height: 80%; object-fit: contain; cursor: pointer;" onclick="window.close();" title="Cliquez pour fermer" /></body></html>`
    );
  };

  const paddingValue = 8; //pb avec image des petites vignettes

  useEffect(() => { //Utilisation de la bibliothèque axios pour ne pas recharger la page continuellement
    /* axios.get("http://localhost:1337/api/photos/?populate[image][populate]=deep") //Requête de Strapi en local pour les photos. */
    axios.get("https://cantin.onrender.com/api/photos/?populate[image][populate]=deep")
    .then((response) => {
        const data = response.data.data;
        setPhotos(data);
      })
      .catch((error) => {
        console.error(error);
      });
}, []);

  // Photos de la galerie au hasard sinon, ce ne seront que les premières enregistrées
  const shuffledPhotos = [...photos].sort(() => Math.random() - 0.5);

  // Les 20premières photos au hasard, sinon ça fait trop
  const selectedPhotos = shuffledPhotos.slice(0, 20);

    // Filtrer les photos selon la catégorie sélectionnée
    const filteredPhotos = selectedCategory
    ? photos.filter((photo) => photo.category === selectedCategory) //ternaire pour filtrer les catégories de photos
    : photos;


  return (
    <>
      <Container/>
      <div className="container blockGallery pt-5">
        <div className={styles.title}>
          <h1 className="text-center pt-1">Ma galerie de photos</h1>
        </div>
        <br></br>
			  <div className=" subTitle mt-3">
					<h2 className="text-center">Choisir un théme</h2>
				</div>
        
          {/* Bulles bouton des thémes */}
          <div className="cadreBubble">
            <div className="row justify-content-center ">
              <BubbleButton
                label="couple"  
                imageUrl="/couples.png"
                onClick={() => setSelectedCategory("couple")} //fait varier le useState
              />
              <BubbleButton
                label="mariage"
                imageUrl="/mariage.png"
                onClick={() => setSelectedCategory("mariage")}
              />
              <BubbleButton
                label="grossesse"
                imageUrl="/grossesse.png"
                onClick={() => setSelectedCategory("grossesse")}
              />
              <BubbleButton
                label="bebe"
                imageUrl="/bebe.png"
                onClick={() => setSelectedCategory("bebe")}
              />
              <BubbleButton
                label="bapteme"
                imageUrl="/bapteme.png"
                onClick={() => setSelectedCategory("couple")}
              />
              <BubbleButton
                label="portrait"
                imageUrl="/portrait.png"
                onClick={() => setSelectedCategory("portrait")}
              />
              <BubbleButton
                label="famille"
                imageUrl="/famille.png"
                onClick={() => setSelectedCategory("famille")}
              />
              
            </div>
          </div>
       </div>
          

      <div className="container blockGallery">
        <br></br>
				<div className="text-center mt-5 subTitle">
					<h2 >Quelques exemples de mes réalisation</h2>
				</div>

				<div className="row d-flex justify-content-center"> 
          {selectedPhotos.map((photo) => { //Boucle pour afficher chaque photos
            return (
              <div key={photo.id} className="col-md-2 photo-card "
                style={{
                  margin: '10px', // Ajoute de la marge autour de chaque photo
                  padding: `8px 8px ${paddingValue}px`,
                  backgroundColor: '#f0f0f0', // Couleur de fond pour l'encadré des photos
              }} onClick={() =>
                openImageFullScreen(
                  `https://cantin.onrender.com${photo.attributes.image.data.attributes.url}`
                )
              }>  
              <Image 
                src={`https://cantin.onrender.com${photo.attributes.image.data.attributes.url}`}
                alt={photo.attributes.nom}
                width={250} 
                height={250} 
      
              />

              <p className="ms-3 me-3 mb-2 hover-message">Cliquez sur la photo</p>
                 <div className="card">
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      paddingBottom: "100%",
                    }}
                  >
                  </div>
                </div>
              </div>
              );
					})}
				</div>
		</div>
    </>
  );
}

function BubbleButton({ label, imageUrl }) {
  return (
    <Link href={`/listPhoto/${label}`} passHref={true} legacyBehavior={true}>
      <a className="bubble-button gallerie">
        <div className="bubble-content">
          <div className="image-container">
            <Image
              src={imageUrl}
              alt={label}
              layout="fill"
              objectFit="cover"
              className="img-fluid bubble-image"
            />
          </div>
          <p className="bubble-text">{label}</p>
        </div>
      </a>
    </Link>
  );
}