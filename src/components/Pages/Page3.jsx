import React from 'react'
import Navigation from '../Navigation/Navigation';
import "./page1.css";
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer";
const Page3 = () => {
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
                  src="/images/11th.png"
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
                  src="/images/12th.png"
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
          <div className="pages">
      <ul>
        <li>
          <Link to="/page2" style={{ textDecoration: 'none', listStyle: 'none', color:'black' }}>&lt;</Link>
        </li>
        <li>
          <Link to="/" style={{ textDecoration: 'none', listStyle: 'none', color:'black' }}> 1</Link>
        </li>
       
        <li>
          <Link to="/page2" style={{ textDecoration: 'none', listStyle: 'none', color:'black' }}> 2</Link>
        </li>
        <li style={{backgroundColor:'black'}}>
          <Link to="/page3" style={{ textDecoration: 'none', listStyle: 'none', color:'white' }}> 3</Link>
        </li>
        <li>
          <Link to="/page3" style={{ textDecoration: 'none', listStyle: 'none', color:'black' }}> &gt;</Link>
        </li>
      </ul>
      </div>
      <Footer/>
    </section>
    </>

  );
};

export default Page3;
