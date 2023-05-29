import soundFile from './alertareloj.mp3';
export const playSound = () => {
    const audio = new Audio(soundFile);
    audio.play();
};