import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import * as emailjs from 'emailjs-com';
import ReCaptcha from 'react-google-recaptcha'
import M from 'materialize-css'

const Contact = () => {

  const [formData, setFormData] = useState({
    name:
    {
      value: "",
      isValid: false,
      class: ""
    },
    email:
    {
      value: "",
      isValid: false,
      class: ""
    },
    message:
    {
      value: "",
      isValid: false,
      class: ""
    }
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const recaptchaRef = React.createRef();

  // For features which must be executed once - because of the []
  useEffect(() => {
    console.log("Use effect once ?");
    emailjs.init("user_VSM3AeK2lk1H2vARunueI");
  }, []);

  // For features which must be executed for every update
  useEffect(() => {
    console.log("Use effect each ?");

    const isFormValid = !Object.values(formData).some(formInput => {
      return formInput.isValid === false;
    });

    console.log(formData);

    setIsFormValid(isFormValid);
  });

  const isInputValid = (type, value) => {
    switch (type) {
      case "name":
      case "message":
        return value !== "";
      case "email":
        return validateEmail(value);
      default:
        console.error("Unknown input type");
        return false;
    }
  }

  const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const handleInputChange = (event) => {
    event.preventDefault();

    const target = event.target;
    const name = target.name;
    const value = target.value;

    const isValid = isInputValid(name, value);
    const className = isValid ? "valid" : "invalid";

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: {
        value: value,
        isValid: isValid,
        class: className
      }
    }));
  }

  const onCaptchaChange = (value) => {
    console.log("TODO Change");
    if (value !== null && value !== undefined) {
      setFormData(prevFormData => ({
        ...prevFormData,
        isCaptchaValid: {
          value: value,
          isValid: true
        }
      }));
    }
  }

  const onCaptchaErrored = (error) => {
    //TODO 
    console.log("TODO Errored");
    console.log(error);
  }

  const onCaptchaExpired = () => {
    //TODO 
    console.log("TODO Expired");
  }

  const sendMail = (event) => {
    event.preventDefault();

    recaptchaRef.current.execute();

    console.log("Sending ...");

    // M.toast({ html: "Envoi en cours ...", classes: "info-toastr" });

    // emailjs.sendForm('gmail', 'template_ciR8ayRa', '#contact-form')
    //   .then(function (response) {
    //     M.toast({ html: "Message envoyé !", classes: "success-toastr" });
    //     // Then we clean the form
    //     console.log('SUCCESS!', response.status, response.text);
    //   }, function (error) {
    //     if (error.status === 400) {
    //       M.toast({ html: "Une erreur est survenue. Avez-vous confirmé que vous n'êtes pas un robot ?", classes: "error-toastr" });
    //     }
    //     else {
    //       M.toast({ html: "Une erreur est survenue. Contactez-moi directement sur mon adresse mail.", classes: "error-toastr" });
    //     }

    //     console.log('FAILED...', error);
    //   });
  };

  // const MyCaptcha = React.memo((props) => {
  //   console.log("My captcha init");
  //   return <ReCaptcha sitekey="6Lc-g7AUAAAAAAu219Ijm2c2m49vxwylqWfoh02m" onChange={onCaptchaChange} onErrored={onCaptchaErrored} onExpired={onCaptchaExpired}></ReCaptcha>
  // }, []);

  /* STYLING COMPONENTS */
  const CenterWrapper = styled.div`
    text-align: center;
  `

  return (
    <Layout>
      <SEO title="Contact" />
      <div className="section">
        <div className="container">
          <CenterWrapper className="row no-bottom">
            <h1 className="page-head-sub-title colored-title">Contact</h1>
            <p>Un besoin ? Un projet ? Discutons-en !</p>
          </CenterWrapper>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <form id="contact-form">
            <div className="row no-bottom">
              <div className="input-field col s12 m6 offset-m3 no-bottom">
                <input name="name" id="name" type="text" required="required" className={formData.name.class} value={formData.name.value} onChange={handleInputChange} />
                <label htmlFor="name">Nom / Prénom</label>
                <span className="helper-text" data-error="John Doe ? C'est bien toi ?"></span>
              </div>
            </div>
            <div className="row no-bottom">
              <div className="input-field col s12 m6 offset-m3 no-bottom">
                <input name="email" id="email" type="email" required="required" className={formData.email.class} value={formData.email.value} onChange={handleInputChange} />
                <label htmlFor="email">Email</label>
                <span className="helper-text" data-error="Pas de mail, pas de chocolat."></span>
              </div>
            </div>
            <div className="row no-bottom">
              <div className="input-field col s12 m6 offset-m3 no-bottom">
                <textarea name="message" id="message" className={"materialize-textarea " + formData.message.class} required="required" value={formData.message.value} onChange={handleInputChange}></textarea>
                <label htmlFor="message">Message</label>
                <span className="helper-text" data-error="Ne soyez pas timide ... :)"></span>
              </div>
            </div>
            <div className="row">
              <CenterWrapper className="input-field col s12 m6 offset-m3 mail-input">
                <ReCaptcha ref={recaptchaRef} sitekey="6Lc-g7AUAAAAAAu219Ijm2c2m49vxwylqWfoh02m" size="invisible" onChange={onCaptchaChange} onErrored={onCaptchaErrored} onExpired={onCaptchaExpired}></ReCaptcha>
              </CenterWrapper>
            </div>
            <div className="row">
              <CenterWrapper className="input-field col s12 m6 offset-m3 mail-input">
                <button className="btn waves-effect waves-light btn-large" type="submit" name="action" onClick={sendMail} disabled={!isFormValid}>
                  Envoyer
                  <i className="material-icons right">send</i>
                </button>
              </CenterWrapper>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact