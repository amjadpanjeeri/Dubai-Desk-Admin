import React from "react";
import { useState } from "react";
import { auth } from "../firebase/clientApp";
import { collection, getDocs } from "firebase/firestore";
import { db, app } from "../firebase/clientApp";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
    // e.preventDefault();
    // console.log(email, password);
    // const result = await auth.createUserWithEmailAndPassword(email, password);
    // await result.user.updateProfile({
    //   email: email,
    // });
  };
  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="">
            <b>Dubai</b>Desk
          </a>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <form
              action="/dashboard"
              // onSubmit={(e) => handleSubmit(e)}
              method="post"
            >
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
            <div className="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google mr-2"></i> Sign in using Google
                Account
              </a>
            </div>
            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
