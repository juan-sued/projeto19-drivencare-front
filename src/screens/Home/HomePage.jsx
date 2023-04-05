import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <HomePageStyle>
      <button onClick={() => navigate('/sign-up')}>
        ME DE SEUS DADOS CARAIO
      </button>
    </HomePageStyle>
  );
}

const HomePageStyle = styled.div`
  display: flex;
  place-content: center;
`;
