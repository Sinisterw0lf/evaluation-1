import React from 'react'
import HomeDescription from '../components/HomePage/HomeDescription'
import HomeTitle from '../components/HomePage/HomeTitle'
import Layout from '../components/layouts/Layout'

export default function Home() {
  return (
    <Layout>
        <HomeTitle/>
        <HomeDescription/>
    </Layout>
  )
}
