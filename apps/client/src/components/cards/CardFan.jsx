import CardFace from './CardFace.jsx'
import { cardWidth } from './cardSizes.js'

const MAX_STEP = 40
const SPREAD = 8

export default function CardFan({ cards, size = 'sm', maxWidth = 200 }) {
    const width = cardWidth(size)
    const middle = (cards.length - 1) / 2
    const step = cards.length > 1 ? Math.min(MAX_STEP, (maxWidth - width) / (cards.length - 1)) : 0

    return (
        <div aria-hidden='true' className='flex justify-center px-4 pt-2 pb-6'>
            {cards.map((card, i) => {
                const offset = i - middle
                const angle = offset * SPREAD
                const drop = offset * offset * 5

                return (
                    <div
                        key={card.id}
                        className='origin-bottom transition-[translate] duration-150 hover:z-10 hover:-translate-y-4'
                        style={{
                            marginLeft: !i ? 0 : step - width,
                            transform: `translateY(${drop}px) rotate(${angle}deg)`,
                        }}
                    >
                        <CardFace card={card} size={size} />
                    </div>
                )
            })}
        </div>
    )
}