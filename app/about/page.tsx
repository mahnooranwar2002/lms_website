import React from 'react'
import CerfitcationSec from './CerfitcationSec'
import Bannar from '@/components/Bannar'
import Aboutsect from './Aboutsect'
import CardSection from '@/components/CardSection'

const page = () => {
  return (
    <div>
        <Bannar pageTitle={"About Us"} subtitle={"About"}/>
      <CerfitcationSec/>
      <Aboutsect/>
      <CardSection/>
    </div>
  )
}

export default page
