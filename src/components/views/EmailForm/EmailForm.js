import React, { Component } from "react";
import classes from "./style.module.css";

export default class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
  }

  state = {
    email: "",
    err: false,
  };

  componentDidMount() {
    this.emailRef.current.addEventListener("focusout", (e) => {
      if (!this.state.email) {
        e.target.nextSibling.style.transform = "translateY(-50%)";
        e.target.nextSibling.style.fontSize = ".9rem";
      }
    });
  }

  emailOnChange(e) {
    this.setState({
      email: e.target.value,
    });
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      this.setState({
        err: true,
      });
      e.target.style.borderBottom = "2px solid #ffa00a";
    } else {
      this.setState({
        err: false,
      });
      e.target.style.borderBottom = "none";
    }
  }

  emailOnFocus(e) {
    e.target.nextSibling.style.transform = "translateY(-130%)";
    e.target.nextSibling.style.fontSize = "12px";
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("das");
    if (this.state.email === "") {
      this.emailRef.current.focus();
    }
  }

  render() {
    const { email, err } = this.state;
    return (
      <form
        onSubmit={this.onSubmit.bind(this)}
        className={classes["email-form"]}
        action=""
        method="GET"
      >
        <h3 className={classes["email-form-title"]}>
          İzlemeye hazır mısınız? Üyelik oluşturmak veya üyeliğinize erişmek
          için e‑posta adresinizi girin.
        </h3>
        <div className={classes["email-wrapper"]}>
          <ul>
            <li>
              <div className={classes["email-container"]}>
                <div className={classes["input-area"]}>
                  <input
                    ref={this.emailRef}
                    onFocus={this.emailOnFocus.bind(this)}
                    value={email}
                    onChange={this.emailOnChange.bind(this)}
                    type="email"
                    name="email"
                    id="email"
                    tabIndex="0"
                    autoComplete="email"
                    maxLength="50"
                    minLength="5"
                  />
                  <span className={classes["input-label"]}>E-posta adresi</span>
                </div>
                <div
                  style={{ opacity: err ? "1" : "0" }}
                  className={classes["input-error"]}
                >
                  Lütfen e‑posta adresini girin
                </div>
              </div>
            </li>
          </ul>
          <div className={classes["form-button-wrapper"]}>
            <button type="submit" className={classes["form-button"]}>
              <span className={classes["form-button-text"]}>
                İzlemeye Başlayın
              </span>
              <span className={classes["form-button-icon"]}>
                <svg viewBox="0 0 6 12">
                  <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </form>
    );
  }
}
