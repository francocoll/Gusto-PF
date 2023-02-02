// import React from "react";
// import "./Card.css";
// import add from '../../assets/addToCart.png'
// import { Link } from "react-router-dom";

import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";



// export default function Card({ id, name, price, description, image, addToCart }) {
// 	const Swal = require("sweetalert2");
// 	// const { isAuthenticated } = useAuth0();
// 	const handleClick = () => {
// 		Swal.fire({
// 			title: 'Producto añadido al carrito!',
// 			confirmButtonColor: 'red'
// 		})
// 	}

// 	return (
// 		<div className="card" >
// 			<div>
// 				<Link to={`/products/${id}`}>
// 					<img src={image} alt="..." />
// 				</Link>
// 			</div>
// 			<div className="card-body">
// 				<h5 className="card-title">{name}</h5>
// 				<p>{description}</p>
// 				<div >
// 					<p><strong>${price}</strong></p>
// 					<button style={{ border: 'none' }} onClick={() => { addToCart(id); handleClick() }}>
// 						<img style={{ width: '9rem' }} src={add} alt='x' />
// 					</button>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

import add from '../../assets/addToCart.png'
import "./Card.css";

export default function CardProduct({ id, name, price, description, image, addToCart }) {
	const Swal = require("sweetalert2");
	const handleClick = () => {
		Swal.fire({
			title: 'Producto añadido al carrito!',
			confirmButtonColor: 'red'
		})
	}

	return (

		<Card
			direction={{ base: 'column', sm: 'row', }}
			overflow='hidden'
			variant='outline'
			sx={{ backgroundColor: 'transparent', border: 'none', }}
		>
			<Image
				objectFit='cover'
				maxW={{ base: '100%', sm: '200px' }}
				src={image}
				alt='Caffe Latte'
			/>

			<Stack >
				<CardBody >
					<Heading size='md'>{name}</Heading>

					<Text py='2'>
						{description}
					</Text>
					<button onClick={() => { addToCart(id); handleClick() }}>
						<img className="imageCart" src={add} alt='x' />
					</button>
				</CardBody>

				
			</Stack>
		</Card>
	);
}