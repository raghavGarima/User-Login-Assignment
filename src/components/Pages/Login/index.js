import React, { useState } from "react";
import "./login.css";
import {
  TextField,
  IconButton,
  InputAdornment,
  Button,
  Grid,
  Box,
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  Parent: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    marginTop: "1%",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    color: "white",
    border: "3px solid #6B5E9E",
    borderRadius: "25px",
    backdropFilter: "blur(2px)",
    background:
      "linear-gradient(142.13deg, rgba(254, 248, 255, 0.21) 1.8%, rgba(254, 248, 255, 0) 99.75%)",
    fontStyle: "normal",
    fontWeight: "bold",
    fontFamily: "Mukta, sans-serif",
    padding: "1rem 4rem",
    backdropFilter: "blur(10px)",
    position: "relative",
    zIndex: "1",
    "& .MuiGrid-item":{
      // margin: 0;
      // box-sizing: border-box;
      justifyContent: "center",
      display: "flex",
      marginBottom: '20px',
  },
  },
  heading: {
    fontFamily: "Mukta",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "33px",
    lineHeight: "130.7%",
    margin: "10px 0px 0px 0px",
    // marginBottom: "0px",
  },
  subHeading: {
    fontSize: "20px",
    lineHeight: "130.7%",
    margin: "1.5rem",
  },
  label: {
    color: "#FFFFF",
    fontSize: "23px",
    height: "26px",
  },
  input: {
    color: "#F0F0F0",

  

    "&:hover .MuiInputLabel-root": {
      color: "#FFFFF",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#FFFFFF",
    },
    "& .MuiInput-underline": {
      // borderBottom: "2px solid #FFFFFF",
    },
    "& .MuiInput-underline::before": {
      borderBottom: "2px solid #FFFFFF",
    },
    "& .MuiInput-underline.Mui-focused::after": {
      borderBottom: "2px solid #FFFFFF",
    },
    "& .MuiInput-underline:hover:not($disabled):not($focused):not($error):before":
      {
        borderBottom: `2px solid #FFFFFF`,
      },
    "& .MuiInput-input": {
      color: "#FFFFFF",
    },
    "& .MuiSelect-select": {
      color: "#FFFFFF",
    },
  },
  LoginButton: {
    color: "#FFFFFF",
    background: "linear-gradient(232.74deg, #BE29F7 19.9%, #FB25CC 81.45%)",
    boxShadow: "3px 4px 8px rgba(234, 38, 215, 0.21)",
    borderRadius: "5px",
  },
  googleButton: {
    // border: "2px solid white",
    width: "86%",

    borderRadius: "12px",
    marginBottom: "1.5rem",
    display: "contents",
  },
  facebookButton: {
    display: "grid",
    // marginBottom: "1.5rem",
    width: "72%",
    "&& span":{
      minWidth: "72%",
    },
  },
  googleButtonText: { color: "#ffffff", fontSize: "15px", marginLeft: "6px" },
  facebookButtonText: {
    backgroundColor: "transparent",
    color: "#ffffff",
    fontSize: "17px",

    borderRadius: "12px",
    border: "2px solid white",
    width: "100%",
    height: "3rem",
    alignItems: "center",
    /* align-content: center; */
    display: "flex",
    justifyContent: "center",
    "&& i": {
      backgroundColor: "#4267B2",
      color: "#FFFFFF",
      padding: "10px",
      border: "6px solid #FFFFFF",
      height: "0.4rem",
      width: "0.5rem",
      borderRadius: "50%",
      marginRight: "0.5rem",
    },
  },
  rightCircle: {
    height: "200px",
    width: "200px",
    background: "linear-gradient( #FA5D6B, #ED078A)",
    borderRadius: "50%",
    position: "absolute",
    right: "19%",
    top: "-14%",
  },
  leftCircle: {
    height: "200px",
    width: "200px",
    background: "linear-gradient(#5653F8, #FB25CC)",
    borderRadius: "50%",
    position: "absolute",
    left: "19%",
    bottom: "-14%",
  },
  leftTriangle: {
    position: "absolute",
    top: "59%",
    left: "2%",
    transform: "rotate(23deg)",
    borderTop: "24px solid transparent",
    borderRight: "43px solid #f43978",
    borderBottom: "24px solid transparent",
    background: "linear-gradient(232.74deg, #FA5D6B 19.9%, #ED078A 81.45%)",
  },
  rightTriangle: {
    position: "absolute",
    right: "8%",
    bottom: "58%",
    transform: "rotate(23deg)",
    borderTop: "24px solid transparent",
    borderRight: "43px solid #f43978",
    borderBottom: "24px solid transparent",
    background: "linear-gradient(232.74deg, #FA5D6B 19.9%, #ED078A 81.45%)",
  },
});

