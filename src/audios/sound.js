import soundFile from './alertareloj.mp3';
export const playSound = () => {
    const audio = new Audio(soundFile);
    audio.play();
};
export const effectSound = (soundeffect) => {
    const audio = new Audio(soundeffect);
    audio.play();
};