import React from "react"

const InfoIcon = ({size}) => {
    return (
        <svg height={size} width={size} viewBox="0 0 73 73" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
            <circle cx="39.95" cy="21.35" r="3.78"/>
            <path d="M32.62,34v-.92c3-1.19,7.63-.76,10.72-1.85h.37c-1.5,7.57-4.65,14.45-5.36,22.18a.82.82,0,0,0,.36.18c2.33.78,3.67-4.62,5.18-4.25s-1,3.06-1.29,3.51c-1.36,1.78-4,4.79-7,4.81-2.17,0-4.42-1.36-4.07-5s2.4-8.7,3.51-12.75C35.92,36.62,37.08,33.89,32.62,34Z" transform="translate(-2.2 -2.2)"/>
        </svg>
    )
}

const QuestionMarkIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.07,12.85c0.77-1.39,2.25-2.21,3.11-3.44c0.91-1.29,0.4-3.7-2.18-3.7c-1.69,0-2.52,1.28-2.87,2.34L6.54,6.96 C7.25,4.83,9.18,3,11.99,3c2.35,0,3.96,1.07,4.78,2.41c0.7,1.15,1.11,3.3,0.03,4.9c-1.2,1.77-2.35,2.31-2.97,3.45 c-0.25,0.46-0.35,0.76-0.35,2.24h-2.89C10.58,15.22,10.46,13.95,11.07,12.85z M14,20c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-1.1,0.9-2,2-2 S14,18.9,14,20z"/>
        </svg>
    )
}

const SendIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 30 30" fill="currentColor">
            <path d="M0,0,30,15,0,30,10,15Z"/>
        </svg>
    )
}

const PlayIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.5,16.5l7-4.5l-7-4.5V16.5z"/>
        </svg>
    )
}

const StopIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M16,16H8V8h8V16z"/>
        </svg>
    )
}

const SoundIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"/>
        </svg>
    )
}

const VisibleIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"/>
        </svg>
    )
}

const InvisibleIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z"/>
        </svg>
    )
}

const HelpIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
        </svg>
    )
}

const SettingsIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        </svg>
    )
}

const NoteIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm2 4h10v2H7zm0 4h7v2H7z"/>
        </svg>
    )
}

const BarChartIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" fill="currentColor">
            <g>
                <rect height="11" width="4" x="4" y="9"/>
                <rect height="7" width="4" x="16" y="13"/>
                <rect height="16" width="4" x="10" y="4"/>
            </g>
        </svg>
    )
}

const CopyIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
        </svg>
    )
}

const TwitterIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
        </svg>
    )
}

const RefreshIcon = ({size}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height={size} width={size} viewBox="0 96 960 960" fill="currentColor">
            <path d="M480 896q-133 0-226.5-93.5T160 576q0-133 93.5-226.5T480 256q85 0 149 34.5T740 385V256h60v254H546v-60h168q-38-60-97-97t-137-37q-109 0-184.5 75.5T220 576q0 109 75.5 184.5T480 836q83 0 152-47.5T728 663h62q-29 105-115 169t-195 64Z"/>
        </svg>
    )
}

const Icon = ({ name, size = 24 }) => {
    const icons = {
        questionMark: QuestionMarkIcon,
        info: InfoIcon,
        play: PlayIcon,
        stop: StopIcon,
        sound: SoundIcon,
        send: SendIcon,
        visible: VisibleIcon,
        invisible: InvisibleIcon,
        barChart: BarChartIcon,
        note: NoteIcon,
        settings: SettingsIcon,
        help: HelpIcon,
        copy: CopyIcon,
        twitter: TwitterIcon,
        refresh: RefreshIcon,
    }

    if (typeof name === 'string') {
        const Component = icons[name]
        return <Component size={size} />
    }
    else {
        const Component = name
        return <Component size={size} />
    }
    
}

export {
    Icon
}