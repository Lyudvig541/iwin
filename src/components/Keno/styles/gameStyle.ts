import styled, { css } from 'styled-components';

const CoefficientsValues = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
`;
const CoefficientRows = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
const Numbers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 24px;
  background: ${props => props.theme.bgColors.color41};
  border-radius: 100px;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${props => props.theme.textColors.white};
`;
const Values = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 115px;
  height: 24px;
  background: ${props => props.theme.bgColors.color41};
  border-radius: 100px;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${props => props.theme.textColors.white};
`;
const GameBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 844px;
  height: 416px;
  background: ${props => props.theme.bgColors.color42};
  border-radius: 16px;
  padding: 32px 52px;
  margin-top: 48px;
  @media (max-width: 972px) {
    max-width: 805px;
  }
  @media (max-width: 900px) {
    max-width: 740px;
    padding: 32px;

  }
  @media (max-width: 840px) {
    max-width: 715px;
    padding: 25px;
  }
  @media (max-width: 810px) {
    max-width: 700px;
    background-color: initial;
    flex-direction: column;
  }
  @media (max-width: 700px) {
    max-width: auto;
    width: auto;
  }
`;
const Coefficients = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 157px;
  height: 312px;
  @media (max-width: 810px) {
    order: 2;
    margin-top: 20px;
  }
  @media (max-width: 700px) {
    margin-top: 220px;
  }
`;
const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  color: ${props => props.theme.textColors.color1};
`;
const Line = styled.div`
  width: 4px;
  height: 16px;
  background: ${props => props.theme.buttonColors.mix4};
  border-radius: 100px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
const GameRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 504px;
  height: 335px;
  @media (max-width: 840px) {
    gap: 4px;
  }
  @media (max-width: 810px) {
    order: 1;
  }
  @media (max-width: 700px) {
    width: 335px;
  }
`;
const GameLines: any = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fafafa;
  width: 56px;
  height: 56px;
  margin-top: 4px;
  border-radius: 8px;
  background: ${({ theme }: any) => theme.bgColors.color44};

  ${(styles: any) => styles.check && css`
    background: ${({ theme }: any) => theme.bgColors.color46};
  `}
  ${(styles: any) => styles.win && !(styles.check) && css`
    background: ${({ theme }: any) => theme.bgColors.color47};
  `}
  ${(styles: any) => styles.win && (styles.check) && css`
    background: ${({ theme }: any) => theme.buttonColors.mix1};
  `}
  border: 2px solid ${({ theme }: any) => theme.bgColors.color45};
`;
const StartCheck: any = styled.button`
  margin-top: 20px;
  border: none;
  padding: 2%;
  cursor: pointer;
  border-radius: 8px;;
`;
const RandomCheck: any = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-around;
  align-items: center;
  background: none;
  border: none;
  margin-top: 20px;
`;
const RandomCheckButton: any = styled.button`
  border: 1px solid orange;
  padding: 14px;
  cursor: pointer;
  border-radius: 8px;;
`;
const Hing: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 245px;
  height: 24px;
  border-radius: 100px;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.3px;
  background-color: ${props => props.theme.bgColors.color49};
  color: ${props => props.theme.textColors.color17};
`;
const CoeffMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 810px) {
    flex-direction: row;
  }
`;
const CoeffMobileFive = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (max-width: 810px) {
    order: ${({ order }: { order: number }) => order || undefined};
  }
}
`;

export {
    GameBlock,
    GameRow,
    GameLines,
    StartCheck,
    RandomCheck,
    RandomCheckButton,
    Coefficients,
    Title,
    Line,
    Text,
    CoefficientsValues,
    Numbers,
    Values,
    CoefficientRows,
    Hing,
    CoeffMobile,
    CoeffMobileFive
};