/* eslint-disable @next/next/no-img-element */

import {
  SiNextdotjs,
  SiFirebase,
  SiStorybook,
  SiSentry,
  SiTailwindcss,
  SiGithubactions,
  SiVercel,
  SiDribbble
} from "react-icons/si";

const techStack = [
  {
    href: "https://nextjs.org",
    title: "Next.js",
    icon: <SiNextdotjs className='!mr-4 h-10 w-10' />,
    description: "The React Framework for the Web"
  },
  {
    href: "https://firebase.google.com",
    title: "Firebase",
    icon: <SiFirebase className='!mr-4 h-10 w-10 text-[#ffcb2f]' />,
    description: "Firebase for Auth, CRUD, Analytics and Storage"
  },
  {
    href: "https://storybook.js.org",
    title: "Storybook",
    icon: <SiStorybook className='!mr-4 h-10 w-10 !text-[#ff4785]' />,
    description: "Storybook for Components develop in isolation"
  },
  {
    href: "https://sentry.io",
    title: "Sentry",
    icon: <SiSentry className='!mr-4 h-10 w-10 !text-[#0f0a1fe6]' />,
    description: "Sentry's SDK for reporting of errors and exceptions."
  }
];

const techUtility = [
  {
    href: "https://sentry.io",
    title: "Tailwind CSS",
    icon: <SiTailwindcss className='!mr-4 h-10 w-10 !text-[#38bdf8]' />,
    description: "A utility-first CSS framework"
  },
  {
    href: "https://docs.github.com/en/actions",
    title: "GitHub Actions",
    icon: <SiGithubactions className='!mr-4 h-10 w-10 !text-black' />,
    description: "Automate, customize, and execute software workflows"
  },
  {
    href: "https://vercel.com",
    title: "Vercel",
    icon: <SiVercel className='!mr-4 h-10 w-10 !text-black' />,
    description: "Vercel hosting platform for Web Applications"
  }
];

export default function Introduction() {
  return (
    <div className='h-auto w-full text-center'>
      <div className='!mb-3'>
        <img
          width={1200}
          height={900}
          src='https://raw.githubusercontent.com/mdirshaddev/icons-repository/main/next-firebase-storybook-sentry/landing.png'
          alt=''
        />
      </div>
      <h1>Starter Template with Storybook</h1>
      <div className='flex flex-row items-center justify-center gap-4'>
        <div>
          <img
            src={
              "https://github.com/mdirshaddev/next-firebase-storybook-sentry/actions/workflows/codeql.yml/badge.svg"
            }
            alt={"Code Quality"}
          />
        </div>
        <div>
          <img
            src={
              "https://github.com/mdirshaddev/next-firebase-storybook-sentry/actions/workflows/njsscan.yml/badge.svg"
            }
            alt={"Node.js Static Code Analysis"}
          />
        </div>
        <div>
          <img
            src={
              "https://github.com/mdirshaddev/next-firebase-storybook-sentry/actions/workflows/storybook.yml/badge.svg"
            }
            alt={"Storybook Deployment"}
          />
        </div>
        <div>
          <img
            src={
              "https://github.com/mdirshaddev/next-firebase-storybook-sentry/actions/workflows/pages/pages-build-deployment/badge.svg"
            }
            alt={"Pages Deployment of Storybook"}
          />
        </div>
      </div>
      <p className='text-left !text-lg font-semibold'>
        This is a Starter template for Next.js, Firebase, Storybook and Sentry.
        Including a Beautiful UI for design go to{" "}
        <a
          className='inline-flex select-none flex-row items-center rounded-md bg-[#f082ac] px-2 py-[2px] !text-base !text-white'
          href='https://dribbble.com/shots/20586580-Landing-page-UI-for-finance-company?utm_source=Clipboard_Shot&utm_campaign=awsmd&utm_content=Landing%20page%20UI%20for%20finance%20company&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=awsmd&utm_content=Landing%20page%20UI%20for%20finance%20company&utm_medium=Social_Share'
          target='_blank'>
          {" "}
          <SiDribbble className='mr-2 text-white' />
          Dribbble Template
        </a>{" "}
        Content will not be same.
      </p>
      <a
        href='https://next-firebase-storybook-sentry.vercel.app'
        style={{
          textDecoration: "none"
        }}
        className='!inline-flex cursor-pointer select-none flex-row items-center rounded-md px-4 py-2 !text-xl !font-bold !text-black ring-1 ring-black transition-all hover:shadow-xl'>
        Deployed on{" "}
        <img
          className='ml-2'
          src={
            "https://raw.githubusercontent.com/mdirshaddev/icons-repository/main/next-firebase-storybook-sentry/vercel.svg"
          }
          width={92}
          height={64}
          alt=''
        />
      </a>
      <div className='!mb-3 !mt-10 select-none text-left text-sm font-bold uppercase leading-6 tracking-[6px] text-[#999]'>
        Tech Stack
      </div>
      <div className='grid grid-cols-1 grid-rows-2 gap-y-[10px] md:grid-cols-2 md:gap-y-[20px] md:gap-x-[20px]'>
        {techStack.map(({ title, href, icon, description }) => (
          <a
            key={title}
            className='flex select-none flex-row items-center rounded-md p-[20px] !text-[#333333] ring-1 ring-slate-600 transition-all hover:shadow-xl'
            style={{
              textDecoration: "none"
            }}
            href={href}
            target='_blank'>
            <div>{icon}</div>
            <span className='flex flex-col items-start'>
              <strong>{title}</strong>
              {description}
            </span>
          </a>
        ))}
      </div>
      <div className='!mb-3 !mt-10 select-none text-left text-sm font-bold uppercase leading-6 tracking-[6px] text-[#999]'>
        Tech Utility Stack
      </div>
      <div className='!mb-6 grid grid-cols-1 grid-rows-2 gap-y-[10px] md:grid-cols-2 md:gap-y-[20px] md:gap-x-[20px]'>
        {techUtility.map(({ title, href, icon, description }) => (
          <a
            key={title}
            className='flex select-none flex-row items-center rounded-md p-[20px] !text-[#333333] ring-1 ring-slate-600 transition-all hover:shadow-xl'
            style={{
              textDecoration: "none"
            }}
            href={href}
            target='_blank'>
            <div>{icon}</div>
            <span className='flex flex-col items-start'>
              <strong>{title}</strong>
              {description}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
