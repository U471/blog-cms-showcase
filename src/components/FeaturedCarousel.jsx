import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function FeaturedCarousel({items}){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  }

  if(!items || items.length===0) return null

  return (
    <Slider {...settings} className="-mx-2">
      {items.map(i=> (
        <div key={i.id} className="px-2">
          <Link to={`/blog/${i.id}`}>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src={i.image} alt={i.title} className="w-full h-48 object-cover" />
              <div className="p-3 bg-white dark:bg-slate-800">
                <h3 className="font-semibold">{i.title}</h3>
                <p className="text-sm text-slate-500">by {i.author}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  )
}
