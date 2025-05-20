import logo from '../assets/logo.svg'

export function Header() {
    return (
        <header className='flex flex-1 items-center justify-center py-20 px-2.5 bg-gray-700'>
            <img src={logo} alt="Logo Todo" />
        </header>
    )
}