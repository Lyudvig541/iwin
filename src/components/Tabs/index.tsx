import { TabContainer, TabHead, Tab, TabBody } from './TabStyles/styles';
import { ITabs } from '../../interface/components-ts/table-ts/ITable';

const Tabs = ({ 
    tabs, 
    children, 
    active, 
    changeActiveTab, 
    padding, 
    background, 
    activeTabBackground
}:ITabs) => (
    <TabContainer padding={padding}>
        <TabHead background={background}>
            {tabs.map((item, key) => <Tab 
                activeTabBackground={activeTabBackground} 
                key={key} 
                active={active === key}
                onClick={() => changeActiveTab(key)}>
                {item.label}
            </Tab>)}
        </TabHead>
        <TabBody>
            {children}
        </TabBody>
    </TabContainer>
);

export default Tabs;