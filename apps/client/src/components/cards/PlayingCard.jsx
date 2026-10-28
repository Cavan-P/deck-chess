import Icon from '../ui/Icon.jsx'
import MiniBoard from '../board/MiniBoard.jsx'
import { PIECE_GLYPHS, CARD_SIZES } from './cardSizes.js'

const CARD_FILLS = {
    ivory: 'bg-ivory text-ink',
    accent: 'bg-accent text-ink',
    blue: 'bg-card-blue text-ink',
    coral: 'bg-card-coral text-ink',
    teal: 'bg-card-teal text-ink',
    ink: 'bg-ink text-ivory border-2 border-ivory/15',
}

export function CardFrame({ corner, footer, size = 'md', color = 'ivory', rotate = 0, className = '', style, children }){
    const s = CARD_SIZES[size]
    const fill = CARD_FILLS[color] ?? CARD_FILLS.ivory
    const cornerStyle = { fontSize: s.corner }

    return (
        <div
        className={`flex aspect-19/28 ${s.frame} flex-col justify-between shadow-[0_18px_40px_rgba(0,0,0,0.45)] ${fill} ${className}`}
        style={{ width: s.width, transform: `rotate(${rotate}deg)`, ...style }}
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

const WILD_WHEEL = 'conic-gradient(var(--color-card-blue) 0 25%, var(--color-card-coral) 0 50%, var(--color-card-teal) 0 75%, var(--color-accent) 0)'

export function WildCard({ value, size = 'md', ...frameProps }) {
    const s = CARD_SIZES[size]

    return (
        <CardFrame
            color='ink'
            size={size}
            corner={value}
            footer={<span className={`font-display ${s.label} font-extrabold tracking-[1px]`}>WILD</span>}
            {...frameProps}
        >
            <div
                className='flex rotate-45 items-center justify-center rounded-full'
                style={{ width: s.art, height: s.art, background: WILD_WHEEL }}
            >
                <div className='flex size-[70%] -rotate-45 items-center justify-center rounded-full bg-ink'>
                    <span className={`font-display ${s.wild} leading-none font-extrabold`}>{value}</span>
                </div>
            </div>
        </CardFrame>
    )
}