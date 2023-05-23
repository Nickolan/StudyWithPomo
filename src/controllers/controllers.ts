export function handle25Change(props: any) {
    if (!props.is25Checked && props.is50Checked) {
        props.set25Checked(true);
        props.set50Checked(false);
    }
}

export function handle50change(props: any) {
    if (!props.is50Checked && props.is25Checked) {
        props.set25Checked(false);
        props.set50Checked(true);
    }
}

export const formatTimer = (totalSeconds : number) => {
    
    const minutes : number = Math.floor(totalSeconds / 60);
    const seconds : number = totalSeconds % 60;

    const formattedMinutes : string = String(minutes).padStart(2, '0');
    const formattedSeconds : string = String(seconds).padStart(2, '0');

    return `${formattedMinutes} : ${formattedSeconds}`;
  };

