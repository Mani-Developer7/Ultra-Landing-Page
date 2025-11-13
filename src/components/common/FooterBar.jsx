import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const FooterBar = () => (
    <div className="text-white py-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center md:flex-row md:items-center md:justify-center mt-10 gap-6 md:gap-72">

            <div className="flex items-center mb-4 md:mb-0 gap-3">
                 <img src="/assets/logo.svg" alt="ultra" className="h-8"/>
                <span className="font-bold text-3xl">ULTRA</span>
            </div>


            <div className="mb-4 md:mb-0">
                <span className="text-sm">ULTRA © 2020</span>
            </div>

            <div className="flex space-x-5">
                <a href="#" aria-label="Facebook"><FaFacebookF className="h-6 w-6 hover:text-gray-400" /></a>
                <a href="#" aria-label="Instagram"><FaInstagram className="h-6 w-6 hover:text-gray-400" /></a>
                <a href="#" aria-label="Youtube"><FaYoutube className="h-6 w-6 hover:text-gray-400" /></a>
                <a href="#" aria-label="Twitter"><FaTwitter className="h-6 w-6 hover:text-gray-400" /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedinIn className="h-6 w-6 hover:text-gray-400" /></a>
            </div>
        </div>
    </div>
);

export default FooterBar;
