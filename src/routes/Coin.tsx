import { useLocation, useParams } from "react-router-dom";
import { styled } from "styled-components";

interface Params {
  coinId: string;
}

interface RouteState {
  name: string;
}

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 40px;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 500px;
  margin: 0 auto;
`;

export default function Coin() {
  const { coinId } = useParams<Params>();
  const { state } = useLocation<RouteState>();

  return (
    <Container>
      <Header>
        <Title>{state?.name}</Title>
      </Header>
    </Container>
  );
}
