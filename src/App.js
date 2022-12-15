import styled from 'styled-components';
import { Form, Sidebar } from './components';
import { Footer, Main, Navbar } from './views';

const Container = styled.div`
  position: absolute;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    202deg,
    rgba(131, 58, 180, 0.7693277139957546) 0%,
    rgba(159, 115, 171, 1) 50%,
    rgba(63, 59, 108, 0.9205882181974352) 100%
  );
  width: 100vw;
  font-family: 'Ubuntu', sans-serif;
`;

export const App = () => {
  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Main />
      <Form />
      <Footer />
    </Container>
  );
};
