import styled from 'styled-components';

import { font, color, zIndexValues } from '../../../utils/Styles';

export const StyledLabel = styled.label`
  margin: 0 7px 0 0;
  ${font.size(15)}
  text-align: left;
`;

export const TextareaElement = styled.textarea`
  height: 100%;
  width: 100%;
  padding: 7px;
  resize: none;
  border-radius: 3px;
  border: 1px solid black;
  box-sizing: border-box;
  transition: background 0.1s;
  ${font.regular}
  ${font.size(15)}
`;
