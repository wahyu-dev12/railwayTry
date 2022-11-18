import React from 'react';
import flatpickr from "flatpickr";
import { useEffect } from "react";
import Select from 'react-select';
import { TopLayout } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import { getListCar } from "../../actions/CarAction";
import { CarCard } from "../../Components";

let numCol = [1,2,3,4,5,6,7,8,9,10,11,12];
let  drvType = {}

function Explore() {

    const { getListCarData, getListCarLoading, getListCarErr } = useSelector(state => state.CarReducer);
    const dispatch = useDispatch();

    const options = [
        { value: 1, label: "Dengan Supir" },
        { value: 2, label: "lepas Kunci" }
    ];

    function selectDrv(selectedOption){
        drvType = selectedOption
    }

    useEffect(() => {
        // Setup select view flatpickr
        flatpickr('#date', {
            disableMobile: true,
        });
        flatpickr('#time', {
            enableTime: true,
            noCalendar: true,
            time_24hr: true,
            disableMobile: true,
        });

        dispatch(getListCar());

        // change background color on edit filter\

        let allNoteBox = document.getElementById('search-box-child').getElementsByTagName('*');
        for (let i = 0; i < allNoteBox.length; i++) {
            allNoteBox[i].addEventListener('click', function () {
                console.log(allNoteBox[i])
                document.getElementById('bg-dark').style.display = 'unset';
                document.getElementById('search-box').style.zIndex = 1030;
            });
        }

        document.getElementById('bg-dark').addEventListener('click', function () {
            this.style.display = 'none';
            document.getElementById('search-box').style.zIndex = 'unset';
        });

        document.onkeydown = evt => {
            evt = evt || window.event;
            evt.key === 'esc' ? document.getElementById('bg-dark').click() : console.log('');
        }

        // Filterinng search
        document.getElementById('search-now').addEventListener('click', () => {
            document.getElementById('bg-dark').click();
            console.log('esc');
            // objSetView.setBlankView();
            // objSetView.setView(8);

            console.log("drvType : ", drvType);

            setTimeout(() => {
                dispatch(getListCar('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json', (drvType === null ? '-0-' : drvType.value) + '/' +
                    (document.getElementById('date').value == '' ? '-0-' : document.getElementById('date').value) + '/' +
                    (document.getElementById('time').value == '' ? '-0-' : document.getElementById('time').value) + '/' +
                    (document.getElementById('count-people').value == '' ? '-0-' : document.getElementById('count-people').value)));
            }, 300);
        });

    }, [dispatch])

    return (
        <div>
            <TopLayout></TopLayout>
            <link rel="stylesheet" href={`${process.env.PUBLIC_URL}/css/explore-page.css`}></link>

            <div id="bg-dark" className="bg fixed-top"></div>
            <div>
                <div className="position-relative search-box w-100">
                    <div className="container">
                        <div id="search-box" className="shadow p-4 bg-body rounded position-relative">
                            <div className="row">
                                <div className="col-12 label-full">
                                    <div className="row">
                                        <div className="col-md">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <label htmlFor="driver-type">Tipe Driver</label>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="date">Tanggal</label>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="time">Waktu Jemput / Ambil</label>
                                                </div>
                                                <div className="col-md-3">
                                                    <label htmlFor="count-people"
                                                    >Jumlah Penumpang (opsional)</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="row">
                                        <div id="search-box-child" className="col-md">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <Select
                                                        id="driver-type"
                                                        placeholder="Pilih Tipe Driver"
                                                        options={options}
                                                        onChange={selectDrv}
                                                        isClearable
                                                    >
                                                    </Select>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="input-group input-group-lg">
                                                        <input
                                                            id="date"
                                                            type="date"
                                                            className="form-control"
                                                            placeholder="Pilih Tanggal"
                                                        />
                                                        <span className="input-group-text">
                                                            <i className="bi bi-calendar fs-5"></i></span>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="input-group input-group-lg">
                                                        <input
                                                            id="time"
                                                            type="time"
                                                            className="form-control"
                                                            placeholder="Pilih Waktu"
                                                        />
                                                        <span className="input-group-text">
                                                            <i className="bi bi-clock fs-5"></i></span>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="input-group input-group-lg">
                                                        <input
                                                            id="count-people"
                                                            type="number"
                                                            className="form-control"
                                                            aria-label="Inputkan jumlah penumpang dalam angka"
                                                            placeholder="Jumlah Penumpang"
                                                        />
                                                        <span className="input-group-text">
                                                            <i className="bi bi-people fs-5"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <button id="search-now" className="btn btn__mod w-100 btn-success">
                                                Cari Mobil
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div id="result-part" className="row">
                            {console.log(getListCarData === {}, getListCarLoading, getListCarErr)}
                            {getListCarData ? (
                                getListCarData.length == undefined ? (<div></div>) : getListCarData.map(data => {
                                    return (
                                        // objData.manufacture, objData.type, objData.image, objData.rentPerDay, objData.description, objData.transmission, objData.capacity, objData.year
                                        <CarCard
                                            key={data.id}
                                            carName={data.manufacture}
                                            carType={data.type}
                                            img={data.image}
                                            rentPrice={data.rentPerDay}
                                            desc={data.description}
                                            opt={data.transmission}
                                            cpty={data.capacity}
                                            carYear={data.year}
                                        ></CarCard>
                                    )
                                })
                            ) : getListCarLoading ? (
                                numCol.map(data => {
                                    return (
                                        <CarCard key={data}></CarCard>
                                    )
                                })
                            ) : (
                                <div className="text-center">
                                    <h3>
                                        Data Tidak Ditemukan.
                                    </h3>
                                </div>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;