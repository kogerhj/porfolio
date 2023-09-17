export default function Navbar() {
    return (
        <header className="block pt-4">
            <ul className="flex flex-row justify-evenly max-w-6xl m-auto">
                <li>
                    <button className="ease-linear duration-200 px-3 py-2 hover:bg-light-gray rounded">
                        About
                    </button>
                </li>
                <li>
                    <button className="ease-linear duration-200 hover:scale-110 px-3 py-2 rounded">
                        Contact
                    </button>
                </li>
                <li>
                    <button className="px-3 py-2 ease-linear duration-200 hover:underline decoration-amber-50s hover:rounded">
                        Projects
                    </button>
                </li>
                <li>
                    <button className="px-3 py-2 hover:bg-light-gray rounded">
                        Skills
                    </button>
                </li>
            </ul>
        </header>
    )
}