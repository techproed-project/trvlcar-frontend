import React from 'react'
import Testimonals from '../../components/users/common/testimonals/testimonals'
import Bookbar from '../../components/users/home/bookbar/bookbar'
import Slider from '../../components/users/home/slider/slider'

const HomePage = () => {
  return (
    <>
      <Slider/>
      <Bookbar/>
      <Testimonals/>
    </>
  )
}

export default HomePage