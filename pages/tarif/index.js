import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'components/Container/Container';
import "./tarif.css";
import styles from './../../src/app/page.module.css';



export default function index() {

	return (
		<>
		<Container />
		<div className="container">
		  <div className="container blockGallery">
        <div className="pt-5">
            <div className={styles.title} >
            <h1 className="text-center pb-1">Tarifs et Prestations</h1>
            <p className>Mes services</p>
				</div>
        </div>
      
            
            <div className="row blockGallery">
             <div className="col-md-12">
                <div className="highlighted">
                    <h4 className="text-center bg-light-subtle py-4 ">
                        Comme tout bon photographe qui se respecte, je vous présente mes honoraires.
                        Ils varient selon le thème choisi.
                    </h4>
                </div>
            </div>
	<div className="container blockGallery">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center pb-4">Juste moi</h4>
                            <p className="card-text">Séance pour une personne, en extérieur ou en studio</p>
                            <div className="text-center">
                                <p className="card-text green-background">130 €</p>
                            </div>
                                                
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center pb-4">Pour deux</h4>
                            <p className="card-text">Pour deux personnes, en extérieur ou en studio</p>
                            <div className="text-center pt-4">
                                <p className="card-text green-background">95 €</p>
                            </div>
                                                    
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center pb-4">Famille</h4>
                            <p className="card-text">Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio</p>
                            <div className="text-center">
                                <p className="card-text green-background">220 €</p>
                            </div>
                                                    
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center pb-4">Il était une fois</h4>
                                <p className="card-text">Photo de grossesse (À votre domicile, en extérieur ou en studio)</p>
                                <div className="text-center">
                                    <p className="card-text green-background">160 €</p>
                                </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center pb-4">Mon bébé</h4>
                            <p className="card-text">Photo d’enfant jusqu’à 3 ans (photo à domicile)</p>
                            <div className="text-center pt-4">
                                <p className="card-text green-background">100 €</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center pb-4">J’immortalise l’événement</h4>
                            <p className="card-text">Prestation de mariage ou baptême sur devis</p>
                            <div className="text-center pt-4">
                                <p className="card-text green-background ">Sur mesure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		<div>

		</div>





        </div>

        </div>
		

		

	

	</div>
	</>
	)
}