export default function MiniBoard({ size = 4, px = 110, dark = '#14161F', light = 'transparent', className = '' }) {
    const squares = Array.from({ length: size * size }, (_, i) => {
        const row = Math.floor(i / size)
        const col = i % size
        return (row + col) % 2 === 0 ? dark : light
    })

    return (
        <div
        className={`grid overflow-hidden rounded-md border-[3px] ${className}`}
        style={{
            width: px,
            height: px,
            borderColor: dark,
            gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
        }}
        >
        {squares.map((color, i) => (
            <div key={i} style={{ background: color }} />
        ))}
        </div>
    )
}