import { useState } from "react";

type MenuListProps = {
    list: { name: string; href: string }[];
};

function Header({ list }: MenuListProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuFunction = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="sticky top-0  border-b border-gray-300 bg-white text-gray-700">
            <div className="container mx-auto flex items-center justify-between p-5 md:border-0">
                <a
                    href="#"
                    className="mb-0 flex items-center font-medium text-gray-900"
                >
                    <img
                        className="h-10 w-10"
                        src="./imgs/portfolio.png"
                        alt=""
                    />
                    <span className="ml-3 text-xl duration-300 hover:text-cyan-500">
                        Shumpei Tanaka
                    </span>
                </a>

                <ul className="hidden md:flex md:items-center">
                    {list.map((item) => (
                        <li className="mr-4" key={item.name}>
                            <a
                                href={item.href}
                                className=" text-lg font-medium duration-300 hover:text-cyan-500"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <button onClick={menuFunction} className="md:hidden">
                    <svg
                        className={
                            isMenuOpen
                                ? "hidden"
                                : "mr-2  h-8 w-8 text-gray-800 duration-300 hover:text-cyan-400"
                        }
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>

                    <svg
                        className={
                            isMenuOpen
                                ? "mr-2  h-8 w-8 text-gray-800 duration-300 hover:text-cyan-400"
                                : "hidden"
                        }
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <line x1="18" y1="6" x2="6" y2="18" />{" "}
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>
            {isMenuOpen && (
                <div className="fixed w-full border-t border-gray-300 bg-white md:hidden">
                    <ul>
                        {list.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className="mx-5 my-1 block rounded-sm px-6 py-3 text-lg font-medium hover:bg-cyan-200"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Header;
