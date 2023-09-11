import Image from "next/image";
import "../app/page.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
	return (
		<>
			<div className="container px-5 pt-5">
				<div className="fullscreen-image">
					<Image
						layout="responsive"
						src="/cantin.jpg"
						alt="Image d'accueil"
						width={500}
						height={500}
					/>
					<div className="centered-content">
						<h1>Charles Cantin - Photographe</h1>
					</div>
				</div>
			</div>
		</>
	);
}
