import styled, { css } from 'styled-components';
import { useEffect, useState } from 'react';
import DropDown from '../DropDown';
import Pagination from './components/Pagination';
import { ThemeNew } from '../../constants/themeNew';
import { dropDownData, tableData } from '../../assets/static/static';
import { useSelector } from 'react-redux';
import { ITable } from '../../interface/components-ts/table-ts/ITable';
import { IState } from '../../interface/store-ts/actions/lightMode';

const Table = ({ headerTabs, onPageChange, data, value, tableRef, active = 0, setActive=() => {} } :ITable) => {

    const lightMode = useSelector((state:IState) => state.lightMode.lightMode);
    const [columns, setColumns] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [theme, setTheme] = useState<{[key: string]: {[key: string]: string}}>(ThemeNew.lightMode);


    const changeDropValue = () => {

        setActive(value);

    };

    useEffect(() => {

        handleColumns(active);

        if (lightMode) {

            setTheme(ThemeNew.lightMode);

        } else {

            setTheme(ThemeNew.darkMode);

        }

    }, [active, currentPage, lightMode]);

    const handleColumns = (active: number) => {

        switch (active) {

            case 0:
                setColumns(tableData['0']);
                break;
            case 1:
                setColumns(tableData['1']);
                break;
            case 2:
                setColumns(tableData['1']);
                break;

        }

    };

    return (<MainDiv ref={tableRef}>
        <TableHeader>
            <HeaderLeftSide>
                {headerTabs.map((item, key) => (<HeaderClickableText key={key} active={active === key}
                    onClick={() => {

                        setActive(key);

                    }}>
                    <span>
                        {item}
                    </span>
                </HeaderClickableText>))}
            </HeaderLeftSide>
            <HeaderLeftSideMobile>
                <DropDown
                    data={dropDownData}
                    onChange={changeDropValue}
                    type={'Select'}
                />
            </HeaderLeftSideMobile>
            <Pagination
                data={data} currentPage={currentPage} setCurrentPage={setCurrentPage}
                onPageChange={onPageChange} title={'Rows per page:'}/>
        </TableHeader>
        <GreyLine/>
        <TableRows>
            <LeftPadding>
                <TableRow margin={'5px 0 0 0'}>
                </TableRow>
                {data.map((_, key) => active !== 0
                    ? <TableNullRow key={key} background={key % 2 === 0 ? theme.bgColors.color12 : ''}>
                        <TableNullCol color={theme.textColors.color1} lineHeight={'24px'}/>
                    </TableNullRow>
                    : <TableNullRow key={key} background={key % 2 === 0 ? theme.bgColors.color12 : ''}>
                        <TableNullCol color={theme.textColors.color1} lineHeight={'24px'}/>
                    </TableNullRow>)}
            </LeftPadding>
            <Scroll>
                <TableRow margin={'5px 0 0 0'}>
                    {columns.map((item, key) => <TableCol key={key}>{item}</TableCol>)}
                </TableRow>
                {data.map((item, key) => active !== 0
                    ? <TableRow key={key} background={key % 2 === 0 ? theme.bgColors.color12 : ''}>
                        <TableCol color={theme.textColors.color1} lineHeight={'24px'}>{item.game}</TableCol>
                        <TableCol color={theme.textColors.color1} lineHeight={'24px'}>{item.user}</TableCol>
                        <TableCol color={theme.textColors.color1} lineHeight={'24px'}>{item.bet}</TableCol>
                        <TableCol color={theme.textColors.color1} lineHeight={'24px'}>{item.multiplier}</TableCol>
                        <TableCol color={theme.textColors.color1} lineHeight={'20px'} fontSize={'12px'}>
                            <Payout isWin={item.isWin}>{item.payout}</Payout>
                        </TableCol>
                    </TableRow> : <TableRow key={key} background={key % 2 === 0 ? theme.bgColors.color12 : ''}>
                        <TableCol color={theme.textColors.color1} lineHeight={'24px'}>{item.id}</TableCol>
                        <TableCol color={theme.textColors.color1} lineHeight={'24px'}>{item.user}</TableCol>
                        <TableCol color={theme.textColors.color1} lineHeight={'24px'}>{item.amount}</TableCol>
                        <TableCol color={theme.textColors.color1} lineHeight={'24px'}>{item.multiplier}</TableCol>
                        <TableCol color={theme.textColors.color1} lineHeight={'24px'}>{item.game}</TableCol>
                        <TableCol color={theme.textColors.color1} lineHeight={'24px'}>{item.roll}</TableCol>
                        <TableCol color={theme.textColors.color1} lineHeight={'20px'} fontSize={'12px'}>
                            <Payout isWin={item.isWin}>{item.payout}</Payout>
                        </TableCol>
                    </TableRow>)}
            </Scroll>
            <RightPadding>
                <TableRow margin={'5px 0 0 0'}>
                </TableRow>
                {data.map((_, key) => active !== 0
                    ? <TableNullRow key={key} background={key % 2 === 0 ? theme.bgColors.color12 : ''}>
                        <TableNullCol color={theme.textColors.color1} lineHeight={'24px'}/>
                    </TableNullRow>
                    : <TableNullRow key={key} background={key % 2 === 0 ? theme.bgColors.color12 : ''}>
                        <TableNullCol color={theme.textColors.color1} lineHeight={'24px'}/>
                    </TableNullRow>)}
            </RightPadding>
        </TableRows>
    </MainDiv>);

};

