
/**
 * This is my first file that I used to think would work with the firebase,
 * never got to try though.
 * 
 * Notable things I tried with this file:
 * 
 * basically this is a file which can switch between 
 * sign in and sign up with just a click of the button,
 * but not as I used to think, it does not change the address 
 * of the actual page so it could be a bad or a good thing,
 * depends on what you want to do with the page. 
 * 
 * For me is not really convinient, at this point I don't know 
 * why but I don't like the page much, from the design aspect is
 * shum dhip ama se di akoma pse karin s'më pëlqen.
 */

import React, { useState } from "react"

export default function (props) {
    let [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
        return (
            <div className = "Auth-form-container">
            <form className = "Auth-form">
                <div className = "Auth-form-content">
                    <h1 className = "Auth-form-title">Sign In</h1>
                    <div className="text-center">
                        Not registered yet?{ " " }
                        <span className="link-primary" onClick={changeAuthMode}>
                            Sign Up
                        </span>
                    </div>
                    <div className = "form-group mt-3">
                        <label>Email address</label>
                        <input 
                            type = "email" 
                            className = "form-control mt-1" 
                            placeholder = "Enter email" 
                        />
                    </div>
                    <div className = "form-group mt-3">
                        <label>Password</label>
                        <input
                            type = "password"
                            className = "form-control mt-1"
                            placeholder = "Enter password"
                        />
                    </div>
                    <div className = "d-grip gap-2 mt-3">
                        <button type = "submit" className = "btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className = "forgot-password text-right mt-2">
                        Forgot <a href = "#">password?</a>
                    </p>
                </div>
            </form>
        </div>
        )
    }
    return (
        <div className = "Auth-form-container">
            <form className = "Auth-form">
                <div className = "Auth-form-content">
                    <h1 className = "Auth-form-title">Sign In</h1>
                    <div className="text-center">
                        Already Registered?{ " " }
                        <span className="link-primary" onClick={changeAuthMode}>
                            Sign In
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input 
                            type = "text"
                            className="form-control mt-1"
                            placeholder="f.e: Uncrowned King"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>IB&CM Branch</label>
                        <input 
                            type = "text"
                            className="form-control mt-1"
                            placeholder="f.e: FinTech"
                        />
                    </div>
                    <div className = "form-group mt-3">
                        <label>Email address</label>
                        <input 
                            type = "email" 
                            className = "form-control mt-1" 
                            placeholder = "Enter email" 
                        />
                    </div>
                    <div className = "form-group mt-3">
                        <label>Password</label>
                        <input
                            type = "password"
                            className = "form-control mt-1"
                            placeholder = "Enter password"
                        />
                    </div>
                    <div className = "d-grip gap-2 mt-3">
                        <button type = "submit" className = "btn btn-primary">
                            Submit
                        </button>
                    </div>
                    <p className = "forgot-password text-right mt-2">
                        Forgot <a href = "#">password?</a>
                    </p>
                </div>
            </form>
        </div>
    )
}