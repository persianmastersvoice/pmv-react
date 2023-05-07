import React from 'react';
import Showcase from '../components/Showcase';
import MediumList from '../components/MediumList';
import { VocalistsName } from '../components/vocalists';
import { InstrumentalistName } from '../components/instrumentalists';

function HomePage(props){
    return(
      <div>
      <Showcase/>
    

      <div style={{ marginLeft: "30px",marginTop: "4cm" }}>
      <h1 className="text-left" style={{ fontFamily: "Drugs, sans-serif" }}>SEAECH</h1>
      <p className="text-left" style={{ fontFamily: "Drugs, sans-serif", marginBottom: "20px" }}>
      Use terms such as OR and NOT to control your search
      </p>
      </div>
      <div style={{width: "100%", height: "20px", backgroundColor: "#847D46", marginLeft: "30px", marginBottom: "50px"}}></div>
{/* <MediumList/> */}
      <input
  type="text"
  placeholder="Search by Keyword"
  style={{
    backgroundColor: "#E6E7E8",
    border: "none",
    padding: "5px",
    width: "300px",
    color: "black",
    fontSize: "16px",
    fontFamily: "Drugs, sans-serif",
    marginLeft: "30px" 
    
  }}
/>

<div style={{width: "100%", height: "20px", backgroundColor: "#847D46", marginLeft: "30px", marginBottom: "50px", marginTop: "50px"}}></div>

<p className="text-left" style={{ fontFamily: "Drugs, sans-serif", textAlign: "left", color: "#847E45", marginLeft: "30px", fontSize: "60px", fontWeight: "bold" }}>
  VOCALIST
</p>

<div style={{ fontFamily: "Drugs, sans-serif", color: "#000", marginLeft: "30px", marginBottom: "50px" }}>
  <VocalistsName/>
</div>

<p className="text-left" style={{ fontFamily: "Drugs, sans-serif", textAlign: "left", color: "#847E45", marginLeft: "30px", fontSize: "60px", fontWeight: "bold" }}>
  INSTRUMENTALIS
</p>

<div style={{ fontFamily: "Drugs, sans-serif", color: "#000", marginLeft: "30px", marginBottom: "250px" }}>
  <InstrumentalistName/>
</div>





          {/* <MediumList/> */}{/* This is for portrate our images member of the board */}
      </div>
    )
}

export default HomePage