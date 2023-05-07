import React,{Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ArtItem from './ArtItem';
import artItemInfo from '../data/artInfo.json';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import DeviceContext from '../components/DeviceContext'


class ArtListPage extends React.Component{
     
    
        
    



  render(){


        return(
        <>
            <Container className="artlist-header-container" >
            <div style={{ marginLeft: "30px",marginTop: "4cm" }}>
      <h1 className="text-left" style={{ fontFamily: "Drugs, sans-serif" }}>THE MODAL SYSTEM IN PERSIAN MUSIC</h1>
     
      </div>
       
      <div style={{width: "100%", height: "20px", backgroundColor: "#847D46", marginLeft: "30px" }}></div>
           
         
      <p className="artlist-header-info" style={{height: "20px", marginLeft: "30px", marginRight: "50px", marginBottom: "300px", fontFamily: "Drugs, sans-serif"}}> {artItemInfo[this.props.medium].info}</p>
              




         </Container>

         <Container  className="art-list-container">

         </Container>
        </>
    )
          
  }


}

export default ArtListPage