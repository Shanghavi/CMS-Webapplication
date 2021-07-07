import React, {Component} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';



const Login = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: yup.object({
           
            email: yup.string()
            .email('Enter valid email address')
            .strict()
            .trim()
            .required('This field is required'),
          
            password: yup.string()
            .strict()
            .trim()
            .required('This field is required'), 

        }),

        onSubmit: (data) => {
            
            axios.post('http://localhost:5000/api/login',data)
            .then( res => {
                toast.success("login sucessfully");
                localStorage.setItem('auth',JSON.stringify(res.data));
             
               props.history.push('./Home');
                
               
            })
            .catch(err => {
                toast.error(err.response.data);
            })
            
        }
    });


    return(
        <div className="container mt-4"  style={{width:"550px"}}>
        <div className="jumbotron">
            <h4 style={{textAlign:"center"}}>Login</h4>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                

                <div className="form-group">
                        <label>Email</label>
                        <input name="email" className="form-control" type="text" onChange={formik.handleChange} value = { formik.values.email}/>
                        { formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                </div>
              
                <div className="form-group">
                        <label>Password</label>
                        <input name="password" className="form-control" type="text" onChange={formik.handleChange} value = { formik.values.password}/>
                        { formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                </div>

               <br></br>

                 <div className = "d-flex justify-content-between">
                 <button className = "btn btn-secondary" type="submit"> Submit</button> 

                 <a 
	                href= "#"
                    onClick = {() => {
                    window.location.href = 'register' ;
                    }}
                    >
                        Register
                    </a>

                    </div>

            </form>
        </div>
    </div>
        
    )

}

export default Login;