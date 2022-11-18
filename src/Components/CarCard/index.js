import React from 'react';
import PropTypes from 'prop-types';

const currencyEncode = num => {
    let strNum = num.toString().split('').reverse();
    let result = [];
    for (let i = 0; i < strNum.length; i++) {
        if (i % 3 == 0 && i != 0) {
            result.push('.');
            result.push(strNum[i]);
        } else result.push(strNum[i]);
    }
    let res = '';
    result.reverse().forEach(element => {
        res += element;
    });
    return res;
}

function CarCard({carName, carType, img, rentPrice, desc, opt, cpty, carYear }) {

    return (
        <div key={carName} className="col-md-3">
            <div className="card">

                {img == undefined ? <div className="w-100 card-img-top bg-skeleton img-skeleton"></div> : <div className="w-100 card-img-top img-skeleton" style={{backgroundImage: "url("+`https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/images/${img.split('/')[2]}`+")"}}></div>}

                <div className="card-body">
                    {carName == undefined || carType == undefined ? <div className="rounded-pill w-100 bg-skeleton title-skeleton"></div> : <h5 className="card-title">{carName} / {carType}</h5>}
                    {rentPrice == undefined ? <h4></h4> : <h4 className="fw-bold">Rp. {currencyEncode(rentPrice)} /hari</h4>}
                    <div className="card-text">
                        {desc == undefined ? <div className="rounded-pill bg-skeleton mb-2 p1-skeleton"></div> : <p className="card-text">{desc}</p>}
                        {cpty == undefined ? <div className="rounded-pill bg-skeleton mb-2 p2-skeleton"></div> : <p className="card-text"><i className="bi bi-people"></i> {cpty} Orang</p>}
                        {opt == undefined ? <div className="rounded-pill bg-skeleton mb-2 p3-skeleton"></div> : <p className="card-text"><i className="bi bi-gear"></i> {opt} </p>}
                        {carYear == undefined ? <div className="rounded-pill bg-skeleton mb-2 p3-skeleton"></div> : <p className="card-text"><i className="bi bi-calendar"></i> Tahun {carYear}</p>}
                    </div>
                    {rentPrice == undefined ? <div className="rounded-pill w-100 bg-skeleton btn-skeleton"></div> : <button className="btn btn__mod w-100 btn-success fw-bold">Pilih Mobil</button>}
                </div>
            </div>
        </div>
    )
}

CarCard.propTypes = {
    carName: PropTypes.node.isRequired, 
    carType: PropTypes.node.isRequired, 
    img: PropTypes.node.isRequired, 
    rentPrice: PropTypes.node.isRequired, 
    desc: PropTypes.node.isRequired, 
    opt: PropTypes.node.isRequired, 
    cpty: PropTypes.node.isRequired, 
    carYear: PropTypes.node.isRequired
}


export default CarCard;