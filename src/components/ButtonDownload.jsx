import styled from 'styled-components';
import pdf from '../assets/Carlos_Gabriel_Carreño_CV.pdf';

const Btn = styled.a`
  padding: 15px 10px;
  margin: 0;
  background: rgb(0, 29, 110);
  background: linear-gradient(
    162deg,
    rgba(0, 29, 110, 1) 0%,
    rgba(3, 4, 94, 0.8925770137156425) 100%
  );
  border: 0;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;

  text-decoration: none;
`;
export const ButtonDownload = () => {
  return (
    <Btn href={pdf} download target="_blank">
      Download CV
    </Btn>
  );
};
