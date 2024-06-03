import React from 'react'

import "./Home.css";


import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>


            {/* MODAL SECTION */}
            <div class="modal fade p-3 trackModal" id="modal" >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div className="modal-body">
                            <div className="logo text-center my-3">
                                <img src="./imgs/logo.png" width={180} alt="" />
                            </div>

                            <div className="modal-text">
                                <h4>Welcome to KPEC! 👋</h4>
                                <p>You can track the status of Your Complaint using your Complaint No & PIN</p>

                                <form action="">
                                    <div className="form-group mb-3">
                                        <label htmlFor="">COMPLAINT NO</label>
                                        <input type="text" className='form-control form-control-sm' placeholder='NHA002374' />
                                    </div>

                                    <div className="form-group mb-3">
                                        <label htmlFor="">PIN</label>
                                        <input type="password" className='form-control form-control-sm' placeholder='***' />
                                    </div>
                                    <div className="d-grid">
                                        <button className='track-btn w-100'>Track Complaint</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="main-section mt-4">
                <div className="row">
                    {/* MAIN TEXT ENGLISH  */}
                    <div className="col-xl-4">
                        <div className="main-text-eng">
                            <h4>Grievance Redressal Procedure</h4>
                            <p><strong>Government of Khyber Pakhtunkhwa</strong> with technical and financial support of
                                <strong>World
                                    Bank and Planning
                                    &amp; Development
                                    Department</strong> has initiated <strong>Khyber Pass Economic Corridor</strong> Project.
                                The Project has
                                developed the
                                Grievance Redressal
                                Mechanism as an institutional arrangement to provide a platform for all the stakeholders
                                negatively affected by the
                                project to record their grievances.
                            </p>

                            <p>
                                Complaints can be submitted to the <strong>National Highway Authority (NHA)</strong> or
                                <strong>Government of Khyber
                                    Pakhtunkhwa</strong> through the
                                following means:
                            </p>

                            <h4>National Highways Authority (NHA)</h4>

                            <ul className="lists">

                                <li className="item">
                                    <span>Website</span>
                                    <strong>www.nha.gov.pk</strong>
                                </li>

                                <li className="item">
                                    <span>Phone</span>
                                    <strong>+92-091-9225010</strong>
                                </li>

                                <li className="item">
                                    <span>Email	</span>
                                    <strong>kamrannha.kpec@gmail.com</strong>
                                </li>

                                <li className="item">
                                    <span>Post</span>
                                    <strong>NHA Provincial Office, Chamkani Peshawar</strong>
                                </li>

                            </ul>


                            <h4>National Highways Authority (NHA)</h4>

                            <ul className="lists">

                                <li className="item">
                                    <span>Website</span>
                                    <strong>www.kpec.gov.pk</strong>
                                </li>

                                <li className="item">
                                    <span>Phone</span>
                                    <strong>091-9216005</strong>
                                </li>

                                <li className="item">
                                    <span>Email	</span>
                                    <strong>grm@kpec.org.pk</strong>
                                </li>

                                <li className="item">
                                    <span>Post</span>
                                    <strong>House No. 21-E Mulberry Road, University town, Peshawar</strong>
                                </li>

                            </ul>


                            <p>In order to submit complaint to the Government of Khyber Pakhtunkhwa through personal appearance or complaint Dropbox, please visit House No. 21-E Mulberry Road, University Town Peshawar</p>

                        </div>
                    </div>
                    {/* MAIN TEXT ENGLISH ./ */}

                    <div className="col-xl-4">
                        <div className="main-btns">
                            <ul>
                                <li>
                                    <Link className='m-btn' to={"/addcomplaint"}>
                                        <span className='text-eng'>Submit new Complaint</span>
                                        <span className='text-urdu'>نئی شکایت جمع کروائیں</span>
                                    </Link>
                                </li>
                                <li>
                                    <button className='m-btn' data-bs-target="#modal" data-bs-toggle="modal">
                                        <span className='text-eng'>Check status of complaint</span>
                                        <span className='text-urdu'>
                                            اپنی پہلےسے رجسٹرڈ شکایت
                                            کا سٹیٹس جانیں</span>
                                    </button>
                                </li>
                            </ul>



                            <div className="middle-img">
                                <img src="./imgs/kpec.png" width={"100%"} alt="" />
                            </div>


                        </div>
                    </div>

                    {/* URDU TEXT  */}
                    <div className="col-xl-4">
                        <div className="main-text-urdu">
                            <h5>شکایت کے ازالے کا طریقہ</h5>

                            <p>حکومت خیبر پختونخوا نے ورلڈ بینک اور محکمہ پلاننگ اینڈ ڈویلپمنٹ کے تکنیکی اور مالی تعاون سے خیبر پاس اکنامک کوریڈور منصوبہ شروع کیا ہے۔ پروجیکٹ نے شکایات کے ازالے کا طریقہ کار ایک ادارہ جاتی انتظام کے طور پر تیار کیا ہے تاکہ پروجیکٹ سے منفی طور پر متاثر ہونے والے تمام اسٹیک ہولڈرز کو اپنی شکایات ریکارڈ کرنے کے لیے ایک پلیٹ فارم فراہم کیا جا سکے. شکایات نیشنل ہائی ویز اتھارٹی یا حکومت خیبر پختونخوا کو درج ذیل ذرائع سے جمع کرائی جا سکتی ہیں</p>

                            <h5>(NHA) نیشنل ہائی ویز اتھارٹی</h5>

                            <ul className="lists">

                                <li className="item">
                                    <span>ویب سائٹ</span>
                                    <strong>www.nha.gov.pk</strong>
                                </li>

                                <li className="item">
                                    <span>فون</span>
                                    <strong>+92-091-9225010	</strong>
                                </li>

                                <li className="item">
                                    <span>ای میل</span>
                                    <strong>kamrannha.kpec@gmail.com</strong>
                                </li>

                                <li className="item">
                                    <span>پوسٹ</span>
                                    <strong>نیشنل ہائی ویز اتھارٹی چمکنی پشاور	</strong>
                                </li>

                            </ul>

                            <p>نیشنل ہائی ویز اتھارٹی کو ذاتی پیشی یا شکایت ڈراپ باکس کے ذریعے شکایت جمع کروانے کے لیے براہ کرم چمکنی پشاور پر جائیں۔</p>

                            <h5>حکومت خیبر پختونخوا</h5>
                            <ul className="lists">

                                <li className="item">
                                    <span>ویب سائٹ</span>
                                    <strong>www.kpec.gov.pk	</strong>
                                </li>

                                <li className="item">
                                    <span>فون</span>
                                    <strong>091-9216005	</strong>
                                </li>

                                <li className="item">
                                    <span>ای میل</span>
                                    <strong>grm@kpec.org.pk	</strong>
                                </li>

                                <li className="item">
                                    <span>پوسٹ</span>
                                    <strong>ملبیری روڈ یونیورسٹی ٹاؤن پشاور E-21</strong>
                                </li>

                            </ul>

                            <p>
                                حکومت خیبرپختونخوا کو ذاتی پیشی یا شکایت ڈراپ باکس کے ذریعے شکایت جمع کروانے کے لیے، براہ کرم ملبیری روڈ یونیورسٹی ٹاؤن پشاور پر جائیں۔</p>

                        </div>
                    </div>
                    {/* URDU TEXT ./ */}

                </div>
            </section>
        </>
    )
}

export default Home
