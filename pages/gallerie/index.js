import "bootstrap/dist/css/bootstrap.min.css";
import Container from "components/Container/Container";
import "./../gallerie/gallerie.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Import du hook useState

export default function Index() {
	const [clickedButton, setClickedButton] = useState(null);

	const handleButtonClick = (label) => {
		setClickedButton(label);
	};

	return (
		<>
			<Container />
			<div className="container px-4 mt-5">
				<div className="title-h1 mb-1">
					<h1 className="text-center">Ma galerie de photos</h1>
				</div>

				<div className="mt-5 d-flex flex-column align-items-center">
					<div className="d-flex justify-content-center gallerie">
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
					</div>

					{/* {clickedButton && <h3>Vous avez cliqué sur le bouton : {clickedButton}</h3>} */}
					<div className="d-flex justify-content-center">
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
					</div>
					<div className="d-flex justify-content-center">
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
