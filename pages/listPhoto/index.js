import Link from "next/link";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./listPhoto.css";
import { useRouter } from "next/router";

export default function Index({ themes }) {
	const router = useRouter();
	const { id } = router.query;

	const theme = themes.data.find((theme) => theme.attributes.nom === id);
	console.log(theme);

	return (
		<div className="container px-4 py-5">
			<h1 className="text-center">
				Bienvenue sur les photos prises de mes clients.
			</h1>
			<h2>Thème : {theme ? theme.attributes.nom : ""}</h2> {/* ternaire */}
			{/* Affichez les détails spécifiques au thème ici */}
			<div className="row g-3 mt-4"></div>
		</div>
	);
}

export async function getStaticProps() {
	//le chemin est static
	const data = await fetch("http://localhost:1337/api/photos");
	const themes = await data.json(); // Recup des données en format JSON
	

	return {
		props: {
			themes,
		},
	};
}
