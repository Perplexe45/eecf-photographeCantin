"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../styles/container.css";
import FacebookIcon from "../../public/icons/facebook-f.svg";
import InstagramIcon from "../../public/icons/instagram.svg";

export default function Container({ children }) {
	const [collapsed, setCollapsed] = useState(true);

	const toggleNavbar = () => {
		setCollapsed(!collapsed);
	};

	return (
		<div className="d-flex">
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
					integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
					crossOrigin="anonymous"
				/>
			</Head>
			<div className="container blockGallery">
				<nav className="navbar navbar-expand-lg navbar-dark justify-content-center fixed-top">
					<div className="d-flex align-items-center justify-content-between">
						<div className="d-flex mx-3">
							<Image
								src="/logoCantin.png"
								alt="logo du photographe"
								width={110}
								height={50}
								className="logo"
							/>
						</div>

						<div className="d-flex">
							<Link href="/" className="navbar-brand text-center custom-link">
								Accueil
							</Link>
							<Link
								href="/galerie"
								className="navbar-brand text-center custom-link"
							>
								Galerie
							</Link>
							<Link
								href="/tarif"
								className="navbar-brand activetext-center custom-link"
							>
								Tarifs
							</Link>
							<Link href="/contact" className="navbar-brand custom-link">
								Contact
							</Link>
							<Link
								href="https://cantin.onrender.com/admin"
								className="navbar-brand custom-link"
							>
								Connexion
							</Link>
						</div>

						<div className="social-icons ms-2">
							<a href="https://www.facebook.com">
								<Image
									src="/icons/facebook.png"
									alt="Facebook Icon"
									width={36}
									height={36}
								/>
							</a>
							<a href="https://www.instagram.com">
								<Image
									src="/icons/instagram.png"
									alt="Instagram Icon"
									width={36}
									height={36}
								/>
							</a>
						</div>
					</div>
				</nav>
			</div>

			<div className="flex-grow-1">{children}</div>
		</div>
	);
}
