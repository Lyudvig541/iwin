import styled, { css } from 'styled-components';
import Mode from './components/Mode';
import Rules from './components/Rules';
import { IToolBar } from '../../interface/components-ts/toolBar-ts/IToolBar';

const ToolBar = ({ styles, gameRealMode }: IToolBar) => (
    <ToolContainer {...styles}>
        <Mode param={gameRealMode}/>
        <Rules />
    </ToolContainer>
);

const ToolContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: ${({ mb }:any) => mb || '0'};

  @media (max-width: 1320px){
    padding: 0 22px;
    ${ ({ ordered }:any) => ordered && css`
      order: ${({ order }:any) => order || '4'};
  `}
  }
  @media (max-width: 1200px){
    padding: 0;
  }
  @media (max-width: 946px){
     ${ ({ ordered }:any) => ordered && css`
      order: ${({ order }:any) => order || '4'};
  `}
  }
  @media (max-width: 568px){
    padding: 26px 16px 32px;
  }
  
`;

export default ToolBar;
