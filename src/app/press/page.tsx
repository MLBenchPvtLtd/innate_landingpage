import Blog from '@/components/Press/Blog'
import Contact from '@/components/Press/Contact'
import HeroPress from '@/components/Press/HeroPress'
import React from 'react'

const PressPage = () => {
  return (
    <>
      <HeroPress/>
      <div className="gradient">
      <Blog/>
      <Contact/>
      </div>
    </>
  )
}

export default PressPage