export const LoginComp=()=>{


  //--------------------all states---------------------------
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const [emaillPassword, setEmaillPassword] = useState("");
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const [showError, setShowError] = useState(false);
  const [isError, setIsError] = useState({});
  const classes = useStyles();
  const navigate = useNavigate();


  //-------------------------to login manulally------------------------------------
  const handleLogin = () => {
    
    setShowError(true);
    if (email !== "" && emailValid && emaillPassword !== "") {
      let data = {
        Email: email,
        Password: emaillPassword,
      };
      localStorage.setItem('userData',JSON.stringify(data))
      navigate('/home')
  
    } else {
      if (!emailValid) {
        isError.email = "Enter valid email.";
      }
      if (email === "") {
        isError.email = "Enter your email.";
      }
      if (emaillPassword.length < 8) {
        isError.password = "Enter a valid password.";
      }
      if (emaillPassword === "") {
        isError.password = "Enter your password.";
      }
      setIsError({...isError})
    }
    
  };


  const validateEmails = async (email) => {
    setEmail(email);
    if (email !== "") {
      const pattern =
        /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!pattern.test(email)) {
       console.log(email)
      } else {
        setEmailValid(true);
      }
    }
  };

  //----------------------to handle error-----------------------------------
  const handleError = (e) => {
    isError[e.target.name] = "";
  };

  //-------------------------to login with google-------------------------
  const responseGoogle = (response) => {
    
    console.log(response);
    navigate('/home')
  };

  //-----------------------to loin with facebook-----------------------
  const responseFacebook = (response) => {
    if (Object.keys(response).length > 1) {
      dispatch({
        type: "FACEBOOK_RESPONSE",
        payload: response,
      });
      console.log(response);
      if (response && response.email) {
        signUpWithFacebook(response, response.email, history);
      } else {
        setOpenEmailModel(true);
      }
    }
  };

  //----------------------to close the email pop up--------------------------------
  const handleClose = () => {
    setOpenEmailModel(false);
    setEmail("");
    console.log("closed");
  };
  //------------------------to login after entering the email with facebook -----------------------
  const handleNext = () => {
    console.log(facebookResponse);
    console.log(email);
    signUpWithFacebook(facebookResponse, email, history);
  };
  return (
    <div className="LoginMainDiv">
      {/* <Backdrop sx={{ zIndex: "1234" }} open="true"> */}
      <Grid container className={classes.Parent} md={12}>
        <Grid item>
          <Box className={classes.rightCircle}></Box>
          <Box className={classes.leftCircle}></Box>
          <Box className={classes.leftTriangle}></Box>
          <Box className={classes.rightTriangle}></Box>
        </Grid>
        <Grid container className={classes.root} xs={10} sm={8} md={6}>
          {/* <Backdrop sx={{ zIndex: "564646" }} open="true"> */}

          <Grid item xs={12}>
            <p className={classes.heading}>Login</p>
          </Grid>
          <Grid item xs={12}>
            <p className={classes.subHeading}>
              Welcome Back Please Log in To your Account
            </p>
          </Grid>

          <form
            style={{ display: "flex", flexDirection: "column", width: "72%" }}
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin(e);
            }}
          >
            <Grid item xs={12}>
              <TextField
                id="Email"
                name="email"
                label="Email Address*"
                value={email}
                type="text"
                style={{ width: "100%" }}
                variant="standard"
                className={classes.input}
                placeholder="Enter your email"
                InputLabelProps={{ shrink: true, className: classes.label }}
                error={showError && isError.email != ""}
                helperText={isError.email}
                onChange={(e) => {
                  handleError(e);
                  validateEmails(e.target.value);
                }}
              />
            </Grid>{" "}
            <Grid item xs={12}>
              <TextField
                id="Pass"
                name="password"
                value={emaillPassword}
                label="Password*"
                style={{ width: "100%" }}
                type={isPasswordShow ? "text" : "password"}
                variant="standard"
                placeholder="Enter Password"
                className={classes.input}
                InputLabelProps={{ shrink: true, className: classes.label }}
                error={showError && isError.password != ""}
                helperText={isError.password}
                onChange={(e) => {
                  if (e.target.value.length < 14) {
                    setEmaillPassword(e.target.value);
                    handleError(e);
                  }
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <IconButton>
                        {isPasswordShow ? (
                          <VisibilityIcon
                            style={{ color: "white" }}
                            onClick={() => setIsPasswordShow(false)}
                          />
                        ) : (
                          <VisibilityOffIcon
                            style={{ color: "white" }}
                            onClick={() => setIsPasswordShow(true)}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
           
            <Grid item xs={12}>
              <Button
                variant="contained"
              
                color="primary"
                type="submit"
                style={{
                  width: "100%",
                  color: "#FFFFFF",
                  fontWeight: "600",
                  fontSize: "25px",
                  marginBottom: "1rem",
                  height: "2.6rem",
                  cursor: "pointer",
                }}
                className={classes.LoginButton}
                onClick={handleLogin}
              >
                Login
              </Button>
            </Grid>
          </form>
          <Grid item xs={12} className={classes.googleButton}>
          <GoogleOAuthProvider clientId="1016780410717-ramc91iihem7jtprg1r88rrcedr2o9re.apps.googleusercontent.com">
          <GoogleLogin
             onSuccess={responseGoogle}
             onError={()=>alert("Something went wrong !!! Try Again")}
 
/>
</GoogleOAuthProvider>
           
        </Grid>
       
      </Grid>
      </Grid>
    </div>
 )
}


