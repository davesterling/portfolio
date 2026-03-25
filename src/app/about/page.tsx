import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpeg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Dave Sterling. I live in New York, where I build software and automation systems.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Dave Sterling. I live in New York, where I build software and automation systems.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve always been driven to build things, from early experiments with computers to developing full-scale applications and systems. I started programming at a young age and quickly became fascinated with how software could solve real-world problems.
            </p>
            <p>
              At the same time, I developed a strong interest in how machines work. From taking things apart to understanding industrial equipment, I was drawn to the logic behind automation and the precision required to make systems operate reliably.
            </p>
            <p>
              Over time, that curiosity turned into hands-on experience with CNC machinery and PLC systems, where I learned how software directly interacts with physical processes. Combining development with automation gave me a deeper understanding of both digital and mechanical systems.
            </p>
            <p>
              Today, I focus on building scalable software while applying my background in automation to create efficient, real-world solutions that connect technology with practical use.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/*<SocialLink href="#" icon={XIcon}>*/}
            {/*  Follow on X*/}
            {/*</SocialLink>*/}
            {/*<SocialLink href="#" icon={InstagramIcon} className="mt-4">*/}
            {/*  Follow on Instagram*/}
            {/*</SocialLink>*/}
            <SocialLink href="https://github.com/davesterling" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/sterling-dave" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:davesterlingm@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              davesterlingm@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
