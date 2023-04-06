import styled from 'styled-components';

import { FaHandHoldingMedical } from 'react-icons/fa';
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
import { useState } from 'react';
import MessageWithHeartToggle from '../toggles/MessageWithHeartToggle.jsx';
import MaskedInput from 'react-text-mask';
import MedicLoading from '../loadings/MedicLoading.jsx';
import { cleanSpecificsFields, removeKeys } from '../../utils/utils.js';
import { axiosI } from '../../services/axios.js';
import { useNavigate } from 'react-router-dom';

export default function FormSignUpWithButtonsAppleAndGoogle() {
  const navigate = useNavigate();

  const [objectRequestControl, setObjectRequestControl] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    crm: '',
    specialty: '',
    phone: '',
    locality: '',
    cpf: ''
  });

  const [stateCollorButton, setStateCollorButton] = useState('#115dfc');

  const handleChangeText = e => {
    const { name, value } = e.target;
    setObjectRequestControl({ ...objectRequestControl, [name]: value });
  };

  async function newSignUp(event) {
    event.preventDefault();

    setStateCollorButton('loading');

    let route = '/doctors/sign-up';
    let request = objectRequestControl;
    const isPatient = objectRequestControl.crm ? false : true;
    if (isPatient) {
      const newWithoutKeys = removeKeys(objectRequestControl, [
        'crm',
        'specialty',
        'phone',
        'locality',
        'cpf'
      ]);

      request = newWithoutKeys;

      route = '/patients/sign-up';
    }
    await axiosI
      .post(route, request)
      .then(({ data }) => {
        navigate('/');
      })
      .catch(({ response }) => {
        setObjectRequestControl(
          cleanSpecificsFields(objectRequestControl, ['email'])
        );

        setStateCollorButton(response.status);
      });
  }
  if (
    (stateCollorButton === 422 || stateCollorButton === 409) &&
    objectRequestControl.email.length > 0
  ) {
    setStateCollorButton('#115dfc');
  }

  const [isChecked, setIsChecked] = useState(false);

  return (
    <FormSignUpWithButtonsAppleAndGoogleStyle
      isChecked={isChecked}
      stateCollorButton={stateCollorButton}
    >
      <form className="form_container" onSubmit={newSignUp}>
        <div className="logo_container" onClick={() => navigate('/')}>
          <FaHandHoldingMedical />
        </div>
        <div className="title_container">
          <p className="title">DrivenCare</p>
          <span className="subtitle">Menos stress e mais saúde</span>
        </div>
        <br />
        <div className="NoGap">
          <div className="containerLine">
            <div className="input_container">
              <label className="input_label" htmlFor="email_field">
                Nome
              </label>
              <CiUser className="iconInput" size={20} />
              <input
                required
                disabled={stateCollorButton === 'loading' ? true : false}
                placeholder="João Alberto Corrêa"
                title="Deve conter apenas letras"
                name="name"
                type="email"
                pattern="^[a-zA-ZÀ-ÿ][a-zA-ZÀ-ÿ\s.'-]{0,}$"
                className="input_field"
                id="email_field"
                value={objectRequestControl.name}
                onChange={handleChangeText}
                minLength={3}
              />
            </div>
            <div className="input_container inputEmail">
              <label className="input_label" htmlFor="email_field">
                Email
              </label>
              <CiMail className="iconInput" size={20} />
              <input
                required
                disabled={stateCollorButton === 'loading' ? true : false}
                placeholder="name@mail.com"
                title="Input title"
                name="email"
                type="text"
                className="input_field"
                id="email_field"
                value={objectRequestControl.email}
                onChange={handleChangeText}
              />
            </div>
          </div>
          <div className="containerLine">
            <div className="input_container">
              <label className="input_label" htmlFor="password_field">
                Senha
              </label>
              <CiLock className="iconInput" size={20} />
              <input
                required
                disabled={stateCollorButton === 'loading' ? true : false}
                placeholder="Senha super incrível"
                title="Ao menos: 1 caractere especial, 1 letra maiúscula, 1 número"
                name="password"
                type="password"
                className="input_field"
                id="password_field"
                value={objectRequestControl.password}
                onChange={handleChangeText}
                minLength={5}
                pattern="^(?=.*[!@#$%^&*()_+\-=[\]{};':\\|,.<>/?])(?=.*[0-9])(?=.*[A-Z]).{8,}$"
              />
            </div>
            <div className="input_container">
              <label className="input_label" htmlFor="password_field">
                Confirmar senha
              </label>
              <CiLock className="iconInput" size={20} />
              <input
                required
                disabled={stateCollorButton === 'loading' ? true : false}
                placeholder="Senha super incrível"
                title="A confirmação de senha deve ser idêntica a senha."
                name="confirmPassword"
                type="password"
                className="input_field"
                id="confirmPassword_field"
                pattern={objectRequestControl.password}
                value={objectRequestControl.confirmPassword}
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
            <div className="input_container">
              <label className="input_label" htmlFor="email_field">
                CRM
              </label>
              <CiMoneyCheck1 className="iconInput" size={20} />

              <MaskedInput
                required={isChecked}
                disabled={stateCollorButton === 'loading' ? true : false}
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
                value={objectRequestControl.crm}
                onChange={handleChangeText}
              />
            </div>
            <div className="input_container ">
              <label className="input_label" htmlFor="specialty_field">
                Especialidade
              </label>
              <CiMedicalClipboard className="iconInput" size={20} />
              <input
                required={isChecked}
                disabled={stateCollorButton === 'loading' ? true : false}
                placeholder="Oftamologista"
                title="specialty"
                name="specialty"
                type="text"
                className="input_field"
                id="specialty_field"
                value={objectRequestControl.specialty}
                onChange={handleChangeText}
              />
            </div>
            <div className="input_container inputEmail">
              <label className="input_label" htmlFor="phone_field">
                Celular
              </label>
              <CiMobile3 className="iconInput" size={20} />

              <MaskedInput
                required={isChecked}
                disabled={stateCollorButton === 'loading' ? true : false}
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
                value={objectRequestControl.phone}
                onChange={handleChangeText}
              />
            </div>
          </div>
          <div className="containerLine">
            <div className="input_container">
              <label className="input_label" htmlFor="locality_field">
                Localidade
              </label>
              <CiLocationOn className="iconInput" size={20} />
              <input
                required={isChecked}
                disabled={!isChecked}
                placeholder="Rio de Janeiro"
                title="Localidade"
                name="locality"
                type="text"
                className="input_field"
                id="locality_field"
                value={objectRequestControl.locality}
                onChange={handleChangeText}
              />
            </div>
            <div className="input_container">
              <label className="input_label" htmlFor="password_field">
                CPF
              </label>
              <CiCreditCard2 className="iconInput" size={20} />

              <MaskedInput
                required={isChecked}
                disabled={stateCollorButton === 'loading' ? true : false}
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
                value={objectRequestControl.cpf}
                onChange={handleChangeText}
              />
            </div>
          </div>
        </div>
        <button
          title="Registrar"
          type="submit"
          className="sign-in_btn"
          disabled={stateCollorButton === 'loading' ? true : false}
        >
          <span>
            {stateCollorButton === 'loading' ? (
              <MedicLoading />
            ) : stateCollorButton === 409 ? (
              'Usuário já cadastrado'
            ) : stateCollorButton === 422 ? (
              'Dados Incorretos'
            ) : (
              'REGISTRAR'
            )}
          </span>
        </button>
        <button
          title="Sign In"
          type="submit"
          className="sign-in_btn backBtn"
          onClick={() => navigate(-1)}
        >
          <span>Voltar</span>
        </button>

        <p className="note">Termos &amp; Condições de uso</p>
      </form>
    </FormSignUpWithButtonsAppleAndGoogleStyle>
  );
}

const FormSignUpWithButtonsAppleAndGoogleStyle = styled.div`
  display: flex;
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
    .medicForm {
      height: ${props => (props.isChecked ? '145' : '0')}px;
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
      button {
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
      transition: all 0.3s ease-in-out;
      :hover {
        cursor: pointer;
        box-shadow: rgba(0, 239, 239, 0.5) 0px 25px 20px -20px;
      }

      :active {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
          rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      }
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
      width: 200px;
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
      background: ${props =>
        props.stateCollorButton === 422 || props.stateCollorButton === 409
          ? '#e21a27'
          : props.stateCollorButton === 'loading'
          ? '#d4d4d4'
          : '#115dfc'};
      border-radius: 7px;
      outline: none;
      color: #ffffff;
      cursor: pointer;
    }
    .backBtn {
      background-color: grey;
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
      :hover {
        cursor: pointer;
        color: #212121;
        opacity: 0.8;
      }
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

      .medicForm {
        height: ${props => (props.isChecked ? '380' : '0')}px;
      }
    }
  }
`;
