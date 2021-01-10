import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 85px;
  height: 85px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 50% 50%;
  border: none;
  ${({ back }) =>
    back &&
    css`
      width: 128px;
      height: 128px;
    `}
  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
