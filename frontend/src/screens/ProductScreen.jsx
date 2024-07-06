import React from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = () => {
    const { id: productId } = useParams();
    console.log('Product ID from URL:', productId); // Log del productId

    const product = products.find((p) => p._id === productId);
    console.log('Product found:', product); // Log del producto encontrado
    if (!product) {
        return <div>Product not found</div>;
    }
  return (
    <>
    <Link className="btn btn-light my-3" to="/" >Go Back</Link>
    <Row>
        <Col md={5}>
        <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
        <ListGroup variant='flush'>
        <ListGroup.Item >
            <h3>{product.name}</h3>
        </ListGroup.Item>
        <ListGroup.Item>
            <Rating value={product.rating} 
            text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: ${product.description}</ListGroup.Item>
        </ListGroup>
        </Col>
        <Col md={3}>
        <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col>Price:</Col>
                    </Row>
                    <Col>
                    <strong>${product.price}</strong>
                    </Col>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Status:</Col>
                    </Row>
                    <Col>
                    <strong>${product.countInStock 
                    > 0 ? 'In stock' : 'Out of stock'}</strong>
                    </Col>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button className='btn-block'
                    type='button'
                    disable={product.countInStock === 0}>
                        Add To Cart
                    </Button>
                </ListGroup.Item>
            </ListGroup>
        </Card>
        </Col>
    </Row>
    </>
  )
}

export default ProductScreen