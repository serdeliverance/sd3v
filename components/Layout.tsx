import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import { NavBar } from '.'

interface Props {
  children: ReactNode
  title?: string
}

export const Layout: FC<Props> = ({ children, title = 'sD3v' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="sD3v" />
        <meta name="description" content={`sD3v personal website`} />
        <meta
          name="keywords"
          content="sd3v, software engineer, java, scala, microservices"
        />
        {/* TODO review those meta tags */}
        <meta property="og:title" content={`Information about ${title}`} />
        <meta property="og:description" content={`Page about ${title}`} />
        {/* <meta property="og:image" content={`${origin}/img/banner.png`} /> */}
        {/* TODO change this icon for a personalized one */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main>{children}</main>
    </>
  )
}
