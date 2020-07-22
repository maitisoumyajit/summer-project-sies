import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './Signup.css'


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
                <button type='submit' className='btn btn-primary btn-block'>
                    Create Account
                </button>
             </div>
             {/*already have an account*/}
            <div className='text-center'>
                <Link className='btn btn-primary btn-block' to='/signin'>Have an Account? Sign in</Link>
            </div> 
        </form>

    );

    //RENDERING FORM
    return(
        <div className='signup-container '>
            <div className='row px-3 vh-100 '>
                <div className='col-md-5 mx-auto mt-5'>
                    {showSignupForm()} 
                    {/*<p>{JSON.stringify(formData)}</p>*/}
                </div>
            </div>
            
        </div>
    )
}

export default Signup