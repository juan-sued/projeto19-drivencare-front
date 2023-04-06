import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <HomePageStyle>
      <button className="buttonTest" onClick={() => navigate('/sign-up')}>
        Registrar
      </button>
      <button className="buttonTest" onClick={() => navigate('/sign-in')}>
        Login
      </button>
    </HomePageStyle>
  );
}

const HomePageStyle = styled.div`
  .buttonTest {
    height: 100px;
    border: none;
    opacity: 0.6;
    :hover {
      opacity: 0.9;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
  }
  display: flex;
  place-content: center;
`;
