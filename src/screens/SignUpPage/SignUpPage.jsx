import styled from 'styled-components';
import FormSignUpWithButtonsAppleAndGoogle from '../../components/forms/FormSignUpWithButtonsAppleAndGoogle';
export default function SignUpPage() {
  return (
    <SignUpPageStyle>
      <FormSignUpWithButtonsAppleAndGoogle />
    </SignUpPageStyle>
  );
}

const SignUpPageStyle = styled.div`
  display: flex;
  place-content: center;
`;
