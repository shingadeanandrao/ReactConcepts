import axios from "axios";
import Button from 'react-bootstrap/Button';
import { Card,Col,Row } from "react-bootstrap";
import { Component } from "react";

class ApiIntegrationProducts extends Component{
    constructor(props){
        super(props);
        this.state={
            product:[]
        }
    }

    componentDidMount(){
        console.log('Inside Component did mount')
        this.fetchProductDetails()

    }

    fetchProductDetails= async()=>{
        const productData=await axios.get("https://fakestoreapi.com/products");
        console.log(productData.data);
        this.setState({product : productData.data})
    }
    render(){
        return(
            <>
                {/* <div>
                <h2>Products Details</h2>
                <ul>
                {this.state.product.map((product)=(
                    <li> {product.title}  -  {product.price} - {product.image}</li>
                ))}
                </ul>
                </div> */}
                {/* <div className="container">
                <h2>Products Details</h2>

                <div className="card">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <div>
                {this.state.product.map((entry) => (
                    <div className="title"><Card.Title> {entry.title} </Card.Title></div>
                    <div className=" image"><Card.Img> {entry.image} </Card.Img> </div>
                    <div className="text"><Card.Text> {entry.description} </Card.Text> </div>
                    ))}
                    </div>
                    // <Button variant="primary">Go somewhere</Button>
    
                </Card.Body> 
                </Card>
                </div>
                </div> */}
{/*  
      <Card className="card">
{this.state.product.map((entry) => (
    <div key={entry.id} className="card-container">
      <div className="title">
        <Card.Title>{entry.title}</Card.Title>
      </div>
      <div className="image">
        <Card.Img src={entry.image} alt={entry.title} />
      </div>
      <div className="text">
        <Card.Text>{entry.description}</Card.Text>
      </div>
    </div>
  ))}
  </Card> */}
<h2>Product Details</h2>
<Row lg={4} style={{rowGap:'30px'}}>
  { this.state.product.map((product) => {
      const { id, title, price, category, description, image } =
        product;
      return (
        <Col  className="d-flex" style={{backgroundColor:'grey'}} >
          <Card className="flex-fill product" key={id} >
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Card.Text><b>Category: </b>{category}</Card.Text>
              <Card.Text><b>Price: </b>{price}</Card.Text>
              <Button variant="primary">Add to cart</Button>
            </Card.Body>
          </Card>
        </Col>
      );
    })}
</Row>

            </>
        )
        }
        }
export default ApiIntegrationProducts;
    