import React from 'react'

function SpecialItems({ SpData }) {
    return (
        <>
            <div className="tm-special-items">
                {
                    SpData.map(s => (
                        <div className="tm-black-bg tm-special-item" key={s.sp_id}>
                            <img src={`http://localhost:8000/public/${s.attachmentspecial[0].attachment_phy_path}`} alt="Image" />
                            <div className="tm-special-item-description">
                                <h2 className="tm-text-primary tm-special-item-title">{s.sp_title}</h2>
                                <p className="tm-special-item-text">{s.sp_desc}.</p>
                            </div>
                        </div>
                    ))
                };
            </div>
        </>
    )
}

export default SpecialItems