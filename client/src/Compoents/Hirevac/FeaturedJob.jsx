import React, { useEffect, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom"
import { apiHirevacrecentsJobs } from "../../config/apiUrl";
import { FaLocationPin } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa"

function FeaturedJob() {
    const [like, setLike] = useState(false);
    const [jobs, setJobs] = useState([]);
    useEffect(() => { jobDetails() }, [])
    const jobDetails = async () => {
        try {
            const response = await axios.get(`${apiHirevacrecentsJobs}`);
            setJobs(response.data);
        } catch (error) { console.log(error) }
    }
    return (
        <>
            <section className="job_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2> RECENT & FEATURED JOBS</h2>
                    </div>
                    <div className="job_container">
                        <h4 className="job_heading"> Featured Jobs </h4>
                        <div className="row">
                            {
                                jobs.map(j => (
                                    <div className="col-lg-6" key={j.job_id}>
                                        <div className="box">
                                            <div className="job_content-box">
                                                <div className="img-box">
                                                    <img src={`http://localhost:8000/public/${j.hirevacjobattachments[0].attachment_phy_path}`} alt="" />
                                                </div>
                                                <div className="detail-box">
                                                    <h5>
                                                        {j.job_desc}
                                                    </h5>
                                                    <div className="detail-info">
                                                        <h6><FaLocationPin /><span>{j.job_location}</span></h6>
                                                        <h6><FaMoneyBillWave />
                                                            <span>${j.job_salary_from}  {j.job_salary_to === "0" ? `/month` : `- $${j.job_salary_to}`}</span>
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="option-box">
                                                <button className="fav-btn">
                                                    {like === true ? <FaHeart size={20} color='red' onClick={() => setLike(prev => !prev)} /> : <CiHeart size={25} onClick={() => setLike(prev => !prev)} />}
                                                </button>
                                                <Link href="" className="apply-btn"> Apply Now </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            };
                        </div>
                    </div>
                    <div className="btn-box"><Link to=""> View All </Link></div>
                </div>
            </section>
        </>
    )
}

export default FeaturedJob