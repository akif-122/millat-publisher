import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";

import "./AddComplaint.css";
import { Link } from 'react-router-dom';

const AddComplaint = () => {
    return (
        <>
            <div className="main-section mt-4 complaint">
                <div className="go-back-link">
                    <Link to={"/"}><FaAngleLeft /> Back</Link>
                </div>
                <h2 className='text-center'>Add New <span>Complaint</span></h2>
                <h5 className='text-center'>نئی شکایت شامل کریں</h5>

                <form action="">
                    <div className="row">

                        <div className="col-lg-6 mb-4 mb-lg-5" >
                            <div className="form-group ">
                                <label htmlFor="">Name نام</label>
                                <input type="text" className='form-control' />
                            </div>

                            <div className="radio-boxes mb-3">

                                <label htmlFor="" className='pl-0 pb-3'>Gender صنف</label><br />

                                <div className="form-check form-check-inline">
                                    <input type="radio" className='form-check-input' name='gender' id='male' />
                                    <label htmlFor="male" className='form-check-label'>Male</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input type="radio" className='form-check-input' name='gender' id='female' />
                                    <label htmlFor="female" className='form-check-label'>Female</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input type="radio" className='form-check-input' name='gender' id='other' />
                                    <label htmlFor="other" className='form-check-label'>Other</label>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-6 mb-4 mb-lg-5" >
                            <div className="form-group">
                                <label htmlFor="">Address پتہ</label>
                                <textarea name="" id="" rows={5} className='form-control'></textarea>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4 mb-lg-5" >
                            <div className="form-group mb-3">
                                <label htmlFor="">National Identification Number (CNIC) قومی شناختی نمبر</label>
                                <input type="text" className='form-control' placeholder='00000000000000' />
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4 mb-lg-5" >
                            <div className="form-group mb-3">
                                <label htmlFor="">Village/UC گاؤں</label>
                                <input type="text" className='form-control' />
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4 mb-lg-5" >
                            <div className="form-group mb-3">
                                <label htmlFor="">Cell Number فون نمبر</label>
                                <input type="number" className='form-control' placeholder='0343400****' />
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4 mb-lg-5" >
                            <div className="form-group mb-3">
                                <label htmlFor="">Tehsil * تحصیل</label>
                                <input type="text" className='form-control' />
                            </div>
                        </div>


                        <div className="col-lg-6 mb-4 mb-lg-5" >
                            <div className="form-group mb-3">
                                <label htmlFor="">Email ای میل</label>
                                <input type="email" className='form-control' />
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4 mb-lg-5" >
                            <div className="form-group mb-3">
                                <label htmlFor="">District * ضلع</label>
                                <select name="" id="" className='form-select'>
                                    <option value="">Select Distric</option>
                                    <option value="">Charsadda</option>
                                    <option value="">Peshawar</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4 mb-lg-5" >
                            <label htmlFor="" className='mb-3'>کیا آپ نے پہلے یہ شکایت کسی دوسرے محکمے کو جمع کروائی تھی؟
                                <br />
                                Did you previously discussed OR Submit this complaint to any other department?</label>
                            <br />

                            <div className="form-check form-check-inline">
                                <input type="radio" className='form-check-input' name="prev-discuss" id="prev-discuss-yes" />
                                <label htmlFor="prev-discuss-yes" className='form-check-label'>Yes ہاں</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input type="radio" className='form-check-input' name="prev-discuss" checked id="prev-discuss-no" />
                                <label htmlFor="prev-discuss-no" className='form-check-label'>No نہیں</label>
                            </div>

                        </div>

                        <div className="col-lg-6 mb-4 mb-lg-5" >
                            <label htmlFor="" className='mb-3'>
                                * کیا آپ اپنی ذاتی تفصیلات کو خفیہ رکھنا چاہتے ہیں؟
                                <br />Do you want to keep your personal detals confidential? *
                            </label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input type="radio" className='form-check-input' name="keep-data" id="keep-data-yes" />
                                <label htmlFor="keep-data-yes" className='form-check-label'>Yes ہاں</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input type="radio" className='form-check-input' name="keep-data" checked id="keep-data-no" />
                                <label htmlFor="keep-data-no" className='form-check-label'>No نہیں</label>
                            </div>

                        </div>

                        <div className="col-lg-6 mb-4 mb-lg-5" >
                            <label htmlFor="" className='mb-3'>
                                جواب حاصل کرنے کا سب سے مؤثر طریقہ
                                <br /> Most effective mean to recieve Response (Please tick)
                            </label>
                            <br />
                            <div className="form-check form-check-inline">
                                <input type="radio" className='form-check-input' checked name="response" id="post" />
                                <label htmlFor="post" className='form-check-label'>Post پوسٹ</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input type="radio" className='form-check-input' name="response" id="email" />
                                <label htmlFor="email" className='form-check-label'>Email ای میل</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input type="radio" className='form-check-input' name="response" id="phone" />
                                <label htmlFor="phone" className='form-check-label'>Phone/SMS فون</label>
                            </div>

                        </div>




                        <div className="col-lg-6 mb-4 mb-lg-5" >
                            <label htmlFor="" className='mb-3'>
                                * آپ کس سے شکایت کرنا چاہتے ہیں؟
                                <br /> Who do you want to submit complaint? *
                            </label>
                            <br />
                            <div className="form-check form-check">
                                <input type="radio" className='form-check-input' name="complaint" id="nha" />
                                <label htmlFor="nha" className='form-check-label'>National Highway Authority</label>
                            </div>

                            <div className="form-check form-check">
                                <input type="radio" className='form-check-input' checked name="complaint" id="pad" />
                                <label htmlFor="pad" className='form-check-label'>Planning and Development Department Khyber Pakhtunkhwa</label>
                            </div>

                        </div>

                        <div className="col-lg-6 mb-4 mb-lg-5" >
                            <div className="form-group mb-3">
                                <label htmlFor="">Category * زمرہ منتخب کریں</label>
                                <select name="" id="" className='form-select'>
                                    <option value="">Lnad Related Issue</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-4 mb-lg-5" >
                            <div className="form-group mb-3">
                                <label htmlFor="">Attachments منسلکات</label>
                                <input type="file" className='form-control' />
                            </div>
                        </div>

                        <div className="col-12 mb-4">
                            <div className="form-group mb-3">
                                <label htmlFor="">Complaint Title * شکایت کا عنوان</label>
                                <input type="text" className='form-control' />
                            </div>
                        </div>

                        <div className="col-12 mb-4">
                            <div className="form-group mb-3">
                                <label htmlFor="">Complaint Details * شکایت کی تفصیل</label>
                                <textarea name="" id="" rows={8} className='form-control'></textarea>
                            </div>
                        </div>

                        <div className="d-grid">
                            <button className='cmp-btn '>Submit Complaint</button>
                        </div>



                    </div>



                </form>

            </div>
        </>
    )
}

export default AddComplaint