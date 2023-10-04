import React, { useState, useEffect } from "react";
import Container from "components/Container/Container";
import BubbleButtons from "components/BubbleButtons";// Import du composant BubbleButton
import "bootstrap/dist/css/bootstrap.min.css";
import "../galerie/galerie.css";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from './../../src/app/page.module.css'

export default function BaptemePage() {
  const router = useRouter();
  const { id } = router.query;

  const imageWidth = 500;
  const imageHeight = 500;

  const [photos, setPhotos] = useState([]); //Les photos dans un tableau 

  useEffect(() => {
    // Effectue la requête pour obtenir les données des photos depuis l'API de Strapi
    fetch(`https://cantin.onrender.com/api/photos/?populate[image][populate]=deep&filters[nom][$contains]=bapteme`)
      .then((response) => response.json())
      .then((data) => setPhotos(data.data)) //Fait varier le  useState et enregistré dans la variable 'photos'
      .catch((error) => console.error(error));
  }, [id]);

  const openImageFullScreen = (imageUrl) => { //Fonction qui sera lancé lors du onClick 
    const newWindow = window.open("", "_blank");
    newWindow.document.write(
      `<html><head><title>Image en plein écran</title></head><body style="margin: 0; overflow: hidden; display: flex; justify-content: center; align-items: center;"><img src="${imageUrl}" style="width: 80%; height: 80%; object-fit: contain; cursor: pointer;" onclick="window.close();" title="Cliquez pour fermer" /></body></html>`
    );
  };

  return (
    <>
      <Container />

      <div className="container mt-5 pt-5">
        <BubbleButtons></BubbleButtons>
      </div>

      <div className="container blockPhoto pt-3"><div className={styles.title}>
          <h1 className="text-center">Photos de baptèmes</h1>
        </div>

        <div className="row g-0 d-flex justify-content-center">
          {photos.map((photo) => ( //photos -> Récup de la variable du useState grace au fetch
            <div
              key={photo.id}
              className="col-md-3 d-flex cursor-pointer photo-frame"
              onClick={() => openImageFullScreen(`https://cantin.onrender.com${photo.attributes.image.data.attributes.url}`)}
            >
              <div className="photo-frame">
                {photo.attributes.image && photo.attributes.image.data && photo.attributes.image.data.attributes && (
                  <>
                    <div className="image-container">
                      <Image
                        src={`https://cantin.onrender.com${photo.attributes.image.data.attributes.url}`}
                        alt={photo.attributes.nom}
                        width={imageWidth}
                        height={imageHeight}
                        className="photo"
                      />
                        <p className="image-text ms-3 me-3 mb-0 hover-message">Agrandir la photo</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
