import React from "react";
import "antd/dist/antd.css";
import { Form, Input } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload, Button } from "antd";
const { Dragger } = Upload;

const Condidacy = () => {
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
  return (
    <div>
      <section className="py-5">
        <div className="container pt-5">
          <h3>Condidacy</h3>
          <Form wrapperCol={{ span: 24 }} labelCol={{ span: 24 }}>
            <Form.Item
              name="firstname"
              label="Nom"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="lastname"
              label="Prénom"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Téléphone"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Cv"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from
                  uploading company data or other band files
                </p>
              </Dragger>
            </Form.Item>
            <Form.Item>
              <div style={{ display: "flex", justifyContent: "center" }}>
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
  );
};

export default Condidacy;
