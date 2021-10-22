import React from "react";


import { Container, Row, Col, Image, Button } from "react-bootstrap";

const Middle = () => {
    return(
      <Container style={{ marginLeft: "0", font:"Roboto", padding:"0", marginRight: "0", maxWidth: "100vw"}}>
          <Row>
              <Col xs lg="2">
                  <h1 style={{ marginTop: "100px", marginLeft: "0px", marginRight:"0" }}>Aesop</h1>
              </Col>
              <Col xs={4}>
               <div>
                   <Row style={{ marginTop: "120px", marginLeft: "0px" }}>
                       <p style={{ fontSize: "15px"}}>For devotees of the metropolis</p>
                       <h2 style={{marginLeft: "0", textAlign: "left", fontSize:"40px"}}>
                           Introducing Parsley Seed Anti-Oxidant Intense Serum
                       </h2>
                       <p style={{marginLeft: "0", textAlign: "left", fontSize:"17px"}}>
                            Potent fortification with a weightless texture : a barley-there film to guard against airborne particulates
                       </p>
                   </Row>
                   <Row>
                        <Button style={{marginTop:"50px", marginLeft:"15px"}} variant="outline-dark" size="lg">
                            Discover the formulation 	<span>&#8594;</span>
                        </Button>
                   </Row>
               </div>
              </Col>
              <Col style= {{marginTop:"100px"}} xs={6}>
              <Image src="img/man3.jpg" className="man-image"  />
              </Col>
          </Row>
      </Container>
    )
}

export default Middle;