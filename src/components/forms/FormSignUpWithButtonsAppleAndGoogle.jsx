import styled from 'styled-components';

import { FaHandHoldingMedical, FaApple } from 'react-icons/fa';
import {
  CiLock,
  CiMail,
  CiUser,
  CiMoneyCheck1,
  CiMedicalClipboard,
  CiMobile3,
  CiLocationOn,
  CiCreditCard2
} from 'react-icons/ci';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../../hooks/useAuth.jsx';
import { useState } from 'react';
import MessageWithHeartToggle from '../toggles/MessageWithHeartToggle.jsx';
import MaskedInput from 'react-text-mask';

export default function FormSignUpWithButtonsAppleAndGoogle() {
  const { signIn } = useAuth();

  const [signUpData, setSignUpdata] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    crm: '',
    speciality: '',
    phone: '',
    locality: '',
    cpf: ''
  });

  const [stateColorButton, setStateCollorButton] = useState('#ffffff');

  const handleChangeText = e => {
    setSignUpdata({ ...signUpData, [e.target.name]: e.target.value });
  };

  function newLogin(event) {
    event.preventDefault();

    console.log(signUpData);
  }

  if (stateColorButton === '#e21a27' && signUpData.email.length > 0) {
    setStateCollorButton('#ffffff');
  }

  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);
  return (
    <FormSignUpWithButtonsAppleAndGoogleStyle isChecked={isChecked}>
      <form class="form_container" onSubmit={newLogin}>
        <div class="logo_container">
          <FaHandHoldingMedical />
        </div>
        <div class="title_container">
          <p class="title">DrivenCare</p>
          <span class="subtitle">
            Entre ou cadastre-se para ter menos stress e mais saúde
          </span>
        </div>
        <br />
        <div className="NoGap">
          <div className="containerLine">
            <div class="input_container">
              <label class="input_label" for="email_field">
                Nome
              </label>
              <CiUser className="iconInput" size={20} />
              <input
                required
                placeholder="João Alberto Corrêa"
                title="Input title"
                name="name"
                type="text"
                class="input_field"
                id="email_field"
                value={signUpData.name}
                onChange={handleChangeText}
              />
            </div>
            <div class="input_container inputEmail">
              <label class="input_label" for="email_field">
                Email
              </label>
              <CiMail className="iconInput" size={20} />
              <input
                required
                placeholder="name@mail.com"
                title="Input title"
                name="email"
                type="text"
                class="input_field"
                id="email_field"
                value={signUpData.email}
                onChange={handleChangeText}
              />
            </div>
          </div>
          <div className="containerLine">
            <div class="input_container">
              <label class="input_label" for="password_field">
                Senha
              </label>
              <CiLock className="iconInput" size={20} />
              <input
                required
                placeholder="Senha super incrível"
                title="Input title"
                name="password"
                type="password"
                class="input_field"
                id="password_field"
                value={signUpData.password}
                onChange={handleChangeText}
              />
            </div>
            <div class="input_container">
              <label class="input_label" for="password_field">
                Confirmar senha
              </label>
              <CiLock className="iconInput" size={20} />
              <input
                required
                placeholder="Senha super incrível"
                title="confirmar Senha"
                name="confirmPassword"
                type="password"
                class="input_field"
                id="confirmPassword_field"
                value={signUpData.confirmPassword}
                onChange={handleChangeText}
              />
            </div>
          </div>
        </div>
        <MessageWithHeartToggle
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
        <div className="NoGap medicForm">
          <div className="containerLine">
            <div class="input_container">
              <label class="input_label" for="email_field">
                CRM
              </label>
              <CiMoneyCheck1 className="iconInput" size={20} />

              <MaskedInput
                required={isChecked}
                mask={[
                  'C',
                  'R',
                  'M',
                  '/',
                  /[A-Z]/,
                  /[A-Z]/,
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/
                ]}
                placeholder="CRM/RJ 123456"
                id="crm"
                name="crm"
                type="text"
                className="input_field"
                value={signUpData.crm}
                onChange={handleChangeText}
              />
            </div>
            <div class="input_container ">
              <label class="input_label" for="speciality_field">
                Especialidade
              </label>
              <CiMedicalClipboard className="iconInput" size={20} />
              <input
                required={isChecked}
                placeholder="Oftamologista"
                title="speciality"
                name="speciality"
                type="text"
                class="input_field"
                id="speciality_field"
                value={signUpData.speciality}
                onChange={handleChangeText}
              />
            </div>
            <div class="input_container inputEmail">
              <label class="input_label" for="phone_field">
                Celular
              </label>
              <CiMobile3 className="iconInput" size={20} />

              <MaskedInput
                required={isChecked}
                mask={[
                  '(',
                  /\d/,
                  /\d/,
                  ')',
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/
                ]}
                placeholder="(21) 98498-0723"
                id="celular"
                name="phone"
                type="text"
                title="Celular"
                className="input_field"
                value={signUpData.phone}
                onChange={handleChangeText}
              />
            </div>
          </div>
          <div className="containerLine">
            <div class="input_container">
              <label class="input_label" for="locality_field">
                Localidade
              </label>
              <CiLocationOn className="iconInput" size={20} />
              <input
                required={isChecked}
                placeholder="Rio de Janeiro"
                title="Localidade"
                name="locality"
                type="text"
                class="input_field"
                id="locality_field"
                value={signUpData.locality}
                onChange={handleChangeText}
              />
            </div>
            <div class="input_container">
              <label class="input_label" for="password_field">
                CPF
              </label>
              <CiCreditCard2 className="iconInput" size={20} />

              <MaskedInput
                required={isChecked}
                mask={[
                  /\d/,
                  /\d/,
                  /\d/,
                  '.',
                  /\d/,
                  /\d/,
                  /\d/,
                  '.',
                  /\d/,
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/
                ]}
                placeholder="Digite seu CPF"
                id="cpf"
                name="cpf"
                type="text"
                className="input_field"
                value={signUpData.cpf}
                onChange={handleChangeText}
              />
            </div>
          </div>
        </div>
        <button title="Sign In" type="submit" class="sign-in_btn">
          <span>REGISTRAR</span>
        </button>

        <p class="note">Termos &amp; Condições de uso</p>
      </form>
    </FormSignUpWithButtonsAppleAndGoogleStyle>
  );
}

