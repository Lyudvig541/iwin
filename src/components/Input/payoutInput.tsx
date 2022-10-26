import styled from 'styled-components';

const PayoutInput = ({ value }: any) => <PayoutInputStyle disabled={true} value={value || ''} />;


const PayoutInputStyle = styled.input`
  background: transparent;
  border: none;
  padding: 10px;
  width: inherit;
  color: ${props => props.theme.textColors.color1};
  @media (max-width: 375px) {
    max-width: 104px;
  }
`;

export default PayoutInput;
