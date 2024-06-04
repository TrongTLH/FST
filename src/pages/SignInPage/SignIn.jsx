import { Link } from "react-router-dom";
import './SignIn.css';
import { Button, Divider, Form, Input, Typography, message } from "antd";
import { GoogleOutlined } from "@ant-design/icons";


const SignIn = () => {
  return(
    <div className="SignIn" >
        <Form className="LoginForm">
        <Typography.Title>Welcome Back</Typography.Title>
          <Form.Item label="Email" name={"myEmail"}>
          <Input placeholder="Enter your Email"/>
          </Form.Item>
          <Form.Item label="Password" name={"myPassword"}>
          <Input placeholder="Enter your Password"/>
          </Form.Item>
          
          <Button type="primary" htmlType="submit" block>Login</Button>
          <div className="create">
            <span>New Here? <Link to='/signup'>Sign Up</Link></span>
          </div>

        <Divider style={{borderColor: "black"}}>or Login with</Divider>
        

        <div className="socialogin">
          <GoogleOutlined className="socailIcon"/>
        </div>
        </Form>
        
    </div>
  );
};

export default SignIn;