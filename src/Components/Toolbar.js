import AC_logo from '../Assets/AC_logo.svg'

const Toolbar = ({ contacts }) => {
    let toolBarStyle = 'px-4 py-0 h-14 flex flex-row items-center place-content-center sm:place-content-between after:content bg-primary'
    return (
        <div className={toolBarStyle}>
            <Logo />
            <Navigation  contacts={contacts}/>
        </div >
    )
}

const Logo = () => {
    return (
        <div className="md:grow-0 place-self-start h-full" to={"#main"}>
            <div className='h-full hidden sm:block'>
                <img src={AC_logo} className='h-full' />
            </div>
        </div>
    )
}

const Navigation = ({ contacts }) => {
    return (
        <nav className="justify-self-start text-primary-dark">
            <ul className='list-none flex flex-row m-0 p-0 items-center'>
                <li className='mx-1 sm:mx-2.5 hover:cursor-pointer'><NavItem link={contacts?.medium?.url} primaryAction={false}>Blog</NavItem></li>
                <li className='mx-1 sm:mx-2.5 hover:cursor-pointer'><NavItem link={contacts?.github?.url} primaryAction={false}>Github</NavItem></li>
                <li className='mx-1 sm:mx-2.5 hover:cursor-pointer'><NavItem link={"emailto:" + contacts?.email?.url} primaryAction={false}>Contact</NavItem></li>
                <li className='mx-1 sm:mx-2.5 hover:cursor-pointer'><NavItem link={contacts?.resume?.url} primaryAction={true}>Resume</NavItem></li>
            </ul>
        </nav>
    )
}

const NavItem = ({ children, link, primaryAction }) => {
    const itemStyle = "w-22 text-on-primary transition-all hover:text-secondary active:text-secondary"
    const boxstyle = primaryAction ? "border-solid rounded border-secondary border-2 p-2 text-secondary hover:text-secondary-light" : ""
    const finalStyle = boxstyle.concat(" ", itemStyle)

    const openLink = (link) => {
        window.open(link, '_blank', 'noopener', 'me', 'noreferrer');
    }

    return (
        <div className={finalStyle} onClick={() => openLink(link)}>
            {children}
        </div>
    )
}

export default Toolbar; 