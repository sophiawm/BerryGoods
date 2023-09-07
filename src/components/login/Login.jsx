import { useForm } from "react-hook-form"

import logo from "../../assets/logo-berry-goods.png"
import styles from "./login.module.css"

const Login = ()=>{

    const { register, handleSubmit} = useForm()

    const handleSubmitForm = (data)=>{
        console.log(data)
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