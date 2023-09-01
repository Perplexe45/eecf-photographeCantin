import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../gallerie/gallerie.css";

export default function CouplePage() {
	// Contenu de la page

	return (
		<div className="container px-4 py-5">
			<div className="title-h1">
				<h1 className="text-center">Mes photos de mariage.</h1>
			</div>

			{/* Affichez les détails spécifiques au thème ici */}
			<div className="row g-3 mt-4"></div>
		</div>
	);
}
