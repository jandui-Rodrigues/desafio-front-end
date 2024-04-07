import styled from "styled-components";
import Shearch from "../../../assets/Shearch.svg";

const ButtonStyle = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 0rem 1rem;

  border: none;
  cursor: pointer;
  transition: 0.3s;
  img {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

type ButtonProps = {
  type: "button" | "submit" | "reset";
  handle: () => void;
};

function Button(props :ButtonProps) {
  return (
    <ButtonStyle type={props.type} onClick={() => props.handle()}>
      <img src={Shearch} alt="Shearch" />
    </ButtonStyle>
  );
}

export default Button;
