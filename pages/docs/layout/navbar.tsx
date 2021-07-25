import React from "react";
import DocumentationLayout from "../../../components/docs/DocumentationLayout";
import CustomHead from "../../../components/global/CustomHead";
import { getPrimaryColor } from "../../../utilities/utilFunction";
import {navbarDataJSX,  navbarDataHTML} from './../../../utilities/codeSnippetData';
import Link from "next/link";
import Image from "next/image";
import bkashLogo from "./../../../public/bkash.svg";
import CodeSnippet from "./../../../components/global/CodeSnippet";

const DashboardIcon: React.FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className={`${className}`}
      viewBox="0 0 16 16"
    >
      <g transform="translate(-0.004 0)">
        <path
          fill="currentColor"
          d="M10.039,16a1.1,1.1,0,0,1-1.1-1.1V10.039a1.1,1.1,0,0,1,1.1-1.1H14.9a1.1,1.1,0,0,1,1.1,1.1V14.9A1.1,1.1,0,0,1,14.9,16Zm.157-1.255h4.549V10.2H10.2ZM1.1,16A1.1,1.1,0,0,1,0,14.9V10.039a1.1,1.1,0,0,1,1.1-1.1H5.961a1.1,1.1,0,0,1,1.1,1.1V14.9a1.1,1.1,0,0,1-1.1,1.1Zm.157-1.255H5.8V10.2H1.255Zm8.785-7.686a1.1,1.1,0,0,1-1.1-1.1V1.1a1.1,1.1,0,0,1,1.1-1.1H14.9A1.1,1.1,0,0,1,16,1.1V5.961a1.1,1.1,0,0,1-1.1,1.1ZM10.2,5.8h4.549V1.255H10.2ZM1.1,7.059A1.1,1.1,0,0,1,0,5.961V1.1A1.1,1.1,0,0,1,1.1,0H5.961a1.1,1.1,0,0,1,1.1,1.1V5.961a1.1,1.1,0,0,1-1.1,1.1ZM1.255,5.8H5.8V1.255H1.255Z"
          transform="translate(0.004 0)"
        />
      </g>
    </svg>
  );
};

const AddMoney:React.FC<{className?: string}> = ({className}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
}

const NotificationIcon:React.FC<{className?:string}> = ({className}) => {
    return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
}

const Navbar: React.FC<{}> = () => {
  return (
    <DocumentationLayout parentSlug="layout" childSlug="navbar">
      <div>
        <CustomHead title="Navbar" description={"Navbar Guideline for bKash"} />
        <h3 className="text-primary mb-2">Navbar Layout</h3>
        <p>Here is a preview of all possible Navbar sample</p>
        <h6 className="mt-10 mb-4">
          {getPrimaryColor("`Navbar`")} &nbsp; example
        </h6>
        <div className="bg-primary-100 rounded-md p-4 mt-2">
          <header className="nav-container">
            <div className="nav-container-layout">
              <Link href="/" passHref>
                <Image
                  src={bkashLogo}
                  alt="bKash Logo"
                  width={98}
                  height={45}
                />
              </Link>
              <ul className="nav-list">
                <li>
                  <Link href="/dashboard" passHref>
                    <span className="nav-link text-primary font-medium">
                      <DashboardIcon className="mr-2 text-primary" />
                      <span>Dashboard</span>
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href="/send-money" passHref>
                    <span className="nav-link">
                      <AddMoney className="mr-2" />
                      <span>Send Money</span>
                    </span>
                  </Link>
                </li>

                <li>
                  <Link href="/notification" passHref>
                    <span className="nav-link">
                      <span className='relative mr-2'>
                      <span className="absolute block w-2 h-2 rounded bg-primary -right-0 -top-1" />
                      <NotificationIcon />
                      </span>
                      <span>Notification</span>
                    </span>
                  </Link>
                </li>

                <li>
                  <button className="flex items-center focus:outline-none">
                    <span>Alam Haq</span>
                    <span className="flex items-center justify-center ml-2 text-lg text-white bg-pink-500 rounded-full w-9 h-9">
                      AH
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </header>
        </div>
        <h6 className="mt-10 mb-4">
            Example of &nbsp; {getPrimaryColor("`Navbar JSX`")}
        </h6>
        <CodeSnippet language={'jsx'}>
            {navbarDataJSX}
        </CodeSnippet>
        <h6 className="mt-10 mb-4">
            Example of &nbsp; {getPrimaryColor("`Navbar HTML`")}
        </h6>
        <CodeSnippet language={'jsx'}>
            {navbarDataHTML}
        </CodeSnippet>
        
      </div>
    </DocumentationLayout>
  );
};

export default Navbar;
