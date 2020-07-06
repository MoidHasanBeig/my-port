import React,{ useState } from 'react';
import './contact.styles.scss';
import './contact.responsive.scss';
import Heading from '../components/Heading/Heading';

function Contact(props) {

  const [inputValue,setInputValue] = useState({
    name:'',
    email:'',
    body:''
  });

  function handleChange(evt) {
    const {name,value} = evt.target;

    setInputValue(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    window.Email.send({
      Host : "smtp.elasticemail.com",
      Username : "mhbdgr8@gmail.com",
      Password : "FACFDF44CF1D4CD83FE8165BA917AE58EF64",
      To : 'mhbdgr8@gmail.com',
      From : 'mhbdgr8@gmail.com',
      Subject : inputValue.name + ' ' + inputValue.email,
      Body : inputValue.body
    }).then(
      () => {
        setInputValue({
          name:'',
          email:'',
          body:''
        });
        alert('Thank you for your message!');
      }
    );
  }

  return (
    <div className="contact-container">
      <div className="contact-section section" id="contact">
        <Heading text="Contact me" />
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>
              <input className="text-field" required type="text" placeholder="Your name (Or maybe an alias?)" name="name" value={inputValue.name} onChange={handleChange} />
            </label>
            <label>
              <input className="text-field" required type="email" placeholder="Your email (Don't worry! Won't spam.)" name="email" value={inputValue.email} onChange={handleChange} />
            </label>
            <label>
              <textarea className="text-field" required type="text" placeholder="Drop me a message (I'm all ears)" name="body" value={inputValue.body} onChange={handleChange} />
            </label>
            <input className="submit-btn" type="submit" value="" />
          </form>
        </div>
        <div className="social-container">
          <a target="blank" href="https://www.linkedin.com/in/moidhasanbeig/" className="ico-container linkedin">
            <div className="social-ico linkedin-ico" />
          </a>
          <a target="blank" href="https://github.com/MoidHasanBeig" className="ico-container git">
            <div className="social-ico git-ico" />
          </a>
          <a target="blank" href=" https://wa.me/918838681753" className="ico-container wa">
            <div className="social-ico wa-ico" />
          </a>
          <a target="blank" href="mailto:mhbdgr8@gmail.com" className="ico-container gmail">
            <div className="social-ico gmail-ico" />
          </a>
        </div>
        <div className={`zing ${props.dark && "invert"}`} />
        <div className="year">{new Date().getFullYear()}</div>
      </div>
    </div>
  );
}

export default Contact;

//FACFDF44CF1D4CD83FE8165BA917AE58EF64
