import React, { useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styled components
const LoginPageContainer = styled.div`
  padding: 0;
  margin: 0;  
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('circle.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; 
  height:90vh;
  width:100vw;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  outline:none;
  border: 1px solid #ccc;
  border-radius: 5px;
`;



function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://qmaz8f87pz.us.aircode.run/auth/login', { email, password })
      .then(result => {
        if(result.status ===  200){
        console.log(result)
        const auttoken = result.data.token;
        console.log(auttoken);
        toast.success("successfully loggd In");
        navigate('/Home');
        }
      })
      .catch(err=>toast.error(`${err} or register first`));

    setEmail('');
    setPassword('');
  }
  return (
    <div className='wrapper'>
      <ToastContainer />
      <LoginPageContainer>
      
        <form onSubmit={handleSubmit} className='text-white gap-3 flex flex-col justify-center items-center backdrop-blur-sm bg-white/20 ring-1 ring-white p-5 rounded-2xl w-[320px] h-[400px] '>
          <h2 className='text-orange-400 from-mono text-3xl flex justify-center font-bold mb-4'>Login</h2>
          <FormGroup className=' w-[95%]'>
            <Label>Email:</Label>
            <Input type="email" className=' backdrop-blur-sm  bg-white/5 hover:ease-in-out duration-700 hover:bg-white hover:text-black outline-none' value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </FormGroup>
          <FormGroup className=' w-[95%] flex flex-col'>
            <Label className=' items-start'>Password:</Label>
            <Input type="password" className=' backdrop-blur-sm  bg-white/5 hover:ease-in-out duration-700 hover:bg-white hover:text-black outline-none'
              value={password} onChange={(e) => setPassword(e.target.value)} />
          </FormGroup>
          <button className=" bg-yellow outline-none ring-1 ring-white rounded-lg w-[40%] p-2 font-sans text-lg shadow-2xl hover:bg-blue-800 hover:ease-in-out duration-1000">login</button>
        </form>
      </LoginPageContainer>
    </div>
  )
}

export default Login