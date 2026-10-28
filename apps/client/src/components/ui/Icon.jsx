
const PATHS = {
    friends: (
        <>
            <circle cx="9" cy="8" r="3.5" />
            <path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6" />
            <circle cx="17" cy="9" r="2.5" />
            <path d="M17.5 14c2.5.3 4 2.2 4 5" />
        </>
    ),
    settings: (
        <>
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
        </>
    ),
    arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
    arrowLeft: <path d="M19 12H5M11 6l-6 6 6 6" />,
    lock: (
        <>
            <rect x="4" y="10" width="16" height="11" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </>
    ),
    bot: (
        <>
            <rect x="5" y="8" width="14" height="11" rx="3" />
            <path d="M12 8V4" />
            <circle cx="12" cy="3.5" r="1" />
            <path d="M9.5 13h.01M14.5 13h.01" />
        </>
    ),
    book: (
        <>
            <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z" />
            <path d="M4 19V5" />
            <path d="M9 8h5" />
        </>
    ),
    rotate: (
        <>
            <path d="M4 9a7 7 0 0 1 12.5-3.5L19 8" />
            <path d="M19 3v5h-5" />
            <path d="M20 15a7 7 0 0 1-12.5 3.5L5 16" />
            <path d="M5 21v-5h5" />
        </>
    ),
    skip: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M5.6 5.6l12.8 12.8" />
        </>
    ),
    freeze: <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />,
    swap: (
        <>
            <path d="M7 4L3 8l4 4" />
            <path d="M3 8h14" />
            <path d="M17 12l4 4-4 4" />
            <path d="M21 16H7" />
        </>
    ),
    promote: (
        <>
            <path d="M12 20V6" />
            <path d="M6 11l6-6 6 6" />
            <path d="M5 20h14" />
        </>
    ),
}

export default function Icon({ name, size = 22, strokeWidth = 1.8, className = '' }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className={className}
        >
            {PATHS[name]}
        </svg>
    )
}