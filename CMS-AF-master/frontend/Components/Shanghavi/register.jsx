import React, {Component} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';
import  { toast }  from 'react-toastify';
import axios from 'axios';



const Register = (props) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmpassword: ''
        },
        validationSchema: yup.object({
            name: yup.string()
            .strict()
            .trim()
            .required('This field is required'),
            email: yup.string()
            .email('Enter valid email address')
            .strict()
            .trim()
            .required('This field is required'),
            password: yup.string()
            .strict()
            .trim()
            .min(5,"Minimum 5 characters required")
            .max(10,"Maximum 10 characters only")
            .required('This field is required'),
            confirmpassword: yup.string()
            .oneOf([yup.ref('password'), null], 'must be same')
            .required('This field is required'),

        }),

        onSubmit: (data) => {
            console.log(data);
            axios.post('http://localhost:5000/api/register',data)
            .then( res => {
                toast.success("Registered sucessfully");
                props.history.push('./login');
            
            })
            .catch(err => {
                toast.error(err.response.data);
            })
        }
    });


    return(
        
        <div className="container mt-4" style={{width:"700px"}}>
        <div className="jumbotron">
      
            <h4 style={{textAlign:"center"}}>Register</h4>
            <br></br>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input name="name" className="form-control" type="text" onChange={formik.handleChange} value = { formik.values.name} />
                    { formik.errors.name ? <div className="text-danger">{formik.errors.name}</div> : null}
                </div>
            
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

                <div className="form-group">
                        <label>Confirm Password</label>
                        <input name="confirmpassword" className="form-control" type="text"  onChange={formik.handleChange} value = { formik.values.confirmpassword}/>
                        { formik.errors.confirmpassword ? <div className="text-danger">{formik.errors.confirmpassword}</div>:null}
                 </div>
                 <br></br>

                 <div className = "d-flex justify-content-between">
                 <button className = "btn btn-dark" type="submit"> Submit</button> 

                 <a 
	                href= "#"
                    onClick = {() => {
                    window.location.href = 'login';
                    }}
                    >
                        Login
                    </a>

                    </div>

            </form>
        </div>
    </div>
        
    )

}

export default Register;