const TableRows = styled.div`
  @media (max-width: 950px) {
    display: flex;

  }
`;
const Scroll = styled.div`
  @media (max-width: 950px) {
    max-width: 928px;
    overflow-x: scroll;
  }
`;
const LeftPadding = styled.div`
  display: none;
  @media (max-width: 660px) {
    display: inline-block;
    width: 32px;
  }
`;
const RightPadding = styled.div`
  display: none;
  @media (max-width: 660px) {
    display: inline-block;
    width: 32px;
  }
`;

const MainDiv = styled.div`
  background: ${props => props.theme.bgColors.color1};
  box-shadow: 0 8px 6px ${props => props.theme.bgColors.color4};
  border-radius: 10px;
  max-width: 1400px;
  width: 100%;
  padding-bottom: 26px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    margin: 0 auto;
    width: 100%;
  }
  @media (max-width: 375px) {
    margin: 0;
  }
`;
const TableHeader = styled.div`
  display: flex;
  background: ${props => props.theme.bgColors.color1};
  border-radius: 10px;
  padding: 28px 32px 23px 32px;
  justify-content: space-between;
  @media (max-width: 660px) {

  }
`;
const HeaderClickableText:any = styled.p`
  position: relative;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  letter-spacing: 0.3px;
  color: ${props => props.theme.textColors.color3};
  margin: 0 0 0 20px;
  cursor: pointer;

  ${({ active }: any) => active && css`
    color: ${props => props.theme.textColors.color1};

    &:before {
      display: flex;
      position: absolute;
      content: '';
      left: -22px;
      width: 8px;
      height: 8px;
      background: ${props => props.theme.buttonColors.mix1};
      border-radius: 50%;
    }`}
  > span {
    margin-right: 68px;
    @media (max-width: 1200px) {
      margin-right: 28px;
    }
  }
`;
const HeaderLeftSide = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 660px) {
    display: none;
  }
`;
const HeaderLeftSideMobile = styled.div`
  display: none;
  @media (max-width: 660px) {
    display: flex;
    align-items: center;
  }
`;
const GreyLine = styled.div`
  border: 1px solid ${props => props.theme.bgColors.color3};
  margin: 0 32px 0 32px;
`;
const TableRow:any = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: row;
  justify-content: space-around;
  background: ${({ background }: any) => background || ''};
  margin: ${({ margin }: any) => margin || 0};
  @media (max-width: 660px) {
    width: 928px;
  }
`;
const TableNullRow: any = styled.div`
  display: none;
  @media (max-width: 950px) {
    height: 56px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: row;
    justify-content: space-around;
    background: ${({ background }: any) => background || ''};
    margin: ${({ margin }: any) => margin || 0};
    width: 32px;
  }
`;
const TableCol:any = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.3px;
  flex-direction: column;
  width: ${({ active }:any) => active === 0 ? '233px' : '288px'};
  font-style: normal;
  font-weight: 600;
  font-size: ${({ fontSize }: any) => fontSize || '14px'};
  line-height: ${({ lineHeight }: any) => lineHeight || '19px'};
  color: ${({ color, theme }: any) => color || theme.textColors.color3};
  text-shadow: 0 4px 4px ${props => props.theme.textColors.color5};
`;
const TableNullCol: any = styled.div`
  width: 32px;
`;
const Payout: any = styled.div`
  background: ${({ isWin, theme }: any) => isWin ? theme.bgColors.color16 : theme.bgColors.color14};
  border: 1px solid ${({ isWin, theme }: any) => isWin ? theme.buttonColors.borderColor4 : theme.buttonColors.buttonColor7};
  box-sizing: border-box;
  border-radius: 100px;
  width: 105px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    width: 95px;
  }
`;

export default Table;
