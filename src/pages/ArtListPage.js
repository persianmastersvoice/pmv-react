import React,{Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import artItemInfo from '../data/artInfo.json';
import { Link } from 'react-router-dom';
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
                DASTGĀH
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

                   

                      {/* this is the code for linking to the new pages "DASTGAH"*/}
                      <div style={{ fontFamily: "Drugs, sans-serif", marginTop: "50px" }}>
                          <a href="/page1" style={{ display: "block", color: "black", fontSize: "30px" }}>SHUR</a>
                          <a href="/page3" style={{ display: "block", color: "black", fontSize: "30px" }}>SEGĀH</a>
                          <a href="/page4" style={{ display: "block", color: "black", fontSize: "30px" }}>CHAHARGĀH</a>
                          <a href="/page2" style={{ display: "block", color: "black", fontSize: "30px" }}>MĀHUR</a>
                          <a href="/page7" style={{ display: "block", color: "black", fontSize: "30px" }}>HOMĀYOUN</a>           
                          <a href="/page6" style={{ display: "block", color: "black", fontSize: "30px" }}>NAVĀ</a>
                          <a href="/page5" style={{ display: "block", color: "black", fontSize: "30px" }}>RĀST PANJGĀH</a>

                      </div>

                     {/* this is the code for two dots*/} 
                      {/* <div style={{ display: "flex", justifyContent: "space-between", width: "120px", marginLeft: "10px", marginTop: "100px" }}>
                          <div style={{
                              height: "50px",
                              width: "50px",
                              backgroundColor: "#847D46",
                              transform: "rotate(45deg)"
                          }}>
                          </div>
                          <div style={{
                              height: "50px",
                              width: "50px",
                              backgroundColor: "#847D46",
                              transform: "rotate(45deg)"
                          }}>
                          </div>
                      </div> */}





                      {/* this is title */}
                      <h1 className="text-left" style={{ fontFamily: "Drugs, sans-serif", marginTop: "100px", }}>
                          ĀVĀZ
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
                      <div style={{ fontFamily: "Drugs, sans-serif", marginRight: "50px", marginTop: "100px", }}>
                          <p className="artlist-header-container-info-left">{artItemInfo[this.props.medium].info},</p>
                      </div>



                      {/* this is the code for linking to the new pages "DASTGAH"*/}
                      <div style={{ fontFamily: "Drugs, sans-serif", marginTop: "50px",marginBottom: "150px" }}>
                          <a href="/page1" style={{ display: "block", color: "black", fontSize: "30px" }}>BAYĀT TURK</a>
                          <a href="/page3" style={{ display: "block", color: "black", fontSize: "30px" }}>AFSHĀRI</a>
                          <a href="/page4" style={{ display: "block", color: "black", fontSize: "30px" }}>ABU ATĀ</a>
                          <a href="/page2" style={{ display: "block", color: "black", fontSize: "30px" }}>DASHTI</a>
                          <a href="/page7" style={{ display: "block", color: "black", fontSize: "30px" }}>BAYĀT ESFAHĀN</a>
                          <a href="/page6" style={{ display: "block", color: "black", fontSize: "30px" }}>BAYĀT KURD</a>
                         

                      </div>





            </div>
          </Container>
        </>
      );
    }
  }
  
  export default ArtListPage;
  
    