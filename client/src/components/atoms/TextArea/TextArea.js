import styled from 'styled-components';



const TextArea= styled.textarea`
 padding: 15px 30px;
  font-weight: ${({ theme }) => theme.bold};
  background-color: ${({ theme }) => theme.grey100};
  border: none;
  font-family: "Montserrat", sans-serif;
  border-radius: 50px;
     padding: 10px 20px 10px 40px;
      font-size: ${({ theme }) => theme.fontSize.s};
      width: 500px;
      height: 500px;
      background-position: 15px 50%;
      background-repeat: no-repeat;
    `


export default TextArea;