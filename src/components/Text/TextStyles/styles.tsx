import styled from 'styled-components';
import { Theme } from '../../../constants/theme';

const TextStyle:any = styled.p`
  color: ${({ color }) => color || Theme.textColors.color1};
  font-size: ${({ fontSize }:any) => fontSize || '14px'};
  display: ${({ display }:any) => display || 'block'};
  padding: ${({ padding }:any) => padding || '0'};
  margin: ${({ margin }:any) => margin || '0'};
  line-height: ${({ lineHeight }:any) => lineHeight || '19px'};
  font-weight: ${({ fontWeight }:any) => fontWeight || '700'};

  @media(max-width: 768px) {
    font-family: Noto Sans,serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.3px;
    color: ${({ color }) => color || Theme.textColors.color1};
  }
  font-weight: ${({ fontWeight }:any) => fontWeight ||'normal'};
`;

const TittleStyle:any = styled.span`
  color: ${({ color }:any) => color || Theme.textColors.color1};
  font-size: ${({ fontSize }:any) => fontSize || '14px'};
  display: ${({ display }:any) => display || 'block'};
  padding: ${({ padding }:any) => padding || '0'};
  margin: ${({ margin }:any) => margin || '0'};
  line-height: ${({ lineHeight }:any) => lineHeight || '19px'};
  width: ${({ width }:any) => width || 'auto'};
  font-weight: ${({ weight }:any) => weight ||'normal'};
`;

export {
    TextStyle,
    TittleStyle
};