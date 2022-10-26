import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton: any = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Noto Sans, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border-radius: 100px;
  cursor: pointer;
  padding: ${({ padding }: any) => padding || '16px 36px'};
  margin: ${({ margin }: any) => margin || '0 0 0 0'};

  &:focus {
    outline: none;
  }

  ${(styles: any) => styles.primary && css`
    background: ${props => props.theme.buttonColors.mix3};
    border: 2px solid ${styles.theme.buttonColors.borderColor2};
    color: ${props => props.theme.textColors.color11};
    padding: ${({ padding }: any) => padding || '0 0 0 0'};
    margin: ${({ margin }: any) => margin || '0 0 0 0'};

    ${!(styles.hover) && css`:hover {
      color: ${props => props.theme.bgColors.white};
      background: ${props => props.theme.buttonColors.mix1};
    }`}
    ${!(styles.hover) && css`:active {
      color: ${props => props.theme.bgColors.white};
      background: ${props => props.theme.buttonColors.mix2};
    }`}
    :disabled {
      color: ${props => props.theme.textColors.disabled};
      background: ${props => props.theme.bgColors.disabled};
      cursor: not-allowed;
      border: none;
    }
  `}

  ${(styles: any) => styles.danger && css`
    color: ${props => props.theme.bgColors.white};
    background: ${props => props.theme.buttonColors.mix1};
    border: 2px solid ${props => props.theme.buttonColors.borderColor2};
    margin: ${({ margin }) => margin || '0 0 0 0'};


    &:hover {
      background: ${props => props.theme.buttonColors.mix3};
      color: ${props => props.theme.textColors.color3};
    }

    &:active {
      color: ${props => props.theme.textColors.color1};
      background: ${props => props.theme.buttonColors.mix2};
    }

    :disabled {
      color: ${props => props.theme.textColors.disabled};
      background: ${props => props.theme.bgColors.disabled};
      cursor: not-allowed;
      border: none;
    }
  `}

  ${(props: any) => props.coinInfo && css`
    background: ${props => props.theme.bgColors.color26};
    border-radius: 100px;
    border: none;
    margin: ${({ margin }: any) => margin || '0 0 0 0'};
    padding: ${({ padding }: any) => padding || '0 0 0 0'};

    > div {
      > div {
        color: ${props => props.theme.textColors.color3};
      }
    }

    ${!(props.hover) && css`:hover {
      > div {
        > div {
          color: ${props => props.theme.textColors.color1};
        }
      }

      background: ${props => props.theme.bgColors.color32};
    }`}
    ${!(props.hover) && css`:active {
      color: ${props => props.theme.textColors.color1};
      background: ${props => props.theme.bgColors.color2};
    }`}
    :disabled {
      color: ${props => props.theme.textColors.disabled};
      background: ${props => props.theme.bgColors.disabled};
      cursor: not-allowed;
      border: none;
    }
  `}
  ${(styles: any) => styles.secondary && css`
    background: ${props => props.theme.buttonColors.mix1};
    color: ${props => props.theme.textColors.white};
    padding: ${({ padding }: any) => padding || '14.5px 94.8px'};
    margin: ${({ margin }: any) => margin || '0 0 0 0'};
    max-width: 215px;
    width: 214px;
    white-space: nowrap;
    border: none;

    :hover {
      color: ${props => props.theme.textColors.color1};
      background: ${props => props.theme.buttonColors.buttonColor1};
    }

    :active {
      color: ${props => props.theme.textColors.color1};
      background: ${props => props.theme.buttonColors.mix1}
    }

    :disabled {
      color: ${props => props.theme.textColors.disabled};
      background: ${props => props.theme.bgColors.disabled};
      cursor: not-allowed;
      border: none;
    }

    @media (max-width: 946px) {
      margin-bottom: ${({ mb }: any) => mb || '0 0 0 0'};
    }
  `}

  ${(styles: any) => styles.failure && css`
    background: ${props => props.theme.buttonColors.buttonColor7};
    color: ${props => props.theme.textColors.color3};
    padding: 14px 42px;
    border: none;

    :hover {
      color: ${props => props.theme.textColors.color1};
      background: ${props => props.theme.buttonColors.buttonColor8};
    }

    :active {
      color: ${props => props.theme.textColors.color1};
      border: 2px solid ${props => props.theme.buttonColors.buttonColor7};
      background: ${props => props.theme.bgColors.color12};
    }

    :disabled {
      color: ${props => props.theme.textColors.disabled};
      background: ${props => props.theme.bgColors.disabled};
      cursor: not-allowed;
      border: none;
    }
  `}

  ${(styles: any) => styles.tertiary && css`
    background: ${props => props.theme.bgColors.color15};
    color: ${props => props.theme.textColors.color3};
    border: 2px solid ${props => props.theme.buttonColors.borderColor3};
    box-sizing: border-box;
    background: ${props => props.theme.bgColors.color15};

    ${styles.underRange && css`
      color: ${props => props.theme.textColors.color1};
      border: 2px solid ${props => props.theme.buttonColors.borderColor1};
      background: transparent;
    `};

    @media (max-width: 700px) {
      padding: 12px;
    }

    :hover {
      color: ${props => props.theme.textColors.color1};
      background: ${props => props.theme.buttonColors.buttonColor5};
      border: 2px solid ${props => props.theme.buttonColors.borderColor1};
    }


    :focus {
      border: 2px solid ${props => props.theme.buttonColors.borderColor1};
      background: transparent;
    }

    :disabled {
      color: ${props => props.theme.textColors.disabled};
      background: ${props => props.theme.bgColors.disabled};
      cursor: not-allowed;
      border: none;
    }
  `}
`;


const Button = (styles: any) => (styles.disable && <StyledButton {...styles} disabled/>) || <StyledButton {...styles}/>;


export default Button;