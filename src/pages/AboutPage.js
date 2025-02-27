import React,{Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutInfo from '../data/about.json';

{/* this code is for ABOUT */}

function HomePage(props){
    return(
      <div>
    
    

      {/* this is Title */}
      <div style={{ marginLeft: "30px",marginTop: "4cm" }}>
      <h1 className="text-left" style={{ fontFamily: "Drugs, sans-serif" }}>ABOUT THE PROJECT</h1>
      </div>
      {/* this is the gold line */}
      <div style={{width: "100%", height: "20px", backgroundColor: "#847D46", marginLeft: "30px", marginBottom: "50px"}}></div>
      {/* this is content calling from AboutPage.js */}
      <Row className="inspiration-header-content">
         <div className="inspiration-header" style={{height: "20px", marginLeft: "30px", marginRight: "50px", marginBottom: "100px", fontFamily: "Drugs, sans-serif"}}>
         <p className="inspiration-header-info-left">{aboutInfo[1].info}</p>
         </div>
      </Row>


      {/* this is Title */}
      <div style={{ marginLeft: "30px",marginTop: "4cm" }}>
      <h1 className="text-left" style={{ fontFamily: "Drugs, sans-serif" }}>BOARD OF DIRECTORS</h1>
      </div>
      {/* this is the gold line */}
      <div style={{width: "100%", height: "20px", backgroundColor: "#847D46", marginLeft: "30px", marginBottom: "50px"}}>
      </div>
      {/* this is content calling from aboutpage.js */}
      <Row className="inspiration-header-content">
         <div className="inspiration-header" style={{height: "20px", marginLeft: "30px", marginRight: "50px", marginBottom: "100px", fontFamily: "Drugs, sans-serif"}}>
         <p className="inspiration-header-info-left">{aboutInfo[2].info}</p>
         </div>
      </Row>

      {/* this is Title */}
      <div style={{ marginLeft: "30px",marginTop: "4cm" }}>
      <h1 className="text-left" style={{ fontFamily: "Drugs, sans-serif" }}>CONSULTING EDITORS</h1>
      </div>
      {/* this is the gold line */}
      <div style={{width: "100%", height: "20px", backgroundColor: "#847D46", marginLeft: "30px", marginBottom: "50px"}}></div>
      {/* this is content calling from aboutpage.js */}
      <Row className="inspiration-header-content">
         <div className="inspiration-header" style={{height: "20px", marginLeft: "30px", marginRight: "50px", marginBottom: "100px", fontFamily: "Drugs, sans-serif"}}>
         <p className="inspiration-header-info-left">{aboutInfo[3].info}</p>
         </div>
      </Row>

      {/* this is Title */}
      <div style={{ marginLeft: "30px",marginTop: "4cm" }}>
      <h1 className="text-left" style={{ fontFamily: "Drugs, sans-serif" }}>MISSION</h1>
      </div>
      {/* this is the gold line */}
      <div style={{width: "100%", height: "20px", backgroundColor: "#847D46", marginLeft: "30px" }}></div>
      {/* this is content calling from aboutpage.js */}
      <Row className="inspiration-header-content">
         <div className="inspiration-header" style={{height: "20px", marginLeft: "30px", marginRight: "50px", marginBottom: "300px", fontFamily: "Drugs, sans-serif"}}>
         <p className="inspiration-header-info-left">{aboutInfo[4].info}</p>
         </div>
      </Row>

      {/* this is Title */}
      <div style={{ marginLeft: "30px",marginTop: "4cm" }}>
      <h1 className="text-left" style={{ fontFamily: "Drugs, sans-serif" }}>METHODOLOGY</h1>
      </div>
      {/* this is the gold line */}
      <div style={{width: "100%", height: "20px", backgroundColor: "#847D46", marginLeft: "30px", marginBottom: "50px"}}></div>
      {/* this is content calling from aboutpage.js */}
      <Row className="inspiration-header-content">
         <div className="inspiration-header" style={{height: "20px", marginLeft: "30px", marginRight: "50px", marginBottom: "570px", fontFamily: "Drugs, sans-serif"}}>
         <p className="inspiration-header-info-left">{aboutInfo[5].info}</p>
         </div>
      </Row>

      {/* this is Title */}
      <div style={{ marginLeft: "30px",marginTop: "4cm" }}>
      <h1 className="text-left" style={{ fontFamily: "Drugs, sans-serif" }}>TERMINOLOGY & TRANSLITERATION SYSTEM</h1>
      </div>
      {/* this is the gold line */}
      <div style={{width: "100%", height: "20px", backgroundColor: "#847D46", marginLeft: "30px", marginBottom: "50px"}}></div>
      {/* this is content calling from aboutpage.js */}
      <Row className="inspiration-header-content">
         <div className="inspiration-header" style={{height: "20px", marginLeft: "30px", marginRight: "50px", marginBottom: "100px", fontFamily: "Drugs, sans-serif"}}>
         <p className="inspiration-header-info-left">{aboutInfo[6].info}</p>
         </div>
      </Row>

















       
      </div>
    )
}

export default HomePage