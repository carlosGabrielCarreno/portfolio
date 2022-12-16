import styled from 'styled-components';
import { Form, Sidebar } from './components';
import { Footer, Main, Navbar } from './views';

const Container = styled.div`
  position: absolute;
  background: rgb(0, 11, 73);
  background: linear-gradient(
    315deg,
    rgb(0 11 73) 0%,
    rgb(4 21 98 / 86%) 68%,
    rgba(38, 102, 207, 0.9654061453683036) 100%
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
