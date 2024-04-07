import styled from "styled-components";

const InputStyle = styled.input`
  font-size: 1.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray_20};
  border-radius: 5px;
  flex: 1;

  outline: none;
  border: none;
  transition: 0.3s;
  padding: 1rem 1rem;
  
    &::placeholder {
        color: ${({ theme }) => theme.colors.gray_20};
    }

`;

type InputProps = {
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: InputProps) {
  return (
      <InputStyle
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
  );
}

export default Input;
