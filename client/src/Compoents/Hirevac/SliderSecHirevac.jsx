import React from 'react'

function SliderSecHirevac() {
    return (
        <>
            <section className="slider_section ">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-7 col-md-8 mx-auto">
                            <div className="detail-box">
                                <h1>
                                    Build Your <br />
                                    POWERFUL CAREER
                                </h1>
                                <p>
                                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution of letters, as opposed to
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="find_container ">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <form>
                                        <div className="form-row ">
                                            <div className="form-group col-lg-3">
                                                <input type="text" className="form-control" id="inputPatientName" placeholder="Keywords" />
                                            </div>
                                            <div className="form-group col-lg-3">
                                                <select name="" className="form-control wide" id="inputDoctorName">
                                                    <option value="Normal distribution ">All Locations</option>
                                                    <option value="Normal distribution ">Location 2 </option>
                                                    <option value="Normal distribution ">Location 3 </option>
                                                </select>
                                            </div>
                                            <div className="form-group col-lg-3">
                                                <select name="" className="form-control wide" id="inputDepartmentName">
                                                    <option value="Normal distribution ">SEO Expert </option>
                                                    <option value="Normal distribution ">Web Designer </option>
                                                    <option value="Normal distribution ">Web Developer</option>
                                                    <option value="Normal distribution ">Graphic Deesigner</option>
                                                    <option value="Normal distribution ">Content Writer</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-lg-3">
                                                <div className="btn-box">
                                                    <button type="submit" className="btn ">Submit Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <ul className="job_check_list">
                                <li className=" ">
                                    <input id="checkbox_qu_01" type="checkbox" className="styled-checkbox" />
                                    <label htmlFor="checkbox_qu_01">
                                        Freelancer
                                    </label>
                                </li>
                                <li className=" ">
                                    <input id="checkbox_qu_02" type="checkbox" className="styled-checkbox" />
                                    <label htmlFor="checkbox_qu_02">
                                        Part Time
                                    </label>
                                </li>
                                <li className=" ">
                                    <input id="checkbox_qu_03" type="checkbox" className="styled-checkbox" />
                                    <label htmlFor="checkbox_qu_03">
                                        Full Time
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SliderSecHirevac