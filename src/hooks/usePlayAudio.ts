import { useCallback, useEffect, useState } from 'react';
import { IPlayAudio, IPlayAudioParam } from '../interface/hook-ts/IPlayAudio';

export const usePlayAudio = ():IPlayAudio => {

    const [soundName, setSoundName] = useState<string>('');
    const [stopSound, setStopSound] = useState<boolean>(false);

    const playStopAudio = useCallback((option:IPlayAudioParam):void => {

        if (soundName !== '') {

            const audio = new Audio(soundName);

            (option === 'play' && audio.play()) || audio.pause();

        }
    
    }, [soundName]);

    useEffect(() => {

        playStopAudio('play');
    
    }, [playStopAudio, soundName]);
    
    useEffect(() => {

        playStopAudio('stop');

    }, [playStopAudio, stopSound]);

 
    return { setSoundName, setStopSound, stopSound };

};
