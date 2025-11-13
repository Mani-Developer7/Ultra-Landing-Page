import React from 'react';

import EmailSignUp from '../common/NewsLetter';
import FooterLinks from '../common/FooterLinks';
import FooterBar from '../common/FooterBar';

export default function Footer() {
  return (
    <footer className="bg-[#0b1120] text-white  px-6">

      <EmailSignUp />
      <hr className="border-gray-800 mb-10" />
      <FooterLinks />

      <FooterBar />
    </footer>
  );
}