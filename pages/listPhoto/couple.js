import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../gallerie/gallerie.css";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function CouplePage() {
	const [photos, setPhotos] = useState([]);
	const galleryName = "couple";

	useEffect(() => {
		// Récupérer les photos associées à la galerie spécifique
		fetch(`http://localhost:1337/api/images?nom=${galleryName}`)
			.then((response) => response.json())
			.then((data) => setPhotos(data.data))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="container">
			<h1>Photos de la galerie {galleryName}</h1>
			<div className="row">
				{photos.map((photo) => (
					<div key={photo.id} className="col-md-4 mb-4">
						<div className="card">
							<div
								style={{
									position: "relative",
									width: "100%",
									height: "0",
									paddingBottom: "75%",
								}}
							>
								<Image
									src={photo.attributes.url_image}
									alt={photo.attributes.nom}
									layout="fill"
									objectFit="cover"
								/>
							</div>
							<div className="card-body">
								<h5 className="card-title">{photo.attributes.nom}</h5>
								<p className="card-text">{photo.attributes.date}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
