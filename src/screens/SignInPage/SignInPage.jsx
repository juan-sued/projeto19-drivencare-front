import styled from 'styled-components';
import FormLoginWithButtonsAppleAndGoogle from '../../components/forms/FormLoginWithButtonsAppleAndGoogle';
export default function SignInPage() {
  return (
    <SignInPageStyle>
      <FormLoginWithButtonsAppleAndGoogle />
    </SignInPageStyle>
  );
}

const SignInPageStyle = styled.div`
  display: flex;
  place-content: center;
`;
