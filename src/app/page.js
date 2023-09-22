import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './page.module.css';

export default function Home() {
	return (
		<>
				<div className="container">
					<div>
						<Image
							layout="fill"
							src="/cantin.jpg"
							alt="Image d'accueil"
							objectFit="contain"
						/>
						<div className={styles.centeredContent}>
							<h1 className={styles.homeH1}>Charles Cantin - Photographe</h1>
						</div>
						
					</div>
				</div>
		</>
	);
}