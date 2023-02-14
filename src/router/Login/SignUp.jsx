import React, { useRef } from "react"
import { useDispatch,useSelector } from 'react-redux'
import { Link as Anchor,useNavigate } from 'react-router-dom'
import styles from "./SignUp.module.css"

import authActions from "../../store/auth/actions"
const { registrar_usuario } = authActions

const SignUp = () => {

    const { messages } = useSelector(store => store.auth)
    console.log(messages)
	const dispatch = useDispatch()
	const mail = useRef("")
	const photo = useRef("")
	const password = useRef("")
    const navigate = useNavigate()

	const captureData = async(e) =>{
		e.preventDefault()
		//console.log(mail.current.value,photo.current.value,password.current.value)
		let data = {
            mail: mail.current.value,
            photo: photo.current.value,
            password: password.current.value
		}
        console.log(data)
		let res = await dispatch(registrar_usuario(data))
        if (res.payload.success) {
            navigate("/",{ replace:true })
        } /* configurar alerta */       
	}

    return (
        <main className={styles.maincontainer} >
            <div>
            <div className={styles.nebulacontainer}>
                    <img src ="/assets/nebulaIsotipeLogotipePosibleVersion.png" className={styles.nebulalogo} />
                </div>
                <div className={styles.psignupcontainer}>
                    <p className={styles.psignup}>Create your free nebula account here </p>
                </div>
                <form action="post" className={styles.formcontainer}>
                    <fieldset className={styles.fieldsetcontainer}>
                        <input  type="text" placeholder="Email" ref={mail} className={styles.emailinput}/>
                        <input  type="text" placeholder="Photo" ref={photo} className={styles.emailinput}/>
                        <input  type="password" placeholder="Password" ref={password} className={styles.emailinput}/>
                        <input onClick={(e)=>captureData(e)} type="submit" value="SignUp" className={styles.send} />
                    </fieldset>
                </form>
            </div>
        </main>
    )

}

export default SignUp