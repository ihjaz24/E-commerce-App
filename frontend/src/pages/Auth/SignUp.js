import React,{useState} from 'react'
import Layout from '../../components/layout/Layout'
import {toast} from 'react-toastify'

const SignUp = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')

    //form funnction
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(name,email,password,phone,address)
        toast.success('sign up succesfully')
    }
  return (
    <Layout title='Sign Up'>
        <div className='signUp'>
            <h1>Sign up page</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder='enter your name' value={name} onChange = {(e) => setName(e.target.value)} required />
                    
                </div>
                <div className="mb-3">
                    
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder='enter email addrress' value={email} onChange = {(e) => setEmail(e.target.value)} required />
                    
                </div>
                <div className="mb-3">
                    
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='enter password' value={password} onChange = {(e) => setPassword(e.target.value)} required/>
                </div>
                <div className="mb-3">
                    
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder='enter Phone Number' value={phone} onChange = {(e) => setPhone(e.target.value)} required/>
                </div>
                <div className="mb-3">
                   
                    <input type="text" className="form-control" id="exampleInputPassword1"  placeholder='enter Address' value={address} onChange = {(e) => setAddress(e.target.value)} required/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </Layout>
  )
}

export default SignUp
