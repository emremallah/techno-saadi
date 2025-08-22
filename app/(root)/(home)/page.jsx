import Hero from '@/components/hero'
import ProductCategories from '@/components/productcategories'
import WhyChooseUs from '@/components/whychooseus'
import Process from '@/components/process'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import React from 'react'

function page() {
  return (
    <div>
      <Hero />
      <ProductCategories />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FAQ />
    </div>
  )
}

export default page
