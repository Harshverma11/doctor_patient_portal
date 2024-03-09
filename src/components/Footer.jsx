import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-blue-950 border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="logo.jpg"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                   
                </div>
            </div>
        </footer>
    );
}