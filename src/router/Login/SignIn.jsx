import React, { useRef } from "react"
import { useDispatch,useSelector } from 'react-redux'
import { Link as Anchor,useNavigate } from 'react-router-dom'
import styles from "./SignIn.module.css"

import authActions from "../../store/auth/actions"

const { iniciar_sesion } = authActions

const SignIn = () => {

    const { messages } = useSelector(store => store.auth)
    console.log(messages)
	const dispatch = useDispatch()
	const mail = useRef("")
	const password = useRef("")
    const navigate = useNavigate()

	 const captureData = async(e) =>{
	 	e.preventDefault()
	 	console.log(mail.current.value,password.current.value)
	 	let data = {
             mail: mail.current.value,
             password: password.current.value
	 	}
	 	let res = await dispatch(iniciar_sesion(data))
         if (res.payload.success) {
             navigate("/",{ replace:true })
         }      
	 }
 
    return (
        <main className={styles.maincontainer} >
            <div>
                <div className={styles.nebulacontainer}>
                    <img src ="/assets/nebulaIsotipeLogotipePosibleVersion.png" className={styles.nebulalogo} />
                </div>
                <form action="post" className={styles.formcontainer} >
                    <fieldset className={styles.fieldsetcontainer}>
                        <label htmlFor="mail"></label>
                        <input className={styles.emailinput} type="text" placeholder='Put your e mail here'id='mail'  ref={mail} />
                        <label htmlFor="pass"></label>
                        <input className={styles.passwordinput}  type="password" id='pass' placeholder='Password'  ref={password} />
                        <input  onClick={captureData}  className={styles.send} type="submit" value="Signin" />
                    </fieldset>
                    <div className={styles.containershape} >
                        <div className={styles.shape}>
                        </div>
                        <p className={styles.por}>OR</p>
                        <div className={styles.shape2}>
                        </div>
                    </div>
                    
                    <div className={styles.containeranchortosignup}>
                        <Anchor to={"/signup"} className={styles.anchortosignup}>Create a free nebula account here</Anchor>
                    </div>
                </form>
            </div>
        </main>
    )

}

export default SignIn