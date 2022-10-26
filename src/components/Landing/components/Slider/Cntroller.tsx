import { useEffect } from 'react';
import { useSwiper } from 'swiper/react';

type IController = { slideNext: boolean | null, slidePrev: boolean | null }

const Controller = ({ slideNext, slidePrev }:IController) => {

    const swiper = useSwiper();

    useEffect(() => {

        if(slideNext === null) {

            return;

        }

        swiper.slideNext();

    }, [swiper, slideNext]);

    useEffect(() => {

        if(slidePrev === null) {

            return;

        }

        swiper.slidePrev();

    }, [swiper, slidePrev]);

    return null;

};

export default Controller;
