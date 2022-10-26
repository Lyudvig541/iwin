import styled from 'styled-components';
import Checkbox from '../../Checkbox';
import { useSelector } from 'react-redux';
import { IParams } from '../../../interface/components-ts/toolBar-ts/IToolBar';
import { IRealMode } from '../../../interface/store-ts/actions/realMode';

const Mode = ({ param }: IParams) => {

    const { realMode } = useSelector((state: IRealMode) => state.realMode);

    return <ModeContent>
        <ModeTittle margin="0 20px 0 0" fontSize="14px">
            {realMode ? 'Real Mode' : 'Demo Mode' }
        </ModeTittle>
        <Checkbox position={'unset'} param={param}/>
        {realMode}
    </ModeContent>;

};

const ModeContent = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
  @media (max-width: 568px){
    gap: 16px;
  }
`;

const ModeTittle: any = styled.div`
  color: ${props => props.theme.textColors.color1};
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  justify-content: center;
  letter-spacing: 0.3px;
  @media (max-width: 568px){
    font-size: 12px;
  }
`;

export default Mode;