import React from 'react';
import Link from "next/link";
import Image from "next/image";

const BubbleButtons = () => {

  const handleButtonClick = (label) => {
    setClickedButton(label);
  };

  return (
    <div>
      <div className="cadreBubble">
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
  );

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

}

export default BubbleButtons;
