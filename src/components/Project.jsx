import styled from "styled-components";

const Container = styled.div`
  border: solid #533483;

  width: 100%;
  height: 200px;
  margin: 0.5rem 0;
`;

const Image = styled.img``;

export const Project = () => {
  return (
    <Container>
      <Image />
      <p>project</p>
    </Container>
  );
};
