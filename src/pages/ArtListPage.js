import React,{Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import artItemInfo from '../data/artInfo.json';

{/* this code is for Persian Music page */}


class ArtListPage extends React.Component {
    render() {
      return (
        <>
          <Container className="artlist-header-container">
            <div style={{ marginLeft: "30px",}}>
              <h1 className="text-left" style={{ fontFamily: "Drugs, sans-serif", marginTop: "150px", }}>
                THE MODAL SYSTEM IN PERSIAN MUSIC
              </h1>

               {/* this is the gold line */}
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "20px",
                  backgroundColor: "#847D46",
                  marginBottom: "50px",
                }}
              ></div>

               {/* this is the paragraph calling from artinfo.json */}
               <div style={{ fontFamily: "Drugs, sans-serif", marginRight: "50px",marginTop: "100px",}}>
               <p className="artlist-header-container-info-left">{artItemInfo[this.props.medium].info},</p>
               </div>

               {/* this is title */}
               <h1 className="text-left" style={{ fontFamily: "Drugs, sans-serif", marginTop: "100px", }}>
                DASTGAH
               </h1>

               {/* this is the gold line */}
                <div
                style={{
                  position: "absolute",
                  width: "100%",
                  height: "20px",
                  backgroundColor: "#847D46",
                  marginBottom: "50px",
                }}
                ></div>

               {/* this is the paragraph calling from artinfo.json */}
               <div style={{ fontFamily: "Drugs, sans-serif", marginRight: "50px",marginTop: "100px",}}>
               <p className="artlist-header-container-info-left">{artItemInfo[this.props.medium].info},</p>
               </div>

            </div>
          </Container>
        </>
      );
    }
  }
  
  export default ArtListPage;
  
    