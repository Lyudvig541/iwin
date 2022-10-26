import styled from 'styled-components';

const GameBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const GameRow : any= styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 115px;
  height: 44px;
  border-radius: 100px;
  color: ${props => props.theme.textColors.white};
  background: ${({ background, theme }: any) => background && theme.buttonColors.mix22 || theme.bgColors.color41};
  opacity:  ${({ opacity }: any) => opacity && 0.5 || 1 };
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  @media (max-width: 586px) {
    background: inherit;
    color: ${props => props.theme.textColors.color1};
    font-size: 12px;
    width: 70px;
    line-height: 16px;
    height: 20px;
  }
`;
const CoefficienBlock = styled.div`
  @media (max-width: 586px) {
    height: 44px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
`;
const CoefficientLine: any = styled.div`
  display: none;
  @media (max-width: 586px) {
    display: block;
    width: 37px;
    height: 6px;
    background: ${({ background, theme }: any) => background && theme.buttonColors.mix22 || theme.bgColors.color41};
    opacity: ${({ opacity }: any) => opacity && 0.5 || 1 };
    border-radius: 100px;
  }
`;

export {
    GameBlock,
    GameRow,
    CoefficientLine,
    CoefficienBlock
};