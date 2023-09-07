import { useForm } from "react-hook-form"
import {useNavigate} from "react-router-dom"

import logo from "../../assets/logo-berry-goods.png"
import styles from "./login.module.css"

const Login = ()=>{

    const { register, handleSubmit} = useForm()

    const navigate = useNavigate()

    const handleSubmitForm = async (data)=>{
       

        let result = await fetch(`http://localhost:3000/users`)
        let users = await result.json()

        users.filter( user =>{
            if( data.email == user.userName && data.password == user.pass ){
                navigate(`/products`)
            }else{
                console.log("error en la contraseña o email")
            }
        })
    }


    return (
        <>
            <div className={styles.loginFormContainer}>
                <img src={logo}/>
                <h2 className={styles.loginTitle}>Login to your Account</h2>
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <div>
                        <input 
                            placeholder="Email" 
                            className={styles.loginInput}
                            {...register('email',{required:true})}
                        />
                    </div>
                    <div>
                        <input 
                            placeholder="Password" 
                            className={styles.loginInput}
                            {...register('password',{required:true})}
                        />
                    </div>

                    <div>
                        <button className={styles.buttonSubmit}>Sign in</button>
                    </div>
                    
                    
                </form>
                

            </div>
            
        </>
    )
}

export default Login