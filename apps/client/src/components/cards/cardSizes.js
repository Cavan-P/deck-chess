export const PIECE_GLYPHS = {
    king: '\u265A\uFE0E',
    queen: '\u265B\uFE0E',
    rook: '\u265C\uFE0E',
    bishop: '\u265D\uFE0E',
    knight: '\u265E\uFE0E',
    pawn: '\u265F\uFE0E',
}

export const CARD_SIZES = {
    md: {
        width: 190,
        frame: 'rounded-[18px] p-4',
        corner: 34,
        value: 'text-[110px]',
        glyph: 'text-[120px]',
        board: 110,
        icon: 36,
        label: 'text-lg',
        art: 95,
        wild: 'text-[40px]'
    },
    sm: {
        width: 130,
        frame: 'rounded-xl p-3',
        corner: 23,
        value: 'text-[75px]',
        glyph: 'text-[82px]',
        board: 75,
        icon: 24,
        label: 'text-xs',
        art: 65,
        wild: 'text-[28px]'
    },
}

export function cardWidth(size){
    return CARD_SIZES[size].width
}