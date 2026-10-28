import Icon from './Icon.jsx'

const base = 'flex w-full cursor-pointer items-center rounded-[14px] text-left transition-[transform,background-color] duration-150 hover:translate-x-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

const variants = {
    primary: 'h-[72px] justify-between bg-accent px-7 font-display text-[26px] font-extrabold text-ink hover:brightness-105',
    secondary: 'h-[60px] gap-4 border border-line bg-surface px-6 text-lg font-semibold text-ivory hover:bg-raised',
}

export default function MenuButton({ variant = 'secondary', icon, hint, onClick, children }) {
    if (variant == 'primary') {
        return (
        <button type='button' onClick={onClick} className={`${base} ${variants.primary}`}>
            <span>{children}</span>
            <Icon name='arrowRight' size={26} strokeWidth={2.2} />
        </button>
        )
    }

    return (
        <button type='button' onClick={onClick} className={`${base} ${variants.secondary}`}>
        {icon && <Icon name={icon} />}
        <span>{children}</span>
        {hint && <span className='ml-auto hidden text-[13px] font-medium text-muted sm:inline'>{hint}</span>}
        </button>
    )
}