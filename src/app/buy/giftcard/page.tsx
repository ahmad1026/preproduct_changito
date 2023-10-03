'use client'


import React , {useState} from 'react'
import { Button, TextField } from '@mui/material'

import { useSearchParams } from 'next/navigation'



export default function GiftcardPage() {


    const [amount , setAmount] = useState<string>()


    const params = useSearchParams()

    console.log(params.get('product'));


    const amounts = [
        {
            value:'$2',
            id:'1'
        },
        {
            value:'$150',
            id:'2'
        },
        {
            value:'$350',
            id:'3'
        },
        {
            value:'$500',
            id:'4'
        },
        {
            value:'$650',
            id:'5'
        },
        {
            value:'$850',
            id:'6'
        },
        {
            value:'$1000',
            id:'7'
        },
    ]


    const handleAmount = (id:string)=>{

        setAmount(id)


        console.log(id);
        

    }

    return (
        <div className='max-w-7xl md:pt-0 pt-20 mx-auto md:px-8 px-4 mt-8'>

            <div className='w-full shadow-2xl mb-32 bg-[#0e0e0e] flex flex-col gap-5 items-center p-6 border-2 border-[#E3E730] rounded-lg'>

                <img width={330} src="/images/mastercard.png" alt="" />

                <ul className='flex flex-wrap w-[16rem] justify-center gap-2'>

                    {
                        amounts.map((amoun)=><li key={amoun.id} onClick={()=>handleAmount(amoun.id)} className={`${amoun.id == amount ? 'bg-purple-600' : 'hover:bg-yellow-400 transition'} cursor-pointer text-center w-20 min-w-[7em] py-2 text-white bg-[#7D7F23] rounded-full backdrop-blur-md`}>{amoun.value}</li>)
                    }
                    {/* <li onClick={()=>handleAmount('2')} className='cursor-pointer text-center w-20 min-w-[7em] py-2 text-white bg-[#7D7F23] rounded-full backdrop-blur-md'>$150</li>
                    <li onClick={()=>handleAmount('3')} className='cursor-pointer text-center w-20 min-w-[7em] py-2 text-white bg-[#7D7F23] rounded-full backdrop-blur-md'>$350</li>
                    <li onClick={()=>handleAmount('4')} className='cursor-pointer text-center w-20 min-w-[7em] py-2 text-white bg-[#7D7F23] rounded-full backdrop-blur-md'>$500</li>
                    <li onClick={()=>handleAmount('5')} className='cursor-pointer text-center w-20 min-w-[7em] py-2 text-white bg-[#7D7F23] rounded-full backdrop-blur-md'>$650</li>
                    <li onClick={()=>handleAmount('6')} className='cursor-pointer text-center w-20 min-w-[7em] py-2 text-white bg-[#7D7F23] rounded-full backdrop-blur-md'>$850</li>
                    <li onClick={()=>handleAmount('7')} className='cursor-pointer text-center w-20 min-w-[7em] py-2 text-white bg-[#7D7F23] rounded-full backdrop-blur-md'>$1000</li> */}
                    
                </ul>

                <div className='md:w-[42rem] w-[20rem] text-white md:text-lg text-md flex flex-col gap-4'>
                    <div className='bg-[#242424] rounded-md w-full flex items-center px-4 py-3 justify-between '>
                        <span>مقدار:</span>
                        <span>$2</span>
                    </div>
                    <div className='bg-[#242424] rounded-md w-full flex items-center px-4 py-3 justify-between '>
                        <span>هزینه:</span>
                        <span>104,800 تومان</span>
                    </div>
                    <div className='bg-[#242424] rounded-md w-full flex items-center px-4 py-3 justify-between '>
                        <span>کارمزد:</span>
                        <span>10,800 تومان</span>
                    </div>
                    <div className='bg-[#242424] rounded-md w-full flex items-center px-4 py-3 justify-between '>
                        <span>هزینه نهایی:</span>
                        <span>184,800 تومان</span>
                    </div>
                <Button sx={{color:'white'}} className='w-full' variant='contained'>پرداخت</Button>
                </div>



            </div>


        </div>
    )
}
