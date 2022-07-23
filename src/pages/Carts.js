import React from 'react';
import { Container } from 'react-bootstrap';
import CartItem from '../components/CartItem';
import { Navigate } from 'react-router-dom';

const dummyProducts = [
    {
        id: 0,
        title: "Produk A",
        price: 2000,
        description: "Lorem Ipsum",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwj2GvE-oVDfjrHjn2p1AbfYtv_dQ0Qdn9KQ&usqp=CAU",
        quantity: 1,
    },
    {
        id: 1,
        title: "Produk B",
        price: 2000,
        description: "Lorem Ipsum",
        image: "https://64.media.tumblr.com/f1041e675b3d146aa02c893560c67878/tumblr_pvef4qO0wE1wcm7vgo7_1280.jpg",
        quantity:2,
    },
    {
        id: 2,
        title: "Produk C",
        price: 2000,
        description: "Lorem Ipsum",
        image: "https://i.pinimg.com/736x/cf/93/93/cf9393c5f65270f2ab8de051ab2e8609.jpg",
        quantity:3,
    },
    {
        id: 3,
        title: "Produk D",
        price: 2000,
        description: "Lorem Ipsum",
        image: "https://wallpapercave.com/wp/wp7926288.jpg",
        quantity:2,
    },
];

function Carts({isLogedIn}) {
    
    if (!isLogedIn) {
        return (
        <Navigate to='/auth/login' replace />
        );
    }

    return(
        <Container>
           {dummyProducts.map((product)  => (
            <CartItem key={product.id} item={product} />
           ))}
        </Container>
    );
}

export default Carts;