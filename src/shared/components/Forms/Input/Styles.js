import styled from 'styled-components';

import { color, font, zIndexValues } from '../../../utils/Styles';

export const StyledLabel = styled.label`
  margin: 0 7px 0 0;
  ${font.size(15)}
`;

export const InputElement = styled.input`
  height: 32px;
  width: 100%;
  /* padding: 0 0 0 7px; */
  text-indent: 7px;
  border-radius: 3px;
  border: 1px solid black;
  box-sizing: border-box;
  transition: background 0.1s;
  ${font.regular}
  ${font.size(15)}
`;

export const StyledInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
