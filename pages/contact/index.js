import "bootstrap/dist/css/bootstrap.min.css";
import Container from "components/Container/Container";
import "./contact.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import React, { useRef, useState } from "react";

export default function Contact() {
	const nameForm = useRef();
	const [apiResponse, setApiResponse] = useState(null);
	const [error, setError] = useState(null);
	const [submissionSuccess, setSubmissionSuccess] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault(); //Annulation du comportement par défaut du formulaire --> Refresh

		const formData = new FormData(e.target); //évènement du formulaire: soumission

		try {
			const response = await fetch("http://localhost:1337/api/contacts", {
				method: "POST",
				body: JSON.stringify({/* création de l'objet JSON pour Strapi */
					data: {
						nom: formData.get("nom"), //Récupération du nom des champs du formulaire
						prenom: formData.get("prenom"), //dans la date. Il faut imperativement dans Strapi
						adresse: formData.get("adresse"), //que le nom des propriétés de la collection (BD de Strapi)
						codepostal: formData.get("codepostal"), //soit identiques aux noms des inputs du formulaire.
						ville: formData.get("ville"),
						telephone: formData.get("telephone"),
						email: formData.get("email"),
						message: formData.get("message"),
					},
				}),
				headers: {
					"Content-Type": "application/json",
				},
			});

			const data = await response.json();
			setApiResponse(data);

			if (response.ok) {
        setSubmissionSuccess(true); // Définit le succès de la soumission
        setError(null); // Efface toute erreur précédente
        // Réinitialise les champs du formulaire
        e.target.reset();

        // Définir un délai de 5 secondes avant de réinitialiser le succès de la soumission
        setTimeout(() => {
          setSubmissionSuccess(false);
        }, 4000);
      } else {
        setError("Une erreur s'est produite lors de la soumission du formulaire.");
        setSubmissionSuccess(false); // Réinitialise le succès de la soumission
      }

		} catch (error) {
      setError("Une erreur s'est produite. Veuillez réessayer plus tard.");
      setSubmissionSuccess(false); // Réinitialise le succès de la soumission en cas d'erreur
    }
	};

	return (
		<>
			<Container></Container>
			<div className="container">
				<div className="title-h1 my-5">
					<h1 className="text-center">Contactez-moi</h1>
				</div>
			</div>

			<div className="container d-flex justify-content-center align-items-center">
				<form onSubmit={handleSubmit} className="custom-form styleForms">
					{/* Nom - prénom */}
					<div className="row g-3 mt-1">
						<div className="col-md-6 col-sm">
							<div className="input-group">
								<span className="input-group-text">
									<span className="fas fa-user"></span>
								</span>
								<input
									type="text"
									name="nom"
									className="form-control"
									placeholder="Nom"
									required
								/>
							</div>
						</div>
						<div className="col-md-6 col-sm">
							<div className="input-group">
								<input
									type="text"
									name="prenom"
									className="form-control"
									placeholder="Prénom"
									required
								/>
							</div>
						</div>
					</div>

					{/* Adresse - CP - Ville */}
					<div className="row g-3 mt-1">
						<div className="col-md-6 col-sm">
							<div className="input-group">
								<span className="input-group-text">
									<span className="fa-sharp fa-solid fa-house"></span>
								</span>
								<input
									type="text"
									name="adresse"
									className="form-control"
									placeholder="Adresse"
									required
								/>
							</div>
						</div>
						<div className="col-md-2 col-sm">
							<div className="input-group">
								<input
									type="text"
									name="codepostal"
									className="form-control"
									placeholder="Code postal"
									required
								/>
							</div>
						</div>
						<div className="col-md-4 col-sm">
							<div className="input-group">
								<input
									type="text"
									name="ville"
									className="form-control"
									placeholder="Ville"
									required
								/>
							</div>
						</div>
					</div>

					{/* Téléphone - Email */}
					<div className="row g-3 mt-1">
						<div className="col-md-5 col-sm">
							<div className="input-group">
								<span className="input-group-text">
									<span className="fa-sharp fa-solid fa-phone"></span>
								</span>
								<input
									type="text"
									name="telephone"
									className="form-control"
									placeholder="Téléphone"
									required
								/>
							</div>
						</div>
						<div className="col-md-7 col-sm">
							<div className="input-group">
								<span className="input-group-text">
									<span className="fa-sharp fa-solid fa-envelope"></span>
								</span>
								<input
									type="email"
									name="email"
									className="form-control"
									placeholder="E-mail"
								/>
							</div>
						</div>
					</div>

					{/* Message */}
					<div className="row g-3 mt-1">
						<div className="col-md-12 col-sm">
							<div className="input-group">
								<span className="input-group-text">
									<span className="fa-sharp fa-solid fa-envelope"></span>
								</span>
								<label htmlFor="Textarea1"></label>
								<textarea
									name="message"
									className="form-control"
									id="Textarea1"
									placeholder="Votre message ..."
									rows="3"
								></textarea>
							</div>
						</div>

						{/* Button */}
						<div className="d-flex justify-content-center align-items-center mt-4">
							<button type="submit" className="formButton text-center">
								Envoyer
							</button>
						</div>
					</div>
				
					{submissionSuccess && (
        <div className="container mt-5">
          <div className="success-message">
            Le message a bien été envoyé !
          </div>
        </div>
      )}
				</form>
				
			</div>

		
			{error && (
        <div className="container mt-4">
          <div className="error-message">{error}</div>
        </div>
      )}
		</>
	);
}