const FormSignUpWithButtonsAppleAndGoogleStyle = styled.div`
 
  display:flex;
  place-content: center;
  width: 100%;
  .form_container {
    width: 100%;
    max-width: 800px;

    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 50px 40px 20px 40px;
    background-color: #ffffff;
    box-shadow: 0px 106px 42px rgba(0, 0, 0, 0.01),
      0px 59px 36px rgba(0, 0, 0, 0.05), 0px 26px 26px rgba(0, 0, 0, 0.09),
      0px 7px 15px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 11px;
    font-family: 'Inter', sans-serif;
    .NoGap {
      width: 100%;
      margin-top: 15px;
    }
    .medicForm{     
      height:  ${props => (props.isChecked ? '145' : '0')}px;
      transition: all 0.8s ease-out;
      overflow-y: hidden;
    }

    .containerLine {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
      .inputEmail {
        max-width: 270px;
      }
    }

    .containerLineButtons {
      width: 100%;
      display: flex;
      align-items: center;
      button{
        margin-right: 10px;
      }
     

    button:last-child {
      margin-right: 0px;
    }
    
  }

  .logo_container {
    box-sizing: border-box;
    width: 80px;
    height: 80px;
    background: linear-gradient(
      180deg,
      rgba(248, 248, 248, 0) 50%,
      #f8f8f888 100%
    );
    border: 1px solid #f7f7f8;
    filter: drop-shadow(0px 0.5px 0.5px #efefef)
      drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: rgba(0, 0, 0, 0.6);
  }

  .title_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    color: #212121;
  }

  .subtitle {
    font-size: 0.725rem;
    max-width: 80%;
    text-align: center;
    line-height: 1.1rem;
    color: #8b8e98;
  }

  .input_container {
    width: 100%;
    height: fit-content;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;

    margin-right: 10px;

    :last-child {
      margin-right: 0px;
    }
  }

  .iconInput {
    position: absolute;
    z-index: 99;
    left: 12px;
    bottom: 9px;
  }

  .input_label {
    font-size: 0.75rem;
    color: #8b8e98;
    font-weight: 600;
  }

  .input_field {
    width: auto;
    height: 40px;
    padding: 0 0 0 40px;
    border-radius: 7px;
    outline: none;
    border: 1px solid #e5e5e5;
    filter: drop-shadow(0px 1px 0px #efefef)
      drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }

  .input_field:focus {
    border: 1px solid transparent;
    box-shadow: 0px 0px 0px 2px #242424;
    background-color: transparent;
  }

  .sign-in_btn {
    width: 100%;
    height: 40px;
    border: 0;
    background: #115dfc;
    border-radius: 7px;
    outline: none;
    color: #ffffff;
    cursor: pointer;
    :hover{
      background-color: #457ff7
    }
  }


  .sign-in_ggl {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #ffffff;
    border-radius: 7px;
    outline: none;
    color: #242424;
    border: 1px solid #e5e5e5;
    filter: drop-shadow(0px 1px 0px #efefef)
      drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
    cursor: pointer;
  }

  .sign-in_apl {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #212121;
    border-radius: 7px;
    outline: none;
    color: #ffffff;
    border: 1px solid #e5e5e5;
    filter: drop-shadow(0px 1px 0px #efefef)
      drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
    cursor: pointer;
  }

  .separator {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    color: #8b8e98;
  }

  .separator .line {
    display: block;
    width: 100%;
    height: 1px;
    border: 0;
    background-color: #e8e8e8;
  }

  .note {
    font-size: 0.75rem;
    color: #8b8e98;
    text-decoration: underline;
  }

  @media (max-width: 620px) {
    .containerLine {
      flex-direction: column;
      margin-bottom: 0px;
      .inputEmail {
        max-width: 100%;
      }

    }

    .input_container {
      margin-right: 0px;
      margin-bottom: 15px;
    }



.medicForm{
  height:  ${props => (props.isChecked ? '380' : '0')}px;
}
  }
`;
