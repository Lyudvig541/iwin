import { useState } from 'react';
import styled from 'styled-components';
import { roundData } from '../../src/assets/static-data';
import FlipPage from '../../src/components/FlipComponent';
import RulesModal from '../../src/components/Modals/RulesModal';

export default function Flip() {

    const [activeCoin, setActiveCoin] = useState('heads');

    return (
        <Container>
            <RulesModal/>
            <FlipPage
                active={activeCoin}
                changeCoin={setActiveCoin} 
                scoreboardData={roundData}
            />
        </Container>
    );

}

const Container = styled.div`
  text-align: -webkit-center;
  @media (max-width: 1320px){   
  }
  @media (max-width: 875px){ 
    
  }
`;