import Icon from '../ui/Icon.jsx'
import MiniBoard from '../board/MiniBoard.jsx'

export const PIECE_GLYPHS = {
    king: '\u265A\uFE0E',
    queen: '\u265B\uFE0E',
    rook: '\u265C\uFE0E',
    bishop: '\u265D\uFE0E',
    knight: '\u265E\uFE0E',
    pawn: '\u265F\uFE0E',
}

const CARD_FILLS = {
    ivory: 'bg-ivory',
    accent: 'bg-accent',
    blue: 'bg-card-blue',
    coral: 'bg-card-coral',
    teal: 'bg-card-teal',
}

const CARD_SIZES = {
    md: {
        frame: 'w-[190px] rounded-[18px] p-4',
        corner: 34,
        value: 'text-[110px]',
        glyph: 'text-[120px]',
        board: 110,
        icon: 36,
        label: 'text-lg',
        art: 95
    },
    sm: {
        frame: 'w-[130px] rounded-xl p-3',
        corner: 23,
        value: 'text-[75px]',
        glyph: 'text-[82px]',
        board: 75,
        icon: 24,
        label: 'text-xs',
        art: 65
    },
}

export function CardFrame({ corner, footer, size = 'md', color = 'ivory', rotate = 0, className = '', style, children }){
    const s = CARD_SIZES[size]
    const fill = CARD_FILLS[color] ?? CARD_FILLS.ivory
    const cornerStyle = { fontSize: s.corner }

    return (
        <div
        className={`flex aspect-19/28 ${s.frame} flex-col justify-between text-ink shadow-[0_18px_40px_rgba(0,0,0,0.45)] ${fill} ${className}`}
        style={{ transform: `rotate(${rotate}deg)`, ...style }}
        >
        <span className='font-display leading-none font-extrabold' style={cornerStyle}>
            {corner}
        </span>
        <div className='flex items-center justify-center'>{children}</div>
        {footer ? (
            <div className='self-end'>{footer}</div>
        ) : (
            <span className='rotate-180 self-end font-display leading-none font-extrabold' style={cornerStyle}>
            {corner}
            </span>
        )}
        </div>
    )
}

//Move a piece
export function PieceCard({ piece, color = 'accent', size = 'md', value, ...frameProps }){
    const s = CARD_SIZES[size]

    return (
        <CardFrame color={color} size={size} corner={value} {...frameProps}>
            <span className={`${s.glyph} leading-none`}>{PIECE_GLYPHS[piece]}</span>
        </CardFrame>
    )
}

//Make 'n' moves
export function ValueCard({ color = 'accent', size = 'md', value, ...frameProps }) {
    const s = CARD_SIZES[size]

    return (
        <CardFrame color={color} size={size} corner={value} {...frameProps}>
            <span className={`font-display ${s.value} leading-none font-extrabold`}>{value}</span>
        </CardFrame>
    )
}

//Chaos!  Rotaet the board
export function RotateCard({ color = 'accent', size = 'md', ...frameProps }){
    const s = CARD_SIZES[size]

    return (
        <CardFrame
            color={color}
            size={size}
            corner={<Icon name='rotate' size={s.icon} strokeWidth={2.4} />}
            footer={<span className={`font-display ${s.label} font-extrabold tracking-[1px]`}>ROTATE</span>}
            {...frameProps}
        >
            <MiniBoard px={s.board} />
        </CardFrame>
    )
}

export function IconCard({ icon, label, color = 'accent', size = 'md', ...frameProps }) {
    const s = CARD_SIZES[size]

    return (
        <CardFrame
            size={size}
            color={color}
            corner={<Icon name={icon} size={s.icon} strokeWidth={2.4} />}
            footer={<span className={`font-display ${s.label} font-extrabold tracking-[1px]`}>{label}</span>}
            {...frameProps}
        >
            <Icon name={icon} size={s.art} strokeWidth={2} />
        </CardFrame>
    )
}