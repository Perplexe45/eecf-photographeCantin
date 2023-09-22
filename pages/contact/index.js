import "bootstrap/dist/css/bootstrap.min.css";
import Container from "components/Container/Container";
import "./contact.css";
import styles from './../../src/app/page.module.css';
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css";
import React, { useRef, useState } from "react";

export default function Contact() {
  const nameForm = useRef();
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Annulation du comportement par défaut du formulaire --> Refresh

    const formData = new FormData(e.target); // Événement du formulaire : soumission

    try {
      const response = await fetch("http://localhost:1337/api/contacts", {
        method: "POST",
        body: JSON.stringify({
          // Création de l'objet JSON pour Strapi
          data: {
            nom: formData.get("nom"), // Récupération du nom des champs du formulaire
            prenom: formData.get("prenom"), // dans la date. Il faut impérativement dans Strapi
            adresse: formData.get("adresse"), // que le nom des propriétés de la collection (BD de Strapi)
            codepostal: formData.get("codepostal"), // soit identique aux noms des inputs du formulaire.
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
      } else {
        setError(
          "Une erreur s'est produite lors de la soumission du formulaire."
        );
        setSubmissionSuccess(false); // Réinitialise le succès de la soumission
      }

      // Définir un délai de 2 secondes avant de réinitialiser le succès de la soumission
      setTimeout(() => {
        setSubmissionSuccess(false);
      }, 2000);
    } catch (error) {
      setError("Une erreur s'est produite. Veuillez réessayer plus tard.");
      setSubmissionSuccess(false); // Réinitialise le succès de la soumission en cas d'erreur
    }
  };  

  return (
    <>
      <Container />
      <div className="container blockGallery pt-5">
        <div className={styles.title}>
          <h1 className="text-center pt-0">Contactez-moi</h1>
        </div>
        {/* <hr className="baliseHR"/> */}
        <div className="d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit} className="customForms p-4 rounded-lg border">
            {/* Nom - prénom */}
            <div className="row g-3 mt-1">
              <div className="col-md-6 col-sm-11 col-10 mx-auto">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
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
              <div className="col-md-6 col-sm-11 col-10 mx-auto">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
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
              <div className="col-md-6 col-sm-11 col-10 mx-auto">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-home"></i>
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
              <div className="col-md-2 col-sm-11 col-10 mx-auto">
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
              <div className="col-md-4 col-sm-11 col-10 mx-auto">
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
              <div className="col-md-5 col-sm-11 col-10 mx-auto">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-phone"></i>
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
              <div className="col-md-7 col-sm-11 col-10 mx-auto">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="E-mail"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="row g-3 mt-1">
              <div className="col-md-12 col-sm-11 col-10 mx-auto">
                <div className="input-group">
                  <span className="input-group-text">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <label htmlFor="Textarea1"></label>
                  <textarea
                    name="message"
                    className="form-control"
                    id="Textarea1"
                    placeholder="Votre message ..."
                    rows="3"
                    required
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
      </div>
    </>
  );
}
