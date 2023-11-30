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
            <section class="category_section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6 col-md-4 col-xl-2 px-0">
                            <a href="#" class="box">
                                <div class="img-box">
                                    <FaLaptopCode size={40} />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Web Design
                                    </h5>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4 col-xl-2 px-0">
                            <a href="#" class="box">
                                <div class="img-box">
                                    <CgWebsite size={100} />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Web Development
                                    </h5>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4 col-xl-2 px-0">
                            <a href="#" class="box">
                                <div class="img-box">
                                    <SiTaichigraphics size={100} />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Graphic Design
                                    </h5>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4 col-xl-2 px-0">
                            <a href="#" class="box">
                                <div class="img-box">
                                    <AiOutlineStock size={100} />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Seo marketing
                                    </h5>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4 col-xl-2 px-0">
                            <a href="#" class="box">
                                <div class="img-box">
                                    <SlCalculator size={100} />
                                </div>
                                <div class="detail-box">
                                    <h5>
                                        Accounting
                                    </h5>
                                </div>
                            </a>
                        </div>
                        <div class="col-sm-6 col-md-4 col-xl-2 px-0">
                            <a href="#" class="box">
                                <div class="img-box">
                                    <MdEditNote size={100} />
                                </div>
                                <div class="detail-box">
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