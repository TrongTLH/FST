import { Link } from "react-router-dom";
import './SignIn.css';
import { Button, Divider, Form, Input, Typography, message } from "antd";
import { GoogleOutlined } from "@ant-design/icons";



const SignUp = () => {
  
  return(
    <div className="SignIn" >
        <Form className="LoginForm">
        <Typography.Title>Sign Up Account</Typography.Title>
          <Form.Item label="Name" name={"myName"}>
          <Input placeholder="Enter your Name"/>
          </Form.Item>
          <Form.Item label="Email" name={"myEmail"}>
          <Input placeholder="Enter your Email"/>
          </Form.Item>
          <Form.Item label="Password" name={"password"}>
          <Input placeholder="Enter your Email"/>
          </Form.Item>
          <Form.Item label="Confirm" name={"myConfirm Password"}>
          <Input placeholder="Enter your Confirm Password"/>
          </Form.Item>
          
        <Button type="primary" htmlType="submit" block>SignUp</Button>
        <div className="create">
            <span>New Here? <Link to='/SignIn'>Sign In</Link></span>
          </div>
        <Divider style={{borderColor: "black"}}>or Login with</Divider>
        

        <div className="socialogin">
          <GoogleOutlined className="socailIcon"/>
        </div>
        </Form>
        
    </div>
  );
};

  export default SignUp
