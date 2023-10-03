import React from 'react'
import Image from 'next/image'
import { TextField, Button, colors } from '@mui/material'
import { Heart, DollarSign } from 'react-feather'
import Link from 'next/link'
import ServicesContent from '../components/Home/ServicesContent/'
export default function Home() {

  return (


    <main className="relative pb-32">
      <div className=' mx-auto mt-20 md:mt-0'>

        <div className='max-w-7xl mx-auto'>

          <div className='w-full pt-4 flex flex-col gap-4 items-center'>
            <img width={60} src="/logook.png" alt="" />
            <h1 className=' text-lg md:text-2xl text-white'> اوکی<span>&#8202;</span>چنج مرجع خرید کارت های هدیه   </h1>

          </div>
          {/* <div className='w-[90%] md:w-2/3 bg-[#282828] text-white shadow-2xl rounded-xl absolute left-1/2 -translate-x-1/2 top-32 p-4 '>
            <h1 className='text-xl md:text-2xl text-center '>خرید و فروش</h1>
            <ServicesContent />
          </div> */}
        </div>



      </div>


      <div className='px-8'>

        <div className='w-full max-w-7xl pt-8 md:pt-0 mx-auto'>

          <h1 className='text-3xl text-white font-bold'>سرویس ها</h1>

          <div className=' flex w-full flex-row flex-wrap justify-center gap-12 mt-16'>


            {/* <Link href='/'> */}

            <Link href="/buy/giftcard?product=mastercart" className='flex flex-col gap-5 text-center'>
              <Button className='font-bold'>
                <img width={330} className='' src="./images/mastercard.png" alt="" />
              </Button>
              <span className='text-xl text-white font-bold font-Vazir'>گیفت کارت مستر کارت</span>

            </Link>
            <Link href="/buy/giftcard?product=visacart" className='flex flex-col gap-5 text-center'>
              <Button className='font-bold'>
                <img width={330} className='' src="./images/visacard.png" alt="" />

              </Button>
              <span className='text-xl text-white font-bold font-Vazir'>گیفت کارت ویزا</span>

            </Link>
            <Link href="/buy/giftcard?product=americancart" className='flex flex-col gap-5 text-center'>
              <Button className='font-bold'>
                <img width={330} className='' src="./images/americanexpress.png" alt="" />

              </Button>
              <span className='text-xl text-white font-bold font-Vazir'>گیفت کارت امریکن اکسپرس</span>

            </Link>
            <Link href="/buy/giftcard?product=arzicart" className='flex flex-col gap-5 text-center'>
              <Button className='font-bold'>
                <img width={330} className='' src="./images/payment.png" alt="" />

              </Button>
              <span className='text-xl text-white font-bold font-Vazir'>پرداخت آنلاین ارزی</span>

            </Link>





          </div>


          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-32 pb-8'>

            <div className='border-4 border-[#E3E730] md:p-8 py-4 rounded-lg items-center flex gap-3 md:gap-11 flex-col'>
              <img width={80} src="/icons/dolor.svg" alt="" />
              <span className='text-md md:text-xl font-bold font-Vazir text-white'>بهترین نرخ ارز</span>

            </div>
            <div className='border-4 border-[#E3E730] md:p-8 py-4  rounded-lg items-center flex gap-3 md:gap-11 flex-col'>
              <img width={80} src="/icons/karmozd.svg" alt="" />
              <span className='text-md md:text-xl font-bold font-Vazir text-white'>نرخ کارمزد کم</span>

            </div>
            <div className='border-4 border-[#E3E730] md:p-8 py-4 rounded-lg items-center flex gap-3 md:gap-11 flex-col'>
              <img width={80} src="/icons/transaction.svg" alt="" />
              <span className='text-md md:text-xl font-bold font-Vazir text-white'>انجام خودکار تراکنش</span>

            </div>
            <div className='border-4 border-[#E3E730] md:p-8 py-4 rounded-lg items-center flex gap-3 md:gap-11 flex-col'>
              <img width={80} src="/icons/time.svg" alt="" />
              <span className='text-md md:text-xl font-bold font-Vazir text-white'>پشتیبانی ۲۴ ساعته</span>

            </div>

          </div>
          <div className='w-full mt-8 text-center'>
            <h1 className='text-4xl text-white font-bold'>دیگر محصولات ما</h1>

            <div className='w-full border-4 text-white rounded-md border-[#E3E730] mt-4 p-4 text-center'>

              <div className='max-w-3xl mx-auto'>

                <h1 className='text-xl'>وب سرویس خرید و فروش</h1>
                <p className='my-8'>اگر می خواهید از خدمات اوکی چنج به صورت وب سرویس استفاده کنید، می توانید از لینک زیر استفاده کنید.</p>
                <Link href='/api-doc'>
                <Button className='w-full' variant='contained'>
                  <span className='text-white'>مشاهده مستندات</span>
                </Button>
                </Link>

              </div>
            </div>

          </div>
        </div>



      </div>








    </main>
  )
}
