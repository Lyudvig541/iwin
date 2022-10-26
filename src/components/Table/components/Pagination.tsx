import styled from 'styled-components';
import DropDown from '../../DropDown';
import Image from 'next/image';
import left from '../../../assets/icons/left.svg';
import leftLight from '../../../assets/icons/leftLightIcon.svg';
import right from '../../../assets/icons/right.svg';
import rightLight from '../../../assets/icons/rightLightIcon.svg';
import { useState } from 'react';
import { dropDataCount } from '../../../assets/static/static';
import { useSelector } from 'react-redux';
import { IState } from '../../../interface/store-ts/actions/lightMode';
import { IPagination } from '../../../interface/components-ts/pagination-ts/IPagination';

const Pagination = ({ currentPage, data, setCurrentPage, onPageChange=() => {}, title }: IPagination) => {

    const [dataCount, setDataCount] = useState(10);
    const lightMode = useSelector((state:IState) => state.lightMode.lightMode);

    const changeDataCount = (number:number) => {

        setDataCount(number);
    
    };
    const previousData = () => {

        if(currentPage !== 1) {

            setCurrentPage(currentPage - 1);
            onPageChange(currentPage-1);
        
        }
    
    };
    const nextData = () => {

        if(currentPage !== Math.ceil(data.length/dataCount)) {

            setCurrentPage(currentPage + 1);
            onPageChange(currentPage+1);
        
        }
    
    };


    return <PaginationContent>
        <TextContent display={'none'} margin={'0 81px 0 0'}>
            {title}
            <DropDown
                type={'number'}
                data={dropDataCount}
                onChange={changeDataCount}
                titleNumber={dataCount}
            />
        </TextContent>
        <TextContent
            margin={'0 30px 0 0'}>
            {(currentPage -1)*dataCount +1} -
            {data.length > currentPage * dataCount ? ` ${currentPage * dataCount } ` : ` ${data.length } `}
            of {data.length}
        </TextContent>
        <PreviousNextIconComponent
            margin={'0 24px 0 0'}
            onClick={previousData}
            active={currentPage !== 1}>
            {lightMode ? <Image src={leftLight} alt={'left'}/> : <Image src={left} alt={'left'}/>}
        </PreviousNextIconComponent>
        <PreviousNextIconComponent
            active={currentPage !== Math.ceil(data.length/dataCount) }>
            {lightMode ? <Image src={rightLight} alt={'right'} onClick={nextData}/> : <Image src={right} alt={'right'} onClick={nextData}/>}
        </PreviousNextIconComponent>
    </PaginationContent>;

};

const PaginationContent = styled.div`
  display: flex;
  align-items: center;
`;
const PreviousNextIconComponent: any = styled.button`
  background:${({ active, theme }: any) => active ? theme.bgColors.color22 : theme.bgColors.color10 };
  border-radius: 4px;
  border: none;
  display: flex;
  margin: ${({ margin }: any) => margin || 0};
  cursor: pointer;
  width: 32px;
  height: 32px;
  align-items: center;
`;
const TextContent: any = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.3px;
  color: ${props => props.theme.textColors.color3};
  margin: ${({ margin }: any) => margin || 0};
  @media (max-width: 1320px) {
    margin: 0 31px 0 0;
  }
  
  @media (max-width: 586px) {
    display: ${({ display }: any) => display || 'none'};
  }
`;

export default Pagination;