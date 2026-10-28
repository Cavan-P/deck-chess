import { RotateCard, ValueCard, WildCard, IconCard, PieceCard } from './PlayingCard.jsx'

const KIND_COLORS = {
    move: 'blue',
    place: 'coral',
    swap: 'coral',
    promote: 'coral',
    skip: 'teal',
    discard: 'teal',
    freeze: 'teal',
    rotate: 'accent',
    piece: 'blue'
}

const KIND_ICONS = {
    skip: 'skip',
    freeze: 'freeze',
    swap: 'swap',
    promote: 'promote',
}

export default function CardFace({ card, size }) {
    const color = KIND_COLORS[card.kind]

    if (card.kind == 'rotate') {
        return <RotateCard size={size} color={color} />
    }

    if(card.kind == 'wild'){
        return <WildCard size={size} value={card.value}/>
    }

    if(card.kind == 'piece'){
        return <PieceCard piece={card.piece} color={color} value={card.value} size={size} />
    }

    if (card.value) {
        return <ValueCard size={size} value={card.value} color={color} />
    }

    return <IconCard size={size} color={color} icon={KIND_ICONS[card.kind]} label={card.name.toUpperCase()} />
}