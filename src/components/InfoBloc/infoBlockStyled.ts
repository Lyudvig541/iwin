import styled from 'styled-components';

const InfoBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 95px 0 110px;
`;

const InfoBlockTitle = styled.h3`
  font-family: Noto Sans, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  margin: 0 0 57px; 
  line-height: 38px;
  letter-spacing: 0.02em;
  color: ${props => props.theme.textColors.color1};
  text-transform: uppercase;
`;
const InfoBlockHeader: any = styled.div`
  max-width: 746px;
  width: 100%;
  margin-top: 16px;
  background:${({ toggle, theme }: any) => !toggle ? theme.bgColors.color28 : theme.bgColors.color27 } ;
  padding: 20px;
  cursor: pointer;
  border-radius: ${({ toggle }:any) => !toggle ?'6px' : '6px 6px 0 0' } ;;
  z-index: 9999;
`;

const InfoBlockHeaderTitle = styled.span`
  font-family: Noto Sans, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: ${props => props.theme.textColors.color1};
`;

const InfoBlockHeaderTitleAndIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

const InfoBlockContent: any = styled.div`
  transition: 0.5s;
  max-width: 746px;
  width: 100%;
  letter-spacing: 0.5px;
  font-family: Noto Sans,serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  border-radius: 0 0 6px 6px;
  padding: 12px 20px;


  ${({ toggle }: any) => toggle ?`
  background: ${(props: any) => props.theme.bgColors.color27};
  color: ${(props: any) => props.theme.textColors.color3};
  opacity: 1;   
  `: `
    opacity: 0;
    margin-top: -48px;
    @media (max-width: 420px){
    margin-top: -70px;
    }
  `
}
`;

export {
    InfoBlock,
    InfoBlockTitle,
    InfoBlockHeader,
    InfoBlockHeaderTitle,
    InfoBlockHeaderTitleAndIcon,
    InfoBlockContent
};