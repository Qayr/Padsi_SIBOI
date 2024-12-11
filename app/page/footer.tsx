import Link from 'next/link';
import Image from 'next/image';
// import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/app/assets/index';
import React from 'react';

export function Footer() {
  return (
    <footer className="flexCenter mb-10 mt-10">
      <div className="bg-gray-20 border mb-10" />
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/favicon.ico" alt="logo" width={74} height={29} />
          </Link>

           {/* Footer Links */}
           <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {/* Menu Section */}
          

            {/* Contact Info */}
            <FooterColumn title="Contact">
              <div className="flex flex-col gap-2">
                <p>Phone: <span className="text-blue-70">+62 812 3456 7890</span></p>
                <p>Email: <span className="text-blue-70">info@bowlinc.com</span></p>
                <p>Address: <span className="text-blue-70">Jl. RM Sudiono No.40a</span></p>
              </div>
            </FooterColumn>

            {/* Social Media */}
            <FooterColumn title="Follow Us">
              <ul className="flex gap-4">
              
                <Link href="https://www.instagram.com/bowlinc.ketapang" target="_blank">
                  <Image src="/instagram.png" alt="Instagram" width={50} height={50} />
                </Link>
                
              </ul>
            </FooterColumn>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-gray-20 border" />

        {/* Copyright */}
        <p className="regular-14 text-gray-30 w-full text-center">
          © 2024 Bowl Inc | All rights reserved
        </p>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};