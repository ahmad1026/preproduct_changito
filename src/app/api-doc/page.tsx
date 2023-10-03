import React from 'react'

export default function page() {
    return (
        <div className='md:pt-12 pt-20 text-white w-full max-w-7xl mx-auto px-8'>
            <h1 className='text-2xl'>راهنمای استفاده از وب سرویس API</h1>
            <div className='w-full flex flex-col gap-8 px-4 pt-10 shadow-xl pb-8 rounded-md'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-lg'>لینک پرداخت سریع</h1>
                    <p>برای ایجاد لینک پرداخت سریع کافی است آدرس کیف پول خودتان یا کاربر را جایگزین WalletAdress کنید و میزیان ارز ترون مد نظرتان را جایگزین Amount کنید و در نهایت لینک را برای کاربر ارسال کنید.

                    </p>
                    <div className='bg-[#282828] rounded-md p-4 text-left'>

                        <p className='text-left w-full'>
                            {'https://digiswap.org/quick?amount={Amount}&address={walletAddress}'}
                        </p>


                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-lg'>استعلام قیمت</h1>
                    <p>برای دریافت آخرین قیمت ارز ها کافی است به آدرس زیر درخواست خود را به صورت GET ارسال کنید.

                    </p>
                    <div className='bg-[#282828] rounded-md p-4 text-left'>

                        <p className='text-left'>
                            {`http://api.digiswap.org/api/v1
                            /asset/getPrices`}
                        </p>


                    </div>
                    <p>
                        در صورتی که موفق به ارسال درخواست شوید پاسخی مشابه زیر دریافت خواهید کرد.
                    </p>
                    <div dir='ltr' className='bg-[#282828] whitespace-pre-wrap rounded-md p-4'>

                        {`
{
        "assets": [
             {
                 "name": "perfect_money",
                 "usd_price":1.0,
                  "transfer_fee":15000.0
              },
             {
                    "name": "tron",
                    "usd_price":0.077,
                    "transfer_fee":15000.0
              }
          ],
         "usd_sell_price":52500.0,
          "usd_buy_price":52500.0
     }
                            `}


                    </div>

                </div>
            </div>

        </div>
    )
}
