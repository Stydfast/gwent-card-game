import styled, { css } from 'styled-components';

const HAND_WIDTH = 950;
const CARD_WIDTH = 93;

const setDynamicMargin = length => {
  if (length > 10) {
    const margin = (CARD_WIDTH - ((HAND_WIDTH - CARD_WIDTH) / (length - 1))) * -1;

    return css`
    & > div {
      &:first-of-type{
        margin-left: 0px;
      }

      margin-left: ${margin}px;
    }
  `;
  }

  return;
}

const HandStyled = styled.div`
  width: 950px;
  height: 130px;
  position: absolute;
  left: 568px;
  top: 840px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  ${props => setDynamicMargin(props.children.length)}
`;

export { HandStyled };


