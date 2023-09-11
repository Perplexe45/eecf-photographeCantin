import "bootstrap/dist/css/bootstrap.min.css";
import Container from "components/Container/Container";
import React, { useState, useEffect } from "react";// Import du hook useState
import { useRouter } from "next/router";
import "./../gallerie/gallerie.css";
import Image from "next/image";
import Link from "next/link";


export default function Index() {
  const [clickedButton, setClickedButton] = useState(null);
  const [photos, setPhotos] = useState([]); // Déclaration unique de useState

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

  const handleMouseEnter = (event) => {
    const hoverMessage = event.currentTarget.querySelector(".hover-message");
    hoverMessage.style.transform = "translateY(0)";
  };

  const handleMouseLeave = (event) => {
    const hoverMessage = event.currentTarget.querySelector(".hover-message");
    hoverMessage.style.transform = "translateY(100%)";
  };

  useEffect(() => {
    fetch("http://localhost:1337/api/photos/?populate[image][populate]=deep")
      .then((response) => response.json())
      .then((data) => setPhotos(data.data))
      .catch((error) => console.error(error));
  }, []);


  return (
    <>
      <Container />
      <div className="container pt-4 mt-4 ps-5">
        <div className="title-h1">
          <h1 className="text-center">Ma galerie de photos</h1>
        </div>

			  <div className=" subTitle mt-5 ">
					<h2 className="text-center">Choisir un théme</h2>
				</div>
        
          {/* Bulles bouton des thémes */}
          <div className=" ps-3 cadreBubble">
            <div className="row justify-content-center ">
              <BubbleButton
                label="couple"  
                imageUrl="/couples.png"
                onClick={handleButtonClick}
              />
              <BubbleButton
                label="mariage"
                imageUrl="/mariage.png"
                onClick={handleButtonClick}
              />
              <BubbleButton
                label="grossesse"
                imageUrl="/grossesse.png"
                onClick={handleButtonClick}
              />
              <BubbleButton
                label="bebe"
                imageUrl="/bebe.png"
                onClick={handleButtonClick}
              />
              <BubbleButton
                label="bapteme"
                imageUrl="/bapteme.png"
                onClick={handleButtonClick}
              />
              <BubbleButton
                label="portrait"
                imageUrl="/portrait.png"
                onClick={handleButtonClick}
              />
              <BubbleButton
                label="famille"
                imageUrl="/famille.png"
                onClick={handleButtonClick}
              />
              
            </div>
          </div>
       </div>
          

      <div className="container mt-5">
		
				<div className="text-center mb-3 subTitle">
					<h2 >Mes plus belles réalisations</h2>
				</div>

				<div className="row ps-4">

					{photos.map((photo) => {
						return (
							<div key={photo.id} className="col-md-2 mb-4 photo-card"  onClick={() =>
                openImageFullScreen(
                  `http://localhost:1337${photo.attributes.image.data.attributes.url}`
                )
              }
                >  
               <Image 
                  src={`http://localhost:1337${photo.attributes.image.data.attributes.url}`}
                  alt={photo.attributes.nom}
                  width={300} 
                  height={200} 
                />
                <p className="hover-message">Cliquez sur la photo</p>
             
              
              <div className="card">
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "10 0",
                    paddingBottom: "100%",
                  }}
                >
                {photo.attributes.image && (
                    <Image
                      alt={photo.attributes.nom}
                      layout="fill"
                      objectFit="cover"
                      src={`http://localhost:1337${photo.attributes.image.data.attributes.url}`}
                    />
                  )}
                </div>
                <div className="card-body text-center">
                  <p className="card-title">{photo.attributes.nom}</p>
                  <p className="card-text ">{photo.attributes.date}</p>
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