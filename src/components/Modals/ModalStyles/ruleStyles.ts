import styled from 'styled-components';

const TabContent: any = styled.div`
  display: ${({ active }: any) => active?'block':'none'};
  text-align: ${({ textAlign }: any) => textAlign || 'start'};
  margin: 40px 0 0 0;
`;

export {
    TabContent
};