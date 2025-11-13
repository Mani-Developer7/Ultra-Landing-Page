import React from 'react'
import { footerLinks } from '../../utils/footerData';

const FooterLinks = () => {
    return (
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerLinks.map((section) => (
                <div key={section.title}>
                    <h3 className="font-semibold text-lg mb-3">{section.title}</h3>
                    <ul className="space-y-1">
                        {section.links.map((link) => (
                            <li key={link}>
                                <a href="#" className="hover:underline">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default FooterLinks
