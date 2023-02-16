import React from "react";
import { useState } from "react";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import urlApi from "../../ulr";
import styles from "../welcome/Welcome.module.css"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Welcome() {
    const [isShow, setIsShow] = useState(false);
  const [showInfo, setshowInfo] = useState(false);

  const show = () => {
    setshowInfo(true);
  };

  const dispatch = useDispatch();

  const verify = createAsyncThunk("verify", async (id) => {
    try {
      let token = localStorage.getItem("token");
      let headers = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.get(`${urlApi}api/auth/verify/${id}`, headers);
      return res;
    } catch (error) {}
  });

  const { verify_Code } = useParams();
  console.log(verify_Code);

  dispatch(verify(verify_Code));

  return (
    
        <div className={styles.container}>
          <div className={styles.logo}>
            <img
              src="../../assets/nebulaIsotipe.png"
              className={styles.imagen}
              alt=""
            />
          </div>
          <div className={styles.containerButton}>
            {!showInfo ? (
              <button className={styles.button} onClick={show}>
                Get Started
              </button>
            ) : (
              <div className={styles.info}>
                <p>your</p>
                <Link to={"/signin"} className={styles.link}>
                Your account has been verificated please signin 
                </Link>
              </div>
            )}
          </div>
        </div>
      );
    };
    
   
