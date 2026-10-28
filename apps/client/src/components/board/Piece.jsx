import { useSettings } from '../../settings.jsx'

const GLYPHS = {
    black: { king: '\u265A', queen: '\u265B', rook: '\u265C', bishop: '\u265D', knight: '\u265E', pawn: '\u265F' },
    white: { king: '\u2654', queen: '\u2655', rook: '\u2656', bishop: '\u2657', knight: '\u2658', pawn: '\u2659' }
}

export default function Piece({ type, color, look} ) {
    const { settings } = useSettings()
    const finalLook = look ?? settings.pieceLook

    if (finalLook == 'image') {
        return (
            <img
                src={`/pieces/${color}-${type}.png`}
                alt={`${color} ${type}`}
                draggable={false}
                className='relative size-[88%] object-contain select-none'
            />
        )
    }

    return (
        <span className='relative text-[78cqw] leading-none text-ink select-none'>
            {GLYPHS[color][type]}{'\uFE0E'}
        </span>
    )
}