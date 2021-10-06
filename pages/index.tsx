import type { NextPage } from 'next'
import LoginForm from '../components/LoginForm'
import {Layout}from '../components/Layout'
const Home: NextPage = () => {
  return (
    <>
  <LoginForm />
  <Layout/>
  </>
  )
}

export default Home
