export default function Navbar() {
    return (
        <header className="block pt-4">
            <ul className="flex justify-evenly">
                <li>
                    <button className="ease-linear duration-200 px-3 py-2 hover:bg-light-gray rounded">
                        About
                    </button>
                </li>
                <li>
                    <button className="px-3 py-2 hover:bg-light-gray rounded">
                        Contact
                    </button>
                </li>
                <li>
                    <button className="px-3 py-2 hover:bg-light-gray rounded">
                        Project
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