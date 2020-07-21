import React from 'react';
import './Signup.css'


const Signup = ()=>{
    const showSignupForm = ()=>(
        <form className="signup-form">
            {/* username*/ }
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-user'></i>
                    </span>
                </div>
                <input name='' className='form-control' placeholder='Username' type='text' />
            </div>
            {/*email*/ }
            <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-envelope'></i>
                    </span>
                </div>
                <input name='' className='form-control' placeholder='Email address' type='email' />
             </div>
             {/*password*/ }
             <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
                    </span>
                </div>
                <input name='' className='form-control' placeholder='Create password' type='password' />
             </div>
             {/*password 2*/ }
             <div className='form-group input-group'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>
                        <i className='fa fa-lock'></i>
                    </span>
                </div>
                <input name='' className='form-control' placeholder='Confirm password' type='password' />
             </div>
             {/*Signup  button*/}
             <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-block'>
                    Create Account
                </button>
             </div>
             {/*already have an account*/}
                <p className='text-center text-white'>
                    Have an account? <a href='/signin'>Log in</a>
                </p>
        </form>

    );

    //RENDERING FORM
    return(
        <div className='signup-container'>
            {showSignupForm()}
        </div>
    )
}

export default Signup