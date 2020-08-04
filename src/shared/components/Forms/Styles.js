import styled from 'styled-components';

import { color, font, zIndexValues } from '../../utils/Styles';

export const StyledErrorMessage = styled.div`
  color: ${color.buttonPink};
  z-index: ${zIndexValues.modal};
  /* position: absolute; */
  padding: 3px 0 0 5px;
  ${font.size(12)}
`;
