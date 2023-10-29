import React,{useState} from 'react'
import { toast } from 'react-toastify';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const [isValid, setIsValid] = useState(true);
    const [isPara ,setIspara] = useState(true);

    function isValidEmail(email) {
        // Your regular expression for a valid email address
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailPattern.test(email);
    }

    function handleEmailChange(e) {
        const newEmail = e.target.value;
        setEmail(newEmail); // Always update the email
    
        // Check email validity and update isValid
        setIsValid(isValidEmail(newEmail));
      }
    

    const handleSubmit = (e) => {
        if(isValid === true){
        e.preventDefault();


        axios.post('https://qmaz8f87pz.us.aircode.run/user/register',{ name, email, password })
            .then(result => {
                console.log(result)
                navigate('/');
            })
            
            .catch(err => toast.error(`${err}`));

        setName('');
        setEmail('');
        setPassword('');
        }
        else{
            setIspara(!isPara);
        }
    }
    return (
        <div className='wrapper'>
        <LoginPageContainer>
            <form onSubmit={handleSubmit} className='text-white flex flex-col justify-center items-center backdrop-blur-sm bg-white/20 ring-1 ring-white p-5 rounded-2xl w-[320px] h-[440px] '>
                <h2 className='text-orange-400 from-mono text-3xl flex justify-center font-bold mb-4'>Register</h2>
                <FormGroup className=' w-[95%]'>
                    <Label>Username:</Label>
                    <Input type="text" className=' backdrop-blur-sm  bg-white/5 hover:ease-in-out duration-700 hover:bg-white hover:text-black outline-none'
                    value={name} onChange={(e)=> setName(e.target.value)}/>
                </FormGroup>
                <FormGroup className=' w-[95%]'>
                    <Label>Email:</Label>
                    <Input type="email" className=' backdrop-blur-sm  bg-white/5 hover:ease-in-out duration-700 hover:bg-white hover:text-black outline-none'
                    value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    {isValid? null:<p className=' text-red-800'>Email is not correct</p>}
                </FormGroup>
                <FormGroup className=' w-[95%] flex flex-col'>
                    <Label className=' items-start'>Password:</Label>
                    <Input type="password" className=' backdrop-blur-sm  bg-white/5 hover:ease-in-out duration-700 hover:bg-white hover:text-black outline-none'
                    value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </FormGroup>
                <button className=" bg-yellow bg-orange-500 outline-none ring-1 ring-white rounded-lg w-[40%] p-2 font-sans text-lg shadow-2xl hover:bg-green-700 hover:ease-in-out duration-1000">login</button>
            </form>
        </LoginPageContainer>
    </div>
    )
}

export default Register