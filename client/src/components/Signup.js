import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './Signup.css'
import isEmpty from 'validator/es/lib/isEmpty'
import isEmail from 'validator/es/lib/isEmail'
import equals from 'validator/es/lib/equals'
import { showErrorMsg } from '../helpers/message'

const Signup = ()=>{
    //Data from the template, using states
    const[formData,setFormData] = useState({
        username: '',
        email: '',
        password:'',
        password2: '',
        successMsg: false,
        errorMsg: false,
        loading: false
    })
    //event handlers
    const handleChange = (event) =>{
        //console.log(event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
            
        //client side validation, using validator
        if(isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(password2)){
            setFormData({
                ...formData,
                errorMsg: 'All fields are required'
            })
            
        }   else if(!isEmail(email)){
                setFormData({
                    ...formData,
                    errorMsg: 'Invalid Email'
                })
        
        } else if (!equals(password,password2)){
            setFormData({
                ...formData,
                errorMsg: 'Passwords do not match.'
            })

        } else{
            //SUCCESS 

        }

    }
    
    const {username,email,password,password2,successMsg,errorMsg,loading} = formData 
    //VIEWS
    const showSignupForm = ()=>(
        <form className="signup-form" onSubmit={handleSubmit}>
            {/* username*/ }
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>
                    </span>
                </div>
                <input name='username' className='form-control' placeholder='Username' type='text' value={username} onChange={handleChange}/>
            </div>
            {/*email*/ }
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-envelope'></i>
                    </span>
                </div>
                <input name='email' className='form-control' placeholder='Email address' type='email' value={email} onChange={handleChange}/>
             </div>
             {/*password*/ }
             <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
                    </span>
                </div>
                <input name='password' className='form-control' placeholder='Create password' type='password' value={password} onChange={handleChange}/>
             </div>
             {/*password 2*/ }
             <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
                    </span>
                </div>
                <input name='password2' className='form-control' placeholder='Confirm password' type='password' value={password2} onChange={handleChange}/>
             </div>
             {/*Signup  button*/}
             <div className='form-group'>
                <button type='submit' className='btn btn-primary mr-2'>
                    Create Account
                </button>
                {/*already have an account*/}
                <Link className='btn btn-primary' to='/signin'>Have an Account? Sign in</Link>
             </div>
             
        </form>

    );

    //RENDERING FORM
    return(
        <div className='signup-container '>
            <div className='row px-3 vh-100 '>
                <div className='col-md-5 mx-auto mt-5'>
                    {showSignupForm()}
                    {errorMsg && showErrorMsg(errorMsg)} {/*if the error msg from the state is true then display the alert imported from bootstrap*/}
                  
                    {/*<p>{JSON.stringify(formData)}</p>*/}
                </div>
            </div>
            
        </div>
    )
}

export default Signup