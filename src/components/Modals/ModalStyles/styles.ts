import styled, { css } from 'styled-components';

const ModalContent: any = styled.div`
  margin: auto 0;
  z-index: 10000;
  width: 100%;
  height: 100%;
  display: ${({ open }: any) => open ? 'block' : 'none'};
  position: fixed;
  background: ${props => props.theme.bgColors.color29};
  @media (max-width: 972px) {
    margin-top: ${({ navBar }: any) => navBar ? '100%' : 'auto'};
  }
`;

const ModalStyle: any = styled.div`
  margin: 10% auto;
  background:  ${props => props.theme.bgColors.color1};
  padding: ${({ padding }: any) => padding || '16px 0 32px 0'};
  width: min-content;
  min-width: 300px;
  min-height: 300px;
  border-radius: ${({ borderRadius }: any) => borderRadius || '10x'};
  ${({ openFrom }: any) => openFrom === 'center' && css`
      animation: scaleUp .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
      @keyframes scaleUp {
        0% {
          transform:scale(0.2) translateY(0px);
          opacity:0;
        }
        100% {
          transform:scale(1) translateY(0px);
          opacity:1;
        }
      }
  `};
  ${({ openFrom }: any) => openFrom === 'bottom' && css`
      animation: bottomToUp .3s cubic-bezier(1,1,0,-0.01) forwards;
      @keyframes bottomToUp {
        0% {
          transform:scale(0.3) translate(0px, 1700px);
          opacity:0;
        }
        100% {
          transform:scale(1) translate(0px, 0px);
          opacity:1;
        }
      }
  `};
    @media (max-width: 470px) {
      margin: 67px auto;
    }
`;
const ModalHeader: any = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${({ back }: any) => back ? '0 0 0 8px' : '0 0 0 40px'};
`;
const ModalBody = styled.div``;

const BackPart = styled.div``;

const Back: any = styled.div`
  cursor: pointer;
`;

const ModalTitle = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  text-align: center;
  align-items: center;
  place-content: center;
  font-size: 16px;
  color: ${props => props.theme.textColors.color1};
`;
const TitleStyle = styled.div`
  font-size: 14px;
  letter-spacing: 0.3px;
  font-weight: 600;
`;

const CloseModal = styled.div`
  padding: 0 10px 0 10px;

  img {
    cursor: pointer;
  }
`;

export {
    ModalContent, ModalStyle, ModalHeader, ModalBody, ModalTitle, CloseModal, TitleStyle, BackPart, Back
};
