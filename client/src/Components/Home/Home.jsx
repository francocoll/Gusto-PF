import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { getAllUsers, userLocalLogin, userLogin } from "../../redux/actions";
import Nav from "../NavBar/Nav";
import Carousel from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import homevideo from "../../assets/homeVideo2.mp4";
import Comentarios from "../Comentarios/Comentarios";
import { TbTruckDelivery } from 'react-icons/tb'
import { Link } from "react-router-dom";

// import { userLogin } from '../../redux/actions';

// import {useEffect} from 'react';
// import Loading from '../Loading/Loading';

const Home = () => {
	const { user, isAuthenticated } = useAuth0();

	const dispatch = useDispatch();

	const storageLogIn = () => {
		window.localStorage.setItem("userPicture", user.picture);
		window.localStorage.setItem("userName", user.name);
		window.localStorage.setItem("userEmail", user.email);
		window.localStorage.setItem("isLogIn", "Log In");
	};

	//-----Local Storage-----

	if (isAuthenticated) {
		storageLogIn();
	}

	const picture = window.localStorage.getItem("userPicture");
	const name = window.localStorage.getItem("userName");
	const email = window.localStorage.getItem("userEmail");
	const log = localStorage.getItem("isLogIn");

	useEffect(() => {
		dispatch(getAllUsers());
		if (name && email) {
			dispatch(userLogin({ name, email }));
		}
		if (name && email && picture && log) {
			dispatch(userLocalLogin({ picture, name, email, log }));
		}
	}, [dispatch, log]);

	return (
		<div>
			<section className={styles.homeContainer}>
				<div>
					<h1> TE DAMOS LO TUYO, A DOMICILIO.</h1>
					<p>
						{" "}
						Explora nuestras opciones! <br /> ¡Y disfruta de tu comida
						favorita!
					</p>
					<Link to="/menu">
						<button className='btn btn-danger'>VER MENÚ</button>
					</Link>
				</div>
				
			</section>
			<section className={styles.sectionCarousel}>
				<Carousel />
			</section>
			<section>
				<h1
					style={{
						display: "flex",
						justifyContent: "center",
						marginTop: "8.5rem",
					}}
					className={styles.comments}
				>
					GUSTO BURGER CLUB 🔥
				</h1>
				<Comentarios />
			</section>
			<section className={styles.fondoSection}>
				<Footer />
			</section>
		</div>

	);
};

export default Home;
