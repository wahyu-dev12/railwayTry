import React from 'react';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {

    const nav = useNavigate();

    useEffect(() => {
        document.getElementById('close').addEventListener('click', () => {
            nav(-1);
        })
    })

    return (
        <div className="modal" tabIndex="-1" style={{
            display: "block",
            backgroundColor: "#0009"
        }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Page Not Found</h5>
                    </div>
                    <div className="modal-body text-center">
                        <p>Halman yang kamu tuju, tidak tersedia</p>
                        <button id="close" type="button" className="btn btn-primary mt-5" data-bs-dismiss="modal">Ok</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default NotFound;