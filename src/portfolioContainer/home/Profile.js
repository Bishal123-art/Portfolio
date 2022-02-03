import React from 'react';
import Typical from 'react-typical';
import './Profile.css';
import pdf from "../../assest/BishalKumaeSInghResume_dst.pdf"

export default function Profile() {
    return (
        <>
            <div className="Profile-container">
                <div className="profile-parent">
                    <div className="profile-details">
                        <div className="colz">
                            <div className="colz-icon">
                                <a href="https://www.facebook.com/profile.php?id=100015864284283"><i className="fa fa-facebook-square"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                                <a href="https://www.youtube.com/channel/UCZGiKKFr6PhqGN9zkyd7yRg"><i className="fa fa-youtube"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="https://github.com/Bishal123-art"><i class="fa fa-github"></i></a>
                            </div>
                        </div>
                        <div className="profile-details-name">
                            <span className="primary-text">
                                {""}
                                Hello I'M <span className="highlighted-text">Bishal</span>
                            </span>
                        </div>
                        <div className="profile-details-role">
                            <span className="primary-text">
                                <h1 style={{ fontSize: "30px" }}>
                                    <Typical
                                        steps={[
                                            'Full Stack Developer !', 1000,
                                            'Frontend Developer !', 1000,
                                            'Backend Developer !', 1000,
                                            'MSRN Stack Developer !', 1000,
                                            'UI Designer !', 1000,
                                        ]}
                                        loop={Infinity}
                                        wrapper="p"
                                    />
                                </h1>
                                <span className="profile-role-tagline">
                                    I have ability to bulid the full stack application with frontend and backend
                                </span>
                            </span>
                        </div>
                        <div className="profile-option">
                            <button className="hire-me">Hire Me</button>
                            <a href={pdf} download="BishalKumaeSInghResume_dst.pdf">
                                <button className="get-resume">Get Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className="profile-picture">
                        <div className="profile-picture-background">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

