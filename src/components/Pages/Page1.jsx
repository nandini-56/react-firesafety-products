import React from "react";
import "./page1.css";
// import Page2 from "./Page2";
// import Page3 from "./Page3";
import {Link} from 'react-router-dom'
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
const Page1 = () => {
  return (
    <>
    <Navigation/>
    <section
      className="content"
      style={{
        textAlign: "center",
        color: "#333",
        fontSize: "24px",
        marginTop: "50px",
      }}
    >
      <h1>Our Fire and Safety Products</h1>
      <article>
        <div
          className="img1Desc"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <div className="text" style={{ flex: 1, textAlign: "start" }}>
            <h4>ABC Stored Pressure Type Fire Extinguisher</h4>
            <p className="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="features">
              <h5 className="heading">Features</h5>
              <div className="points">
                <li className="paragraph">

                {/* <p className="paragraph"> */}
                  Deep drawn container made of high tensile cold rolled sheet.
                {/* </p> */}
                </li>
              </div>
              <div className="points">
                <li className='paragraph'>

                {/* <p className="paragraph"> */}
                  Minimum welding points to give attractive appearance
                {/* </p> */}
                </li>
              </div>
              <div className="points">
                <li className='paragraph'>
                {/* <p className="paragraph"> */}
                UFS Extinguishers pressurized to 15 bar and 100 % leakage tested.
                {/* </p> */}
                </li>
              </div>
              <div className="points">
                <li className='paragraph'>

                {/* <p className="paragraph"> */}
                  The epoxy powder coating of 50 to 90 micron thickness provides inner of the body. & outer surface.
                {/* </p> */}
                </li>
              </div>
              <div className="points">
<li className='paragraph'>

                {/* <p className="paragraph"> */}
                  The easy squeeze grip type control valve provides for quick activation of the Extinguisher.
                {/* </p> */}
</li>
              </div>
              <div className="points">
                <li className='paragraph'>

                {/* <p className="paragraph"> */}
                  Easy operation, maintenance, rehilling and service.
                {/* </p> */}
                </li>
              </div>
              <div className="points">
                <li className="paragraph">

                {/* <p className="paragraph"> */}
                UFS extinguishers designed in compliance with BIS Standards.
                {/* </p> */}
                </li>
              </div>
            </div>
          </div>
          <div className="img1">
            <img
              src="/images/1st.png"
              alt="image"
              style={{
                marginTop: "20px",
                paddingRight: "20px",
                paddingBottom: "20px",
                width: "20vw",
              }}
            />
          </div>
        </div>
      </article>
      <article>
        <div
          className="img2Desc"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <div className="img2" style={{width:'20em'}}>
            <img
              src="/images/2nd.png"
              alt="image"
              style={{
                marginTop: "10px",
                paddingRight: "20px",
                paddingBottom: "20px",
                width: '100%', height: 'auto'
              }}
            />
          </div>
          <div className="text2" style={{ flex: 1, textAlign: "start" }}>
            <h4>Water Based Fire Extinguisher (Stored Pressure)</h4>
            <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="features">
              <h5 className="heading">Features</h5>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                Deep drawn container made of high tensile cold rolled sheet.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                Minimum welding points to give attractive appearance.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                "UFS" Extinguishers pressurized to 15 bar and 100% leakage tested.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                The epoxy powder coating of 50 to 90 micron thickness provides inner & outer surface of the body.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                "UFS" extinguishers designed in compliance with BIS Standards
                </li>
              </div>
              <div className="points">
                <li className="paragraph">
                Easy operation, maintenance, refilling and service.
                </li>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article>
        <div
          className="img1Desc"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <div className="text" style={{ flex: 1, textAlign: "start" }}>
            <h4>ABC Stored Pressure Type Fire Extinguisher</h4>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              eius harum ut asperiores itaque. Itaque natus, voluptatem, quae
              odio ipsa architecto accusantium pariatur dolor amet, quos
              consequatur ab? Delectus similique eos modi incidunt voluptate
              ipsa cupiditate provident enim tenetur. Quos?
            </p>
            <div className="features">
              <h5 className="heading">Features</h5>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
            </div>
          </div>
          <div className="img1">
            <img
              src="/images/3rd.png"
              alt="image"
              style={{
                marginTop: "20px",
                paddingRight: "20px",
                paddingBottom: "20px",
                width: "20vw",
              }}
            />
          </div>
        </div>
      </article>
      <article>
        <div
          className="img2Desc"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <div className="img2" style={{width:'20em'}}>
            <img
              src="/images/4th.png"
              alt="image"
              style={{
                marginTop: "20px",
                paddingRight: "20px",
                paddingBottom: "20px",
                width: '100%', height: 'auto'
              }}
            />
          </div>
          <div className="text2" style={{ flex: 1, textAlign: "start" }}>
            <h4>ABC Stored Pressure Type Fire Extinguisher</h4>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              eius harum ut asperiores itaque. Itaque natus, voluptatem, quae
              odio ipsa architecto accusantium pariatur dolor amet, quos
              consequatur ab? Delectus similique eos modi incidunt voluptate
              ipsa cupiditate provident enim tenetur. Quos?
            </p>
            <div className="features">
              <h5 className="heading">Features</h5>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article>
        <div
          className="img1Desc"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <div className="text" style={{ flex: 1, textAlign: "start" }}>
            <h4>ABC Stored Pressure Type Fire Extinguisher</h4>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              eius harum ut asperiores itaque. Itaque natus, voluptatem, quae
              odio ipsa architecto accusantium pariatur dolor amet, quos
              consequatur ab? Delectus similique eos modi incidunt voluptate
              ipsa cupiditate provident enim tenetur. Quos?
            </p>
            <div className="features">
              <h5 className="heading">Features</h5>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
              <div className="points">
                {/* <div className="dot"></div> */}
                <li className="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officia, impedit.
                </li>
              </div>
            </div>
          </div>
          <div className="img1">
            <img
              src="/images/5th.png"
              alt="image"
              style={{
                marginTop: "20px",
                paddingRight: "20px",
                paddingBottom: "20px",
                width: "20vw",
              }}
            />
          </div>
        </div>
      </article>
      <div className="pages">
      <ul>
      <Link to="/" style={{ textDecoration: 'none', listStyle: 'none', color:'black' }}>
        <li  className="list"style={{backgroundColor:'white'}}>
          &lt;
        </li>
        </Link>
        
        <Link to="/" style={{ textDecoration: 'none', listStyle: 'none', color:'white' }}>
        <li  className="list"style={{backgroundColor:'black'}}>
          1
        </li>
        </Link>
        
        <Link to="/page2" style={{ textDecoration: 'none', listStyle: 'none', color:'black' }}>
        <li  className="list"style={{backgroundColor:'white'}}>
          2
        </li>
        </Link>

        <Link to="/page3" style={{ textDecoration: 'none', listStyle: 'none', color:'black' }}>
        <li  className="list"style={{backgroundColor:'white'}}>
          3
        </li>
        </Link>
        
        <li className="list">
          <Link to="/page2" style={{ textDecoration: 'none', listStyle: 'none', color:'black' }}> &gt;</Link>
        </li>
      </ul>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Page1;
