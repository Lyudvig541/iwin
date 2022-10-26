import { useEffect, useRef } from 'react';
import { CloseModal, ModalBody, ModalContent, ModalHeader, ModalStyle, ModalTitle, TitleStyle, BackPart, Back } from './ModalStyles/styles';
import Image from 'next/image';
import useOutside from '../../hooks/useOutside';
import CloseIcon from '../../assets/icons/close.svg';
import CloseIconLight from '../../assets/icons/closeLight.svg';
import BackArrow from '../../assets/icons/backArrow.png';
import { useDispatch, useSelector } from 'react-redux';
import { triggerModal } from '../../store/acions/modal';
import { IModals, IModalSelector } from '../../interface/components-ts/modals-ts/IMOdals';
import { IState } from '../../interface/store-ts/actions/lightMode';

const Modal = ({
    children, 
    title, 
    icon, 
    padding, 
    borderRadius, 
    navBar,
    back,
    setBack = () => {},
    openFrom = 'center',
    open,
    modalKey= ''
}: IModals) => {
    
    const dispatch = useDispatch();
    const { rules } = useSelector((state: IModalSelector) => state.modal);
    const lightMode = useSelector((state: IState) => state.lightMode.lightMode);

    const modal = useRef();
    const { showModal, setShowModal } = useOutside(modal, rules);

    useEffect(() => {

        if (showModal) {

            dispatch(triggerModal(modalKey, false));
            setShowModal(false);

        }

    }, [dispatch, showModal]);

    return <ModalContent open={open} navBar={navBar}>
        <ModalStyle ref={modal} padding={padding} borderRadius={borderRadius} openFrom={openFrom}>
            <ModalHeader back={back ? 1 : 0}>
                {back ? <BackPart>
                    <Back onClick={setBack}>
                        <Image
                            src={BackArrow}
                            alt={'...'}
                        />

                    </Back>
                </BackPart>
                    : null }
                <ModalTitle>
                    {icon && <Image
                        src={icon}
                        alt={'...'}
                    />}
                    <TitleStyle>
                        {title}
                    </TitleStyle>
                </ModalTitle>
                <CloseModal>
                    <Image
                        onClick={() => {

                            dispatch(triggerModal(modalKey, false));

                        }}
                        src={lightMode ? CloseIconLight : CloseIcon}
                        width={30}
                        height={30}
                        alt={'...'}
                    />
                </CloseModal>
            </ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
        </ModalStyle>
    </ModalContent>;

};

export default Modal;