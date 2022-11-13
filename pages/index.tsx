import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// TODO where should I place this
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { Layout, NavBar } from '../components'

const Home: NextPage = () => {
  return (
    <Layout>
      <div>Welcome</div>
    </Layout>
  )
}

export default Home
