import React from 'react';
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap';
function ProductList(props) {
    var  addToCart=()=>{

        alert("product added")
    }
    console.log("props",props)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button onClick={()=>addToCart} variant="primary">Add Products</Button>
                    </Card.Body>
                </Card>
        </div>
    );
}

export default ProductList;