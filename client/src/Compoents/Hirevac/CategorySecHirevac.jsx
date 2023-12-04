import React from 'react';
import { AiOutlineStock } from "react-icons/ai";
import { FaLaptopCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { SlCalculator } from "react-icons/sl";
import { SiTaichigraphics, } from "react-icons/si";
import { MdEditNote } from "react-icons/md";

function CategorySecHirevac() {
    return (
        <>
            <section className="category_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 col-md-4 col-xl-2 px-0">
                            <a href="#" className="box">
                                <div className="img-box">
                                    <FaLaptopCode size={40} />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Web Design
                                    </h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xl-2 px-0">
                            <a href="#" className="box">
                                <div className="img-box">
                                    <CgWebsite size={100} />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Web Development
                                    </h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xl-2 px-0">
                            <a href="#" className="box">
                                <div className="img-box">
                                    <SiTaichigraphics size={100} />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Graphic Design
                                    </h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xl-2 px-0">
                            <a href="#" className="box">
                                <div className="img-box">
                                    <AiOutlineStock size={100} />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Seo marketing
                                    </h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xl-2 px-0">
                            <a href="#" className="box">
                                <div className="img-box">
                                    <SlCalculator size={100} />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Accounting
                                    </h5>
                                </div>
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-4 col-xl-2 px-0">
                            <a href="#" className="box">
                                <div className="img-box">
                                    <MdEditNote size={100} />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Content Writing
                                    </h5>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategorySecHirevac