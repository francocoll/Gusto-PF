import React, { useEffect } from "react";
import styles from "./Home.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { getAllUsers, userLocalLogin, userLogin } from "../../redux/actions";
import Nav from "../NavBar/Nav";
import Carousel from '../Carousel/Carousel'
import Footer from '../Footer/Footer';
import homevideo from '../../assets/homeVideo2.mp4'
import Comentarios from "../Comentarios/Comentarios";


// import { userLogin } from '../../redux/actions';

// import {useEffect} from 'react';
// import Loading from '../Loading/Loading';

const Home = () => {
	const { user, isAuthenticated, } = useAuth0();

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
		<>
			<div>
			<section>
				{/* <div className={styles.container}>
					<div className={styles.home1}>
						<img src={home1} alt="home1" />
					</div>
					<div className={styles.container2}>
						<div>
							<div>
								<img src={homeOurCollection} className={styles.collection} alt='our colection' />
							</div>
							<div className={styles.container3}>

								<video className={styles.video} autoPlay='autoplay' muted loop='loop'>
									<source src={video} type='video/mp4' />

								</video>
								<video className={styles.gif} autoPlay='autoplay' muted loop>
									<source src={gif} type='video/mp4' />
								</video>
								<img className={styles.cuellito} src={neck} alt='cuello' />
							</div>
						</div>
					</div>

				</div> */}
				<video className={styles.video} autoPlay='autoplay' muted loop>
					<source src={homevideo} type='video/mp4' />
				</video>

			</section>

			<section className={styles.sectionCarousel}>

				<Carousel />

			</section>
			<section>
				<h1 style={{ display: 'flex', justifyContent: 'center' }}>Comentarios de nuestros clientes</h1>
				<Comentarios />
			</section>

			<section className={styles.fondoSection}>

				<Footer />
				
			</section>



			</div>
			
			
		</>
	);
};


export default Home;
