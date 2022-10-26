import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import RulesIcon from '../../../assets/icons/rules.svg';
import SecurityIcon from '../../../assets/icons/security.svg';
import SoundOnIcon from '../../../assets/icons/sound.svg';
import SoundOffIcon from '../../../assets/icons/sound-off.svg';
import { useDispatch, useSelector } from 'react-redux';
import { triggerModal } from '../../../store/acions/modal';
import RulesLightIcon from '../../../assets/icons/rulesLightIcon.svg';
import SecurityLightIcon from '../../../assets/icons/securityLightIcon.svg';
import SoundOffLightIcon from '../../../assets/icons/soundOffLightIcon.svg';
import SoundOnLight from '../../../assets/icons/soundOnLight.svg';
import { IState } from '../../../interface/store-ts/actions/lightMode';


const Rules = () => {

    const dispatch = useDispatch();
    const [sound, setSound] = useState(true);
    const lightMode = useSelector((state:IState) => state.lightMode.lightMode);


    return <RulesContent>
        <Icon lightMode={lightMode}>
            {lightMode ? <Image
                src={SecurityLightIcon}
                alt="..."
            /> : <Image
                src={SecurityIcon}
                alt="..."
                width={32}
                height={32}
            />}
        </Icon>
        <Icon type={'rules'} onClick={() => dispatch(triggerModal('rules', true))} lightMode={lightMode}>
            {lightMode ? <Image
                src={RulesLightIcon}
                alt="..."
                width={24}
                height={20}
            /> : <Image
                src={RulesIcon}
                alt="..."
                width={32}
                height={32}
            />}
            <RulesText>
                Rules
            </RulesText>
        </Icon>
        <Icon lightMode={lightMode}>
            {lightMode ? <Image
                onClick={() => setSound(!sound)}
                src={sound ? SoundOnLight : SoundOffLightIcon}
                alt="..."
                width={24}
                height={24}
            /> : <Image
                onClick={() => setSound(!sound)}
                src={sound ? SoundOnIcon : SoundOffIcon}
                alt="..."
                width={32}
                height={32}
            />}
        </Icon>
    </RulesContent>;

};

const RulesContent = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 586px) {
    gap: 16px;
  }
`;

const Icon: any = styled.div`
  background: ${(lightMode: any) => lightMode ? lightMode.theme.bgColors.color8 : lightMode.theme.bgColors.color2};
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0;
  cursor: pointer;
  width: 32px;
  height: 32px;
  justify-content: center;
  ${({ type }: any) => type && 'min-width: 72px'};
  @media (max-width: 586px) {
    ${({ type }: any) => type && 'min-width: 63px'};
  }
}
`;

const RulesText = styled.span`
  color: ${props => props.theme.textColors.color3};
  font-size: 12px;
  @media (max-width: 586px) {
    font-size: 10px;
  }
`;

export default Rules;