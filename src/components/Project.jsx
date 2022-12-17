import styled from 'styled-components';
import { Button } from './Button';

const Container = styled.div`
  /* border: solid #533483; */
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

const Text = styled.p`
  color: #fff;
`;

const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Project = (props) => {
  const { img, linkDeploy, linkLive, text } = props;
  return (
    <Container>
      <Image src={img} alt="countries photo" />
      <Text>{text}</Text>
      <ContainerButtons>
        <Button name={'Deploy'} url={linkLive} />
        <Button name={'Repository'} url={linkDeploy} />
      </ContainerButtons>
    </Container>
  );
};
