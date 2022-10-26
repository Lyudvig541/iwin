import styled from 'styled-components';

const TabContainer:any = styled.div`
  padding: ${({ padding }:any) => padding || '0'}
`;
const TabHead:any = styled.div`
  display: flex;
  background: ${({ background }:any) => background || 'none'};
  border-radius: 100px;
`;
const TabBody = styled.div`

`;
const TabContent: any = styled.div`
  display: ${({ active }:any) => active ? 'block' : 'none'}
`;
const Tab: any = styled.div`
  padding: 10px;
  position: relative;
  display: flex;
  align-items: center;
  width: 234px;
  color: ${props => props.theme.textColors.color3};
  border-radius: 100px;
  place-content: center;
  cursor: pointer;
  ${({ active, activeTabBackground }:any) => active && `
    background: ${activeTabBackground || 'none'};
    color: ${(props: any) => props.theme.textColors.white};
    &:before {
      display: block;
      content: '';
      width: 8px;
      height: 8px;
      background: ${(props: any) => props.theme.buttonColors.mix1};
      border-radius: 50%;
      margin-right: 14px;
    }`}
`;

export {
    TabContainer, TabHead, TabBody, TabContent, Tab
};