import Modal from './index';
import Tabs from '../Tabs';
import { useState } from 'react';
import { TabContent } from './ModalStyles/ruleStyles';
import { TextStyle, TittleStyle } from '../Text/TextStyles/styles';
import { tabs } from '../../assets/static/static';
import { ThemeNew } from '../../constants/themeNew';
import { useSelector } from 'react-redux';
import { IModalSelector } from '../../interface/components-ts/modals-ts/IMOdals';
import { IState } from '../../interface/store-ts/actions/lightMode';

const RulesModal = () => {

    const lightMode = useSelector((state: IState) => state.lightMode.lightMode);
    const [active, setActive] = useState(0);
    const Theme = lightMode ? ThemeNew.lightMode : ThemeNew.darkMode;
    const { rules } = useSelector((state: IModalSelector) => state.modal);

    return <Modal
        padding={'10px 0 32px 0'}
        borderRadius={'10px'}
        open={rules}
        modalKey={'rules'}
    >
        <Tabs
            tabs={tabs}
            active={active}
            changeActiveTab={setActive}
            padding="0 32px 0 32px"
            activeTabBackground={Theme.bgColors.color13}
            background={Theme.bgColors.color17}
        >
            <TabContent
                active={active === 0}
                onClick={() => setActive(0)}
            >
                <TittleStyle
                    color={Theme.textColors.color1}
                    fontSize="14px"
                    display="block"
                    margin="0 0 5px 0"
                    weight="bold"
                >
                    HashChain
                </TittleStyle>
                <TextStyle
                    color={Theme.textColors.color3}
                    fontSize="14px"
                    display="block"
                >
                    ApeDice uses a secret key with SHA-256 to generate a chain
                    of 1,000,000 hashes.
                </TextStyle>
                <br/>
                <TextStyle
                    color={Theme.textColors.color3}
                    fontSize="14px"
                    display="block"
                >
                    Each round seed’s hash equals the previous round seed.
                </TextStyle>
                <br/>
                <TextStyle
                    color={Theme.textColors.color3}
                    fontSize="14px"
                    display="block"
                >
                    For example, 1,000,000th seed is the first round of the
                    game.
                </TextStyle>
                <br/>
                <TittleStyle
                    color={Theme.textColors.color1}
                    fontSize="14px"
                    display="block"
                    margin="0 0 5px 0"
                    weight="bold"
                >
                    Randomness
                </TittleStyle>
                <TextStyle
                    color={Theme.textColors.color3}
                    fontSize="14px"
                    display="block"
                >
                    First, hash the combination of the current round seed and
                    the participated transaction ID in the previous round to
                    create a random number.
                </TextStyle>
            </TabContent>
            <TabContent
                textAlign={'center'}
                active={active === 1}
                onClick={() => setActive(1)}
            >
                <TextStyle
                    color={Theme.textColors.color1}
                    fontSize="14px"
                    display="block"
                    lineHeight="24px"
                >
                    MIN BET: {1}
                </TextStyle>
                <TextStyle
                    color={Theme.textColors.color1}
                    fontSize="14px"
                    display="block"
                    lineHeight="24px"
                >
                    MAX PAYOUT: {10}
                </TextStyle>
            </TabContent>
        </Tabs>
    </Modal>;

};

export default RulesModal;