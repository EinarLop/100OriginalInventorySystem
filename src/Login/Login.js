import React, { Component } from 'react';
import styles from './LoginStyles.module.scss';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
        this.onSubmitt= this.onSubmitt.bind(this);

    
        this.state = {
          username: "",
          password: "",
          message: "",
          redirect: false
        };
    }

    onSubmitt(){
        let msg = <p style={{color: 'orange'}}>Logging in...</p>; 
        this.setState({
            message: msg
        });
        const user = {
            username : this.state.username,
            password: this.state.password
        }
         axios.post("https://api100originalinventorysystem.herokuapp.com/login", user, { withCredentials: true })
           .then((res) => {
             console.log(res);
             this.setState({
                 redirect: true,
             })
           })
           .catch((error) => {
             console.log(error);
             if (error.response.status === 400) {
                let msg = <p style={{color: 'red'}}>Username / password is incorrect</p>
                this.setState({
                    message: msg
                })
            }
           });
    }
    
    onChange(e, val) {
        this.setState({
          [val]: e.target.value,
          error_msg: ""
        });
    }

    showPassword() {
        var x = document.getElementById("pass");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
    }

    render() {
        return(
            this.state.redirect ? <Redirect to="/showproducts"/> :
            <div className={styles.Wrapper}>
                    <div className={styles.Form}>
                        <h1 className={styles.Title}>Login</h1>
                            <input
                            className={styles.Input}
                            placeholder="Username"
                            onChange={(e) => this.onChange(e, "username")}
                            ></input>

                            <input
                                type="Password"
                                className={styles.InputP}
                                placeholder="Password"
                                id = "pass"
                                onChange={(e) => this.onChange(e, "password")}
                            ></input>
                    </div>
                    <div className={styles.check}>
                                <label><input type="checkbox" className={styles.InputCheck} onClick={(e) => this.showPassword()}></input>Show password</label>
                                
                    </div>

                    <div className={styles.Form}>
                        {this.state.message}
                        <button className={styles.Button} onClick={(e) => this.onSubmitt()}>
                            Login 
                        </button>
                        <a href="https://drive.google.com/file/d/1xDVeLJBNIu_abjGxBLL_j7-9NY0BbZK5/view?usp=sharing
">AVISO DE PRIVACIDAD</a>
                    </div>
            </div>
        );
    }
}

export default Login;