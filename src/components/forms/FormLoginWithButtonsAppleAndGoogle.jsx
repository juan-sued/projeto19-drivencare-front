import styled from 'styled-components';

import { FaHandHoldingMedical, FaApple } from 'react-icons/fa';
import { CiLock, CiMail } from 'react-icons/ci';
import { FcGoogle } from 'react-icons/fc';

import { useAuth } from '../../hooks/useAuth.jsx';
import { useState } from 'react';

export default function FormLoginWithButtonsAppleAndGoogle() {
  const { signIn } = useAuth();

  const [signInData, setSignIndata] = useState({
    email: '',
    password: ''
  });

  const [stateColorButton, setStateCollorButton] = useState('#ffffff');

  const handleChangeText = e => {
    setSignIndata({ ...signInData, [e.target.name]: e.target.value });
  };

  function newLogin(event) {
    event.preventDefault();

    signIn({
      signInData,
      setStateCollorButton,
      setSignIndata,
      typeUser
    });
  }

  if (stateColorButton === '#e21a27' && signInData.email.length > 0) {
    setStateCollorButton('#ffffff');
  }

  return (
    <FormLoginWithButtonsAppleAndGoogleStyle>
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
        <div class="input_container">
          <label class="input_label" for="email_field">
            Email
          </label>
          <CiMail className="iconInput" size={20} />
          <input
            placeholder="name@mail.com"
            title="Inpit title"
            name="email"
            type="text"
            class="input_field"
            id="email_field"
            value={signInData.email}
            onChange={handleChangeText}
          />
        </div>
        <div class="input_container">
          <label class="input_label" for="password_field">
            Password
          </label>
          <CiLock className="iconInput" size={20} />
          <input
            placeholder="Password"
            title="Inpit title"
            name="password"
            type="password"
            class="input_field"
            id="password_field"
            value={signInData.password}
            onChange={handleChangeText}
          />
        </div>
        <button title="Sign In" type="submit" class="sign-in_btn">
          <span>Entrar</span>
        </button>

        <div class="separator">
          <hr class="line" />
          <span>Ou</span>
          <hr class="line" />
        </div>
        <button title="Sign In" type="submit" class="sign-in_ggl">
          <FcGoogle size={20} />
          <span>Entrar com Google</span>
        </button>
        <button title="Sign In" type="submit" class="sign-in_apl">
          <FaApple size={20} />
          <span>Entrar com Apple</span>
        </button>
        <div class="separator">
          <hr class="line" />
          <span>Ou</span>
          <hr class="line" />
        </div>
        <button title="Sign In" type="submit" class="sign-in_btn register_btn">
          <span>Cadastre-se</span>
        </button>
        <p class="note">Termos &amp; Condições de uso</p>
      </form>
    </FormLoginWithButtonsAppleAndGoogleStyle>
  );
}

const FormLoginWithButtonsAppleAndGoogleStyle = styled.div`
  .form_container {
    width: fit-content;
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
  }
  .register_btn {
    background: grey;
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
`;
