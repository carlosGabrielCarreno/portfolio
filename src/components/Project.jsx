import styled from 'styled-components';
import { Button } from './Button';

const Container = styled.div`
  /* border: solid #533483; */
  width: 100%;
  /* border: solid red; */
  /* margin: 0.5rem 0; */
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
  const { img } = props;
  return (
    <Container>
      <Image src={img} alt="countries photo" />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim animi
        voluptatibus et tempora veniam natus quod maiores tenetur iste quasi?
      </Text>
      <ContainerButtons>
        <Button name={'Deploy'} />
        <Button name={'Repository'} />
      </ContainerButtons>
    </Container>
  );
};
