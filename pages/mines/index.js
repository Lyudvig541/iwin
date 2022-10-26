import styled from 'styled-components';
import { roundData } from '../../src/assets/static-data';
import MinesPage from '../../src/components/Mines';
import RulesModal from '../../src/components/Modals/RulesModal';

export default function Mines() {


    return (
        <Container>
            <RulesModal/>
            <MinesPage scoreboardData={roundData}/>
        </Container>
    );

}

const Container = styled.div`
  text-align: -webkit-center;
`;