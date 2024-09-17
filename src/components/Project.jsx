import styled from 'styled-components';
import { Button } from './Button';

const Container = styled.div`
  /* border: solid red; */
  width: 100%;
  outline: 1px  solid rgb(3 4 94 / 55%);
  /* border: solid red; */
  display: flex;
  /* padding: 1rem 0; */
  /* gap: 0.5rem; */
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 5px;
`;

const Image = styled.img`
  width: 100%;
  /* height: 50%; */
  /* border: solid red; */
`;

const Text = styled.p`
  color: #fff;
  font-size: 16px;
  /* border: solid red; */
`;

const ContainerButtons = styled.div`
  /* border: solid red; */

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
