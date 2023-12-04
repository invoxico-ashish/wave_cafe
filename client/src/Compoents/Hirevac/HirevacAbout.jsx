import React, { useEffect, useState } from 'react'
import aboutimg from "../../assets/hirevac/about-img.jpg";
import axios from "axios";
import { apiHirevacaboutus } from "../../config/apiUrl"




function HirevacAbout() {
  const [details, setDetails] = useState([])
  useEffect(() => { aboutusDetails() }, []);
  const aboutusDetails = async () => {
    try {
      const response = await axios(`${apiHirevacaboutus}`);
      setDetails(response.data)
    } catch (error) { console.log(error) };
  }
  return (
    <>
      <section className="about_section layout_padding">
        <div className="container abt_cont">
          {
            details.map((a, index) => (
              <div className="row" key={a.about_id} >
                <div className={`col-md-6 ${index % 2 !== 0 ? 'order-md-2' : ''}`}>
                  <div className="detail-box">
                    <div className="heading_container">
                      <h2>
                        About Us
                      </h2>
                    </div>
                    <p>{a.about_desc}</p>
                    <a href="">
                      Read More
                    </a>
                  </div>
                </div>
                <div className={`col-md-6 ${index % 2 !== 0 ? 'order-md-1' : ''}`}>
                  <div className="img-box">
                    <img src={`http://localhost:8000/public/${a.hirevacaboutattachments[0].attachment_phy_path}`} alt="" />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default HirevacAbout