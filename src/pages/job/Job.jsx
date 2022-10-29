import React from 'react'
import './job.css'
import axios from "axios";

import { useState, useEffect } from "react";

const Job = () => {

    const [data, setData] = useState([])




    const getall = () => {
        axios.get(`http://localhost:5000/job/list`)
            .then(res => {

                // setemp(res.data);

                console.log(res.data);
                
                setData(res.data);


            }).catch(err=>{
                console.log(err);
            })
    }


    useEffect(() => {

        getall()

    }, []);










  return (
    <div>
  {data.map((j)=>{
    return(

<div className="container">
  <div className="card mx-auto">
    <div className="row">
      <div className="logo ml-3 mb-3"><img class="size-96 company-logo bg-white" alt="company logo" _v-ab01d028="" src="https://img.jobi.tn/0796ce39-f07d-bf64-07c0-d2eb7c00ca22/version/crop/50x50/0-0/"/></div>
      <div className="header right"><i className="fas fa-ellipsis-h" /></div>
    </div>
    <div className="card-title">
    <span >TITEL</span>
      <p className="heading">{j.titel} &nbsp;<i className="far fa-compass" /></p>
    </div>
    <div className="card-title">
    <span >JOBTYPE</span>
      <p className="heading">{j.jobtype.name} &nbsp;<i className="far fa-compass" /></p>
    </div>
    <span >Description</span>
    <p className="text-muted">{j.description} </p>
    <div className="row btnrow my-4">
        <div >
      <div className="col-4 col-md-3"><button type="button" className="btn btn-outline-success btn-sm" style={{background: '#00ff002b'}}>Full Time</button></div>
      <div className="col-4 col-md-3"><span> date de debut</span> <button  type="button" className="btn btn-outline-danger btn-sm" style={{background: '#dc35452e'}}>{j.start_date}</button></div>
      </div>
    </div>
    <div className="mutual"><i className="fas fa-users" />&nbsp;&nbsp;<span>5 Friends work here</span></div>
    <div className="row btnsubmit mt-4">
      <div className="col-md-6 col-6"> <button type="button" onClick={() => window.location.href = '/condidacy'} className="btn btn-primary btn-lg"><span>postuler</span></button> </div>
      <div className="col-md-6 col-6"> <button type="button" className="btn btn-dark btn-lg"><span>Message</span></button> </div>
    </div>
  </div>
</div>
    )
  })}
    
    </div>
  )
}

export default Job
