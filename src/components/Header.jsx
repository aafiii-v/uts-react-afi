const Header = () => {
    return (
        <>
            <header className="bg-white shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-600">Our Cars</h1>
                    <nav>
                        <ul className="flex space-x-6 text-gray-700">
                            <li><a href="#" className="hover:text-blue-600">Home</a></li>
                            <li><a href="#" className="hover:text-blue-600">Mobil</a></li>
                            <li><a href="#" className="hover:text-blue-600">Tentang</a></li>
                            <li><a href="#" className="hover:text-blue-600">Kontak</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
