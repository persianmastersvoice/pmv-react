import React,{Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutInfo from '../data/about.json';
import Fade from 'react-reveal/Fade';
import ProgressiveImage from "react-progressive-image"
import DeviceContext from '../components/DeviceContext'

function HomePage(props){
    return(
      <div>
    
    

      <div style={{ marginLeft: "30px",marginTop: "4cm" }}>
      <h1 className="text-left" style={{ fontFamily: "Drugs, sans-serif" }}>ABOUT THE PROJECT</h1>
     
      </div>
      <div style={{width: "100%", height: "20px", backgroundColor: "#847D46", marginLeft: "30px", marginBottom: "50px"}}></div>

      <Row className="inspiration-header-content">
         <div className="inspiration-header" style={{height: "20px", marginLeft: "30px", marginRight: "50px", marginBottom: "100px", fontFamily: "Drugs, sans-serif"}}>
         <p className="inspiration-header-info-left">{aboutInfo[1].info}</p>
         </div>
      </Row>


 
      <div style={{ marginLeft: "30px",marginTop: "4cm" }}>
      <h1 className="text-left" style={{ fontFamily: "Drugs, sans-serif" }}>BOARD OF DIRECTORS</h1>
     
      </div>
      <div style={{width: "100%", height: "20px", backgroundColor: "#847D46", marginLeft: "30px", marginBottom: "50px"}}></div>

      <Row className="inspiration-header-content">
         <div className="inspiration-header" style={{height: "20px", marginLeft: "30px", marginRight: "50px", marginBottom: "100px", fontFamily: "Drugs, sans-serif"}}>
         <p className="inspiration-header-info-left">{aboutInfo[2].info}</p>
         </div>
      </Row>


      <div style={{ marginLeft: "30px",marginTop: "4cm" }}>
      <h1 className="text-left" style={{ fontFamily: "Drugs, sans-serif" }}>CONSULTING EDITORS</h1>
     
      </div>
      <div style={{width: "100%", height: "20px", backgroundColor: "#847D46", marginLeft: "30px", marginBottom: "50px"}}></div>

      <Row className="inspiration-header-content">
         <div className="inspiration-header" style={{height: "20px", marginLeft: "30px", marginRight: "50px", marginBottom: "100px", fontFamily: "Drugs, sans-serif"}}>
         <p className="inspiration-header-info-left">{aboutInfo[3].info}</p>
         </div>
      </Row>


      <div style={{ marginLeft: "30px",marginTop: "4cm" }}>
      <h1 className="text-left" style={{ fontFamily: "Drugs, sans-serif" }}>MISSION</h1>
     
      </div>
      <div style={{width: "100%", height: "20px", backgroundColor: "#847D46", marginLeft: "30px" }}></div>

      <Row className="inspiration-header-content">
         <div className="inspiration-header" style={{height: "20px", marginLeft: "30px", marginRight: "50px", marginBottom: "300px", fontFamily: "Drugs, sans-serif"}}>
         <p className="inspiration-header-info-left">{aboutInfo[4].info}</p>
         </div>
      </Row>


      <div style={{ marginLeft: "30px",marginTop: "4cm" }}>
      <h1 className="text-left" style={{ fontFamily: "Drugs, sans-serif" }}>METHODOLOGY</h1>
     
      </div>
      <div style={{width: "100%", height: "20px", backgroundColor: "#847D46", marginLeft: "30px", marginBottom: "50px"}}></div>

      <Row className="inspiration-header-content">
         <div className="inspiration-header" style={{height: "20px", marginLeft: "30px", marginRight: "50px", marginBottom: "570px", fontFamily: "Drugs, sans-serif"}}>
         <p className="inspiration-header-info-left">{aboutInfo[5].info}</p>
         </div>
      </Row>


      <div style={{ marginLeft: "30px",marginTop: "4cm" }}>
      <h1 className="text-left" style={{ fontFamily: "Drugs, sans-serif" }}>TERMINOLOGY</h1>
     
      </div>
      <div style={{width: "100%", height: "20px", backgroundColor: "#847D46", marginLeft: "30px", marginBottom: "50px"}}></div>

      <Row className="inspiration-header-content">
         <div className="inspiration-header" style={{height: "20px", marginLeft: "30px", marginRight: "50px", marginBottom: "100px", fontFamily: "Drugs, sans-serif"}}>
         <p className="inspiration-header-info-left">{aboutInfo[6].info}</p>
         </div>
      </Row>

















       
      </div>
    )
}

export default HomePage