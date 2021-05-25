import { useEffect } from 'react'
import Button from '../../../componenets/reuseables/Button'
import Input from '../../../componenets/reuseables/Input'
import './Login.css'



const Login = () => {
    let data = {
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
        console.log("Login: I mounted")
        return () => console.log("Login: I unmounted")
    }, [])
    return (
       <div>
           <h5>Welcome</h5>
           <div className="loginContainer">
               <Input label="Username" getData={getData} dataKey="username" icon="username"/>
               <Input label="Password" getData={getData} dataKey="password" icon="password" />
           </div>

           <div className="loginBtn">
               <Button color='black' text='login' width='100%' outline={false} action={logData} key="" />
           </div>
       </div>
    )
}

export default Login
