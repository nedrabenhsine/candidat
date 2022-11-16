import React from "react";
import "./joboffer.css";
import { useState, useEffect } from "react";
import axios from "axios";
const JobOffer = () => {
  const [job, setjob] = useState([]);
  const getall = () => {
    axios.get(`http://localhost:5000/job/list`).then((res) => {
      // setemp(res.data);

      console.log(res.data);
      res.data = res.data.map((e) => {
        return {
          jobtype: e.jobtype.name,
          titel: e.titel,
          salary: e.salary,
          id: e.id,
          description: e.description,
          start_date: e.start_date,
          end_date: e.end_date,
        };
      });

      setjob(res.data);
    });
  };

  useEffect(() => {
    getall();
  }, []);

  return (
    <div className="row">
      <div className="card">
        <div className="row">
          <div className="logo ml-3 mb-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxDRpxI5gXgaVmnO-VgcVUNOkca91jIpS75Flbzkz5W_5g5_V5&usqp=CAU"
              alt=""
            />
          </div>
          <div className="header right">
            <i className="fas fa-ellipsis-h" />
          </div>
        </div>
        <div className="card-title">
          <p className="heading">
            Lead Product Design&nbsp;
            <i className="far fa-compass" />
          </p>
        </div>
        <p className="text-muted">
          You will be responsible for the visual design
          <br />
          for multi device.Understand basic design,
          <br />
          User journey, Ideation and Wireframing, etc...
        </p>
        <div className="row btnrow my-4">
          {/* <div className="col-4 col-md-3"><button type="button" className="btn btn-outline-success btn-sm" style={{ background: '#00ff002b' }}>Full Time</button></div>
        <div className="col-4 col-md-3"><button type="button" className="btn btn-outline-primary btn-sm" style={{ background: '#007bff33' }}>Min. 1 year</button></div>
        <div className="col-4 col-md-3"><button type="button" className="btn btn-outline-danger btn-sm" style={{ background: '#dc35452e' }}>Director</button></div>
   */}
        </div>
        <div className="mutual">
          <i className="fas fa-users" />
          &nbsp;&nbsp;<span></span>
        </div>
        <div className="row btnsubmit mt-4">
          <div className="col-md-6 col-6">
            <button
              type="button"
              onClick={() => (window.location.href = "/condidacy")}
              className="btn btn-primary btn-lg"
            >
              <span>Apply Now</span>
            </button>
          </div>
          <div className="col-md-6 col-6">
            <button type="button" className="btn btn-dark btn-lg">
              <span>Message</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOffer;
