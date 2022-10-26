import styled from 'styled-components';

const Container = styled.div`
  padding: 48px 0 4px;
  display: flex;
  align-items: center;
  @media (max-width: 586px) {
    padding: 0;
  }
`;
const GameBlock = styled.div`
  display: flex;
  align-items: center;
  border-radius: 16px;
  background: ${props => props.theme.bgColors.color42};
  padding: 16px 24px;
  gap: 48px;
  width: 479px;
  justify-content: center;
  @media (max-width: 586px) {
    background: inherit;
    gap: 0;
    padding: 0 0 12px 0;
  }
`;

const GameContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  gap: 30px;
  @media (max-width: 972px) {
    flex-direction: column;
  }
  @media (max-width: 586px) {
    gap: 0;
  }
`;

export {
    Container,
    GameBlock,
    GameContent
};

