import React from 'react';
import axios from 'axios';
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from "react-icons/fa"
import './contact.css';
import { useState } from 'react';

const Contact = () => {

const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({...form, [name]: value});

}

const handleSubmit = (e) => {
  e.preventDefault();

  /* La función handleSubmit se llama cuando se envía el formulario. Utiliza Axios para realizar una solicitud POST a una API (en este caso, parece ser una hoja de cálculo de Google usando Sheet.best) con los datos del formulario. Luego, limpia los campos del formulario. */

  axios.post('https://sheet.best/api/sheets/a30496a3-b7af-47dc-9111-51c6d2b41732',
  form).then((response) => {
    console.log(response);
    //clear fields
    setForm({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  });
}


  return (
    <section className="contact section" id="contact">
      <h2 className="section__title text-cs">
                Contacto
            </h2>
            <p className='section__subtitle'>
              <span></span>
            </p>
            <div className="contact__container container grid">
              <div className="contact__content">
                <div className="contact__card">
                  <span className="contact__card-icon">
                    <FaRegMap />
                  </span>
                  <h3 className="contact__card-title">Dirección</h3>
                    <p className="contact__card-data">Bilbao, 45 48000 Bilbao </p>
                </div>

                <div className="contact__card">
                  <span className="contact__card-icon">
                    <FaRegEnvelope />
                  </span>
                  <h3 className="contact__card-title">Email</h3>
                    <p className="contact__card-data">david@mail.com </p>
                </div>
                <div className="contact__card">
                  <span className="contact__card-icon">
                    <FaRegAddressBook />
                  </span>
                  <h3 className="contact__card-title">Teléfono</h3>
                    <p className="contact__card-data">666 666 666 </p>
                </div>
              </div>

            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-group grid">
                <div className="contact__form-div">
                  <label className="contact__form-tag text-cs">Full Nombre<b>*</b></label>
                  <input type="text" name='name' onChange={handleChange} value={form.name} className="contact__form-input"/>
                </div>
                <div className="contact__form-div">
                  <label className="contact__form-tag text-cs">Email<b>*</b></label>
                  <input type="email" name='email' onChange={handleChange} value={form.email} className="contact__form-input"/>
                </div>
              </div>

          
                <div className="contact__form-div">
                  <label className="contact__form-tag text-cs">Asunto<b>*</b></label>
                  <input type="text" name='subject' onChange={handleChange} value={form.subject} className="contact__form-input"/>
                </div>

             
                <div className="contact__form-div contact__form-area">
                  <label className="contact__form-tag text-cs">Mensaje<b>*</b></label>
                  <textarea name='message' onChange={handleChange} value={form.message} className="contact__form-input"></textarea>
                </div>
            
              <div className="contact__submit">
                <p>* Acpto los términos y condiciones</p>
                <button type='submit' className="btn text-cs">Enviar</button>
              </div>
            </form>
            </div>
    </section>
  );
}

export default Contact;