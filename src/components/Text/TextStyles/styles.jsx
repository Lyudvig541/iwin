import styled from 'styled-components';

const TittleStyle = styled.span`
  color: ${({ color, theme }) => color || theme.textColors.color1};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  display: ${({ display }) => display || 'block'};
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};
  line-height: ${({ lineHeight }) => lineHeight || '19px'};
  width: ${({ width }) => width || 'auto'};
  font-weight: ${({ weight }) => weight ||'normal'};
`;

const TextStyle = styled.p`
  color: ${({ color, theme }) => color || theme.textColors.color11};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  display: ${({ display }) => display || 'block'};
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};
  line-height: ${({ lineHeight }) => lineHeight || '19px'};
  font-weight: 600;
  &:hover{
    color: ${props => props.theme.bgColors.white};

  }
 
  @media(max-width: 768px) {
    font-family: Noto Sans,serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.3px;
    color: ${props => props.theme.textColors.color3};
  }
`;

export {
    TextStyle,
    TittleStyle
};