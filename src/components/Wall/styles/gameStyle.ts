import styled from 'styled-components';


const GameBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px; 
`;
const GameRow: any = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 12px;
  pointer-events: ${({ pointer }: any) => pointer && 'none' || 'all'};
    @media (max-width: 586px) {
    gap: 8px;
  }
`;

const GameLines: any = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${props => props.theme.textColors.white};
  cursor: pointer;
  opacity: ${({ opacity }: any) => opacity && 0.5 || 1};
  border: none;
  padding: 0;  
`;

const GameResultImg: any = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  border: none;
  filter: ${({ bloor }: any) => {

        if (bloor.line !== null && bloor.id !== null) {

            if (bloor.line > bloor.lineId) {

                return 'blur(4px)'; 

            }else if (bloor.line === bloor.lineId && bloor.id !== bloor.number) {

                return 'blur(4px)';

            }else {


                return 'blur(0px)';

            }

        }else {

            return 'blur(0px)';

        }
        
    }};
`;


export {
    GameResultImg,
    GameBlock,
    GameRow,
    GameLines
};