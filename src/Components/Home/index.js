import React from 'react';
import { useEffect } from "react";
import { TopLayout } from "../../Components"

function Home() {

    useEffect(() => {

        let defaultMargin = 24.872;
        let firstMargin = -24;
        let different = -50;
        let index = 0;

        let rowCarousel = document.getElementById('row-carousel');
        let cards = document.querySelectorAll('#row-carousel .card');
        let countCard = cards.length;

        // NB : Default move to left

        // arithmetic sequence function
        function arithmeticSequence(a, b, n) {
            // a = first tribe
            // b = different
            // n = index
            let Un = a + ((n - 1) * b);
            console.log(a + " " + b + " " + n + " " + Un);
            return Un;
        }

        function left(indexCustom = null) {
            let innerIndex = index;
            if (index + 1 < countCard) {
                innerIndex++;
            }
            if (indexCustom != null) {
                innerIndex = indexCustom;
                console.log('index custom');
            }
            console.log(rowCarousel);
            let currentMargin = arithmeticSequence(firstMargin, different, innerIndex);
            rowCarousel.style.transform = "translate(" + currentMargin + "% ,0px)";
            // if index = count card carousel
            if (index + 1 == countCard || innerIndex == 0) {
                rowCarousel.style.transform = "translate(" + defaultMargin + "% ,0px)";
            }

            if (index + 1 < countCard) {
                index++;
            } else if (index + 1 == countCard) {
                index = 0;
            }

            if (indexCustom != null) {
                index = indexCustom;
            }
        }

        function right(indexCustom = null) {
            let innerIndex = index;
            let firstCondition = true;
            if (index > 0) {
                innerIndex--;
            }
            if (indexCustom != null) {
                innerIndex = indexCustom;
            }
            console.log(rowCarousel);
            let currentMargin = arithmeticSequence(firstMargin, different, innerIndex);
            rowCarousel.style.transform = "translate(" + currentMargin + "% ,0px)";
            // if index is 0 back to first position
            if (index == 0) {
                let currentMargin = arithmeticSequence(firstMargin, different, countCard - 1);
                rowCarousel.style.transform = "translate(" + currentMargin + "% ,0px)";
                index = countCard - 1;
                firstCondition = false;
            } else if (innerIndex == 0) {
                rowCarousel.style.transform = "translate(" + defaultMargin + "% ,0px)";
                index = 0;
            }

            if (index > 0 && firstCondition == true) {
                index--;
            }
            if (indexCustom != null) {
                index = indexCustom;
            }
        }

        function setChangeTransform(currentWidth) {
            if (currentWidth < 753) {
                defaultMargin = 1;
                firstMargin = -99;
                different = -100;

                console.log('execution');
                document.getElementById('carousel-content').classList.add('container');


                left(index);
                console.log('Setup ulang' + " " + defaultMargin + " " + firstMargin + " " + different);
            } else {
                defaultMargin = 24.872;
                firstMargin = -24;
                different = -50;

                try {
                    document.getElementById('carousel-content').classList.remove('container');
                } catch (error) {
                    console.log(error);
                }

                left(index);
                console.log('Setup ulang' + " " + defaultMargin + " " + firstMargin + " " + different);
            }
        }

        const autoLoad = function () {
            console.log('set-size');
            let currentWidth = document.body.clientWidth;
            console.log(currentWidth);

            try { setChangeTransform(currentWidth) } catch (error) { console.log(error) }

            // Auto load carousel
            setInterval(function () {
                try { left() } catch (error) { console.log(error) }
            }, 5000);
        }

        try {
            document.getElementById('nav-carousel-left').addEventListener('click', function () {
                if (index >= 0) {
                    right();
                    console.log('right', index)
                }
            });
            document.getElementById('nav-carousel-right').addEventListener('click', function () {
                if (index < countCard) {
                    left();
                    console.log('left', index)
                }
            });
        } catch (error) {
            console.log(error);
        }

        window.addEventListener('resize', function () {
            console.log('resize');
            let currentWidth = this.document.body.clientWidth;
            console.log(currentWidth);

            try { setChangeTransform(currentWidth) } catch (error) { console.log(error) }
        });

        autoLoad();

    })

    return (
        <div>
            <TopLayout btnSearch={
                <a href="/cars">
                    <button className="btn btn-success">Mulai Sewa Mobil</button>
                </a>
            }></TopLayout>
            <div id="our-services" className="container mt-35">
                <div className="row">
                    <div className="col-lg-6 col-lg-6__img-sc-content">
                        <img src={`${process.env.PUBLIC_URL}/images/img_service.png`} width="100%" alt="" />
                    </div>
                    <div className="col-lg-6 col-lg-6__txt-sc-content">
                        <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
                        <p>
                            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                            meeting, dll.
                        </p>
                        <p>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/Group 53.png`}
                                className="d-inline"
                                width="24px"
                                height="24px"
                                alt=""
                            />
                            Sewa Mobil Dengan Supir di Bali 12 Jam
                        </p>
                        <p>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/Group 53.png`}
                                className="d-inline"
                                width="24px"
                                height="24px"
                                alt=""
                            />
                            Sewa Mobil Lepas Kunci di Bali 24 Jam
                        </p>
                        <p>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/Group 53.png`}
                                className="d-inline"
                                width="24px"
                                height="24px"
                                alt=""
                            />
                            Sewa Mobil Jangka Panjang Bulanan
                        </p>
                        <p>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/Group 53.png`}
                                className="d-inline"
                                width="24px"
                                height="24px"
                                alt=""
                            />
                            Gratis Antar - Jemput Mobil di Bandara
                        </p>
                        <p>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/images/Group 53.png`}
                                className="d-inline"
                                width="24px"
                                height="24px"
                                alt=""
                            />
                            Layanan Airport Transfer / Drop In Out
                        </p>
                    </div>
                </div>
            </div>
            <div id="why-us" className="container mt-100">
                <div className="row">
                    <div className="col-12 txt-th-content">
                        <h3>Why Us?</h3>
                        <p>Mengapa harus pilih Binar Car Rental?</p>
                    </div>
                    <div className="col-12">
                        <div className="row row__mod">
                            <div className="col-md-3">
                                <div className="card-feature yellow">
                                    <img src={`${process.env.PUBLIC_URL}/images/icon_complete.png`} alt="" />
                                    <h4>Mobil lengkap</h4>
                                    <p>
                                        Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                                        terawat
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card-feature red">
                                    <img src={`${process.env.PUBLIC_URL}/images/icon_price.png`} alt="" />
                                    <h4>Harga Murah</h4>
                                    <p>
                                        Harga murah dan bersaing, bisa bandingkan harga kami dengan
                                        rental mobil lain
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card-feature blue">
                                    <img src={`${process.env.PUBLIC_URL}/images/icon_24hrs.png`} alt="" />
                                    <h4>Layanan 24 Jam</h4>
                                    <p>
                                        Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                                        tersedia di akhir minggu
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="card-feature green">
                                    <img src={`${process.env.PUBLIC_URL}/images/icon_professional.png`} alt="" />
                                    <h4>Sopir Professional</h4>
                                    <p>
                                        Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                                        tepat waktu
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="carousel-content" className="row mt-100 carousel-content">
                <div className="col-12 text-center">
                    <h4>Testimonial</h4>
                    <p>Berbagai review positif dari para pelanggan kami</p>
                </div>
                <div className="col-12 p-0">
                    <div className="w-100 slider-row">
                        <div id="row-carousel" className="row first-pos">
                            <div className="col-6">
                                <div
                                    className="card card__mod text-bg-primary mb-3"
                                    style={{ maxWidth: "18rem" }}
                                >
                                    <div className="row row__flex">
                                        <div className="col-md-3 col-img">
                                            <div className="mb-3">
                                                <img src={`${process.env.PUBLIC_URL}/images/img_photo(1) copy.png`} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="box-rating">
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                            </div>
                                            <p className="text-dark mb-2">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Iste atque nobis repellendus magnam pariatur consequuntur
                                                vitae, quam sequi in magni quas aspernatur officiis
                                                recusandae a nostrum minima deleniti, voluptate cum.
                                            </p>
                                            <p className="text-dark mb-2 fw-bold">John Dee 32, Bromo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div
                                    className="card card__mod text-bg-primary mb-3"
                                    style={{ maxWidth: "18rem" }}
                                >
                                    <div className="row row__flex">
                                        <div className="col-md-3 col-img">
                                            <div className="mb-3">
                                                <img src={`${process.env.PUBLIC_URL}/images/img_photo(2).png`} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="box-rating">
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                            </div>
                                            <p className="text-dark mb-2">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Iste atque nobis repellendus magnam pariatur consequuntur
                                                vitae, quam sequi in magni quas aspernatur officiis
                                                recusandae a nostrum minima deleniti, voluptate cum.
                                            </p>
                                            <p className="text-dark mb-2 fw-bold">John Dee 32, Bromo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div
                                    className="card card__mod text-bg-primary mb-3"
                                    style={{ maxWidth: "18rem" }}
                                >
                                    <div className="row row__flex">
                                        <div className="col-md-3 col-img">
                                            <div className="mb-3">
                                                <img src={`${process.env.PUBLIC_URL}/images/img_photo(1).png`} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="box-rating">
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                            </div>
                                            <p className="text-dark mb-2">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                Iste atque nobis repellendus magnam pariatur consequuntur
                                                vitae, quam sequi in magni quas aspernatur officiis
                                                recusandae a nostrum minima deleniti, voluptate cum.
                                            </p>
                                            <p className="text-dark mb-2 fw-bold">John Dee 32, Bromo</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <button
                                id="nav-carousel-left"
                                className="btn btn-outline-success nav-carousel"
                            >
                                <i className="bi bi-chevron-left"></i>
                            </button>
                            <button
                                id="nav-carousel-right"
                                className="btn btn-outline-success nav-carousel nav-carousel__right"
                            >
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 banner">
                        <div className="box-banner text-center">
                            <p className="text-outer fw-bold">Sewa Mobil di (Lokasimu) Sekarang</p>
                            <p className="text-inner">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <a href="/cars" className="btn btn-success fw-bold">Mulai Sewa Mobil</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="faq" className="container">
                <div className="row footer">
                    <div className="col-md-5 ask-box">
                        <h3 className="fw-bold">Frequently Asked Question</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <p></p>
                    </div>
                    <div className="col-md-7">
                        <div className="row row__mod ask-box">

                            <div className="col-12 p-0">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                Apa saja syarat yang dibutuhkan?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the first items accordion body.</strong>
                                                It is shown by default, until the collapse plugin adds the
                                                appropriate classNamees that we use to style each element.
                                                These classNamees control the overall appearance, as well as
                                                the showing and hiding via CSS transitions. You can modify
                                                any of this with custom CSS or overriding our default
                                                variables. Its also worth noting that just about any HTML
                                                can go within the <code>.accordion-body</code>, though the
                                                transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                Berapa hari minimal sewa mobil lepas kunci?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the second item accordion body.</strong>
                                                It is hidden by default, until the collapse plugin adds
                                                the appropriate classNamees that we use to style each element.
                                                These classNamees control the overall appearance, as well as
                                                the showing and hiding via CSS transitions. You can modify
                                                any of this with custom CSS or overriding our default
                                                variables. Its also worth noting that just about any HTML
                                                can go within the <code>.accordion-body</code>, though the
                                                transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the third items accordion body.</strong>
                                                It is hidden by default, until the collapse plugin adds
                                                the appropriate classNamees that we use to style each element.
                                                These classNamees control the overall appearance, as well as
                                                the showing and hiding via CSS transitions. You can modify
                                                any of this with custom CSS or overriding our default
                                                variables. Its also worth noting that just about any HTML
                                                can go within the <code>.accordion-body</code>, though the
                                                transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour"
                                                aria-expanded="false"
                                                aria-controls="collapseFour"
                                            >
                                                Apakah Ada biaya antar-jemput?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFour"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFour"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the third items accordion body.</strong>
                                                It is hidden by default, until the collapse plugin adds
                                                the appropriate classNamees that we use to style each element.
                                                These classNamees control the overall appearance, as well as
                                                the showing and hiding via CSS transitions. You can modify
                                                any of this with custom CSS or overriding our default
                                                variables. Its also worth noting that just about any HTML
                                                can go within the <code>.accordion-body</code>, though the
                                                transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive"
                                                aria-expanded="false"
                                                aria-controls="collapseFive"
                                            >
                                                Apakah Ada biaya antar-jemput?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFive"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFive"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the third items accordion body.</strong>
                                                It is hidden by default, until the collapse plugin adds
                                                the appropriate classNamees that we use to style each element.
                                                These classNamees control the overall appearance, as well as
                                                the showing and hiding via CSS transitions. You can modify
                                                any of this with custom CSS or overriding our default
                                                variables. Its also worth noting that just about any HTML
                                                can go within the <code>.accordion-body</code>, though the
                                                transition does limit overflow.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;