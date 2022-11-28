import { useState, useEffect } from "react";
import "./job.css";
import axios from "axios";
import { Form, Input } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload, Button } from "antd";
import jwt_decode from "jwt-decode";
const { Dragger } = Upload;

const Job = () => {
  const userToken = localStorage.getItem("token") || null;
  if (userToken !== null) {
    console.log("userToken", userToken);
    var decoded = jwt_decode(userToken);
    console.log("job", decoded);
  }
  const [data, setData] = useState([]);
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",

    onChange(info) {
      const { status } = info.file;

      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },

    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  const getall = () => {
    axios
      .get(`http://localhost:5000/job/list`)
      .then((res) => {
        // setemp(res.data);

        console.log(res.data);

        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getall();
  }, []);
  console.log("data", data);

  return (
    <div className="row">
      {data.map((j) => {
        return (
          <div className="col-6 container">
            <div className="card mx-auto">
              <div className="row">
                <div className="col ml-3 mb-3">
                  <img
                    class="company-logo bg-white"
                    alt="company logo"
                    width={100}
                    _v-ab01d028=""
                    src="https://img.jobi.tn/0796ce39-f07d-bf64-07c0-d2eb7c00ca22/version/crop/50x50/0-0/"
                  />
                </div>
                <div className="col">
                  <div className="card-title">
                    <span>TITEL</span>
                    <p className="heading">
                      {j.titel} &nbsp;
                      <i className="far fa-compass" />
                    </p>
                  </div>
                  <div className="card-title">
                    <span>JOBTYPE</span>
                    <p className="heading">
                      {j.jobtype.name} &nbsp;
                      <i className="far fa-compass" />
                    </p>
                  </div>
                </div>
              </div>
              <hr />

              <span>Description</span>
              <p className="text-muted">{j.description} </p>
              <div className="row d-flex align-items-center justify-content-between my-4">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-outline-success btn-sm"
                    style={{ background: "#00ff002b" }}
                  >
                    Full Time
                  </button>
                </div>
                <div className="col">
                  <span> date de debut</span>{" "}
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    style={{ background: "#dc35452e" }}
                  >
                    {j.start_date}
                  </button>
                </div>
              </div>
              <div className="mutual">
                <i className="fas fa-users" />
                &nbsp;&nbsp;<span>5 Friends work here</span>
              </div>
              <div className="row btnsubmit mt-4">
                <div className="col-md-6 col-6">
                  {!decoded ? (
                    <button
                      type="button"
                      className="btn btn-primary p-2 btn-lg"
                      disabled
                    >
                      <span>login pour postuler</span>
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        className="btn btn-primary btn-lg"
                      >
                        <span>postuler</span>
                      </button>
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">
                                postuler sur cette offre{" "}
                              </h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <div>
                                <section className="py-5">
                                  <div className="container">
                                    <Form
                                      wrapperCol={{ span: 24 }}
                                      labelCol={{ span: 24 }}
                                    >
                                      <Form.Item
                                        name="name"
                                        label="nom et prénom"
                                        rules={[
                                          {
                                            required: true,
                                            message:
                                              "Please input your full name!",
                                          },
                                        ]}
                                      >
                                        <Input />
                                      </Form.Item>
                                      <Form.Item
                                        name="email"
                                        label="Email"
                                        rules={[
                                          {
                                            required: true,
                                            message: "Please input your email!",
                                          },
                                        ]}
                                      >
                                        <Input />
                                      </Form.Item>
                       
                                      <Form.Item
                                        name="Cv"
                                        label="Cv"
                                        rules={[
                                          {
                                            required: true,
                                            message: "Please input your Cv!",
                                          },
                                        ]}
                                      >
                                        <Dragger {...props}>
                                          <p className="ant-upload-drag-icon">
                                            <InboxOutlined />
                                          </p>
                                          <p className="ant-upload-text">
                                            Click or drag file to this area to
                                            upload
                                          </p>
                                          <p className="ant-upload-hint">
                                            Support for a single or bulk upload.
                                            Strictly prohibit from uploading
                                            company data or other band files
                                          </p>
                                        </Dragger>
                                      </Form.Item>
                                      <Form.Item>
                                        <div
                                          style={{
                                            display: "flex",
                                            justifyContent: "center",
                                          }}
                                        >
                                          <Button
                                            style={{ width: "300px" }}
                                            type="primary"
                                            htmlType="submit"
                                          >
                                            Submit
                                          </Button>
                                        </div>
                                      </Form.Item>
                                    </Form>
                                  </div>
                                </section>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div className="col-md-6 col-6">
                  {" "}
                  <button type="button" className="btn btn-dark btn-lg">
                    <span>Message</span>
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Job;
