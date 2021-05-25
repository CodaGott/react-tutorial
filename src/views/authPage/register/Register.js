import Button from '../../../componenets/reuseables/Button'
import Input from '../../../componenets/reuseables/Input'
import './Register.css'
import { useEffect } from 'react'



const Register = () => {

    let data = {
        email: '',
        username: '',
        password: '',
    }
    const getData = (key, value) =>{
        data[key] = value
    }

    const logData = () => {
        console.log(data)
    }

    useEffect(() => {
        console.log("Register: I mounted")
        return () => console.log("Register: I unmounted")
    }, [])

    return (
        <div>
           <h5>Sign-Up</h5>
           <div className="loginContainer">
               <Input label="Email" getData={getData} dataKey="email" icon="email"/>
               <Input label="Username" getData={getData} dataKey="username" icon="username"/>
               <Input label="Password" getData={getData} dataKey="password" icon="password"/>
               <Input label="Confirm Password" getData={getData} dataKey="password" icon="password"/>
           </div>

           <div className="loginBtn">
               <Button color='black' text='login' width='100%' outline={false} action={logData} key="" />
           </div>
        </div>
    )
}



export default Register
