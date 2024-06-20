"use client";
import { useState } from "react";
import styles from "./PasswordChecker.module.css";

const PasswordChecker = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  //Function to handle changes in the password input
  const handlePassword = (passwordValue) => {
    //Create an object to track password strength checks
    const strengthChecks = {
      length: 0,
      hasUpperCase: false,
      hasLowerCase: false,
      hasDigit: false,
      hasSpecialChar: false,
    };

    //update the strength checks based on the password value

    strengthChecks.length = passwordValue.length >= 8 ? true : false;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(passwordValue);
    strengthChecks.hasLowerCase = /[a-z]+/.test(passwordValue);
    strengthChecks.hasDigit = /[0-9]+/.test(passwordValue);
    strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(passwordValue);

    let verifiedList = Object.values(strengthChecks).filter((value) => value);
    let strength =
      verifiedList.length === 5
        ? "Strong"
        : verifiedList.length >= 2
        ? "Medium"
        : "Weak";
    setPassword(passwordValue);
    setProgress(`${(verifiedList.length / 5) * 100}%`);
    setMessage(strength);
  };

  //Function to get the color for the progress
  const getActiveColor = (type) => {
    if (type === "Strong") return "#3FBB60";
    if (type === "Medium") return "#FE804D";
    return "#FF0054";
  };
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card_header}>
          <h2 className={styles.title}> Password Strength Checker</h2>
        </div>
        <div className={styles.card_body}>
          <div className={styles.input_container}>
            <div className={styles.input_box}>
              <input
                value={password}
                onChange={({ target }) => {
                  handlePassword(target.value);
                }}
                type={hidePassword ? "password" : "text"}
                className={styles.input}
                placeholder="Enter Password"
              />
              <a
                href="#"
                className={styles.toggle_btn}
                onClick={() => {
                  setHidePassword(!hidePassword);
                }}
              ></a>
            </div>
            <div className={styles.progress_bg}>
              <div
                className={styles.progress}
                style={{
                  width: progress,
                  backgroundColor: getActiveColor(message),
                }}
              ></div>
            </div>
          </div>

          {password.length !== 0 ? (
            //Display password strength message when a password is entered
            <p
              className={styles.message}
              style={{ color: getActiveColor(message) }}
            >
              Your Password is {message}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PasswordChecker;
