import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { User, Mail, Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";

import { signUpStyles } from "../assets/dummyStyles";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // ================= SUBMIT FUNCTION =================
  const handleSubmit = (e) => {
    e.preventDefault();

    // check empty fields
    if (!name.trim() || !email.trim() || !password.trim()) {
      toast.error("Please fill in all fields.", {
        position: "top-right",
        autoClose: 4000,
        theme: "light",
      });
      return;
    }

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 4000,
        theme: "light",
      });
      return;
    }

    // require remember me
    if (!rememberMe) {
      toast.error("Please tick 'Remember me' to continue.", {
        position: "top-right",
        autoClose: 4000,
        theme: "light",
      });
      return;
    }

    // console log (for dev)
    console.log("Signup form submitted:", {
      name,
      email,
      password,
      rememberMe,
      timestamp: new Date().toISOString(),
    });

    // success toast
    toast.success("Signup successful", {
      position: "top-right",
      autoClose: 1200,
      theme: "light",
    });

    // redirect
    setTimeout(() => {
      navigate("/login");
    }, 1250);
  };

  // ================= UI =================
  return (
    <div
      className={signUpStyles.pageContainer}
      style={signUpStyles.pageFontStyle}
    >
      <ToastContainer />

      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/login")}
        className={signUpStyles.backButton}
      >
        <ArrowLeft className={signUpStyles.backIcon} />
        <span className={signUpStyles.backText}>Back to Login</span>
      </button>

      <div className={signUpStyles.formContainer}>
        <div className={signUpStyles.card}>
          <div className={signUpStyles.decorativeCircle}></div>

          <h1
            className={signUpStyles.title}
            style={signUpStyles.pageFontStyle}
          >
            Create Account
          </h1>

          <p className={signUpStyles.subtitle}>
            Simple Signup to get you started - light & clean.
          </p>

          <form
            onSubmit={handleSubmit}
            className={signUpStyles.form}
          >
            {/* ================= NAME ================= */}
            <label className={signUpStyles.label}>Full Name</label>
            <div className={signUpStyles.inputContainer}>
              <div className={signUpStyles.inputIconContainer}>
                <User className={signUpStyles.inputIcon} />
              </div>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Full Name"
                className={signUpStyles.inputField}
                required
              />
            </div>

            {/* ================= EMAIL ================= */}
            <label className={signUpStyles.label}>Email</label>
            <div className={signUpStyles.inputContainer}>
              <div className={signUpStyles.inputIconContainer}>
                <Mail className={signUpStyles.inputIcon} />
              </div>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@example.com"
                className={signUpStyles.inputField}
                required
              />
            </div>

            {/* ================= PASSWORD ================= */}
            <label className={signUpStyles.label}>Password</label>
            <div className={signUpStyles.inputContainer}>
              <div className={signUpStyles.inputIconContainer}>
                <Lock className={signUpStyles.inputIcon} />
              </div>

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className={signUpStyles.inputField}
                required
              />

              {/* 👁 TOGGLE BUTTON */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={signUpStyles.passwordToggleButton}
              >
                {showPassword ? (
                  <EyeOff
                    className={signUpStyles.passwordToggleIcon}
                  />
                ) : (
                  <Eye
                    className={signUpStyles.passwordToggleIcon}
                  />
                )}
              </button>
            </div>

            {/* ================= REMEMBER ME ================= */}
            <div className={signUpStyles.checkboxContainer}>
              <label className={signUpStyles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className={signUpStyles.checkboxInput}
                />
                <span className={signUpStyles.checkboxText}>
                  Remember me
                </span>
              </label>
            </div>

            {/* ================= SUBMIT ================= */}
            <button
              type="submit"
              className={signUpStyles.submitButton}
            >
              Sign up
            </button>
          </form>

          {/* ================= LOGIN LINK ================= */}
          <div className={signUpStyles.bottomContainer}>
            <span className={signUpStyles.bottomText}>
              Already have an account?{" "}
            </span>

            <a
              href="/login"
              className={signUpStyles.loginLink}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;