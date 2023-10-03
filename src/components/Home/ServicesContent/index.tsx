'use client'


import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SellModal from '../Modals/SellModal'
import SendtoFirendsModal from '../Modals/SendtoFirendsModal'
import { getPrices } from '../../../api/getPrices'
import { useQuery } from 'react-query'

export default function ServicesContent() {


    const [service, setService] = useState(0)
    const [sellModal, setSellModal] = useState(false)
    const [firendModal, setFirendModal] = useState(false)

    const [Thcost, setThCost] = useState<number>(0)


    const [userCost, setUserCost] = useState<number | string>('')
    const [userAmount, setUserAmount] = useState<number | string>('1')


    const tetherPrice = useQuery('prices', getPrices)


    useEffect(() => {


        if (tetherPrice.data) {
            const { result } = tetherPrice.data

            setThCost(result['USDT.TRC20'])

            setUserCost(pricetype(Math.trunc(result['USDT.TRC20']).toString(), true))


            // setUserCost(result['USDT.TRC20'])            


        }




    }, [tetherPrice.data])


    const pricetype = (str: string, show: boolean) => {
        const amount = str.split('').filter(item => item != ',').join('')

        const strArr = str.split('').reverse().filter(item => item != ',')


        if (!show) {

            return Number(amount)
        }



        let divide = Math.ceil(str.length / 3)

        while (divide > 0) {

            strArr.splice(divide * 3, 0, ',')

            divide--
        }
        strArr.pop()
        if (strArr.reverse()[0] == ',') {
            strArr.shift()
        }
        return strArr.join('')
    }


    const handleChageCostAmount = (value: string, wichChange: string) => {

        switch (wichChange) {
            case 'cost':
                setUserCost(pricetype(value, true))
                const newCost: any = pricetype(value, false)
                const totalAmount = newCost / Thcost
                setUserAmount(totalAmount.toString())


                break;
            case 'amount':

                const countpoint = value.split('').filter(item => item === '.')
                if (countpoint.length > 1) return

                setUserAmount(value)

                const newAmount = Number(value)
                const totalCost = Math.trunc(newAmount * Thcost)

                // console.log(pricetype(totalCost.toString() , true))


                setUserCost(pricetype(totalCost.toString(), true))

                break;

            default:
                break;
        }



    }


    return (
        <>
            <SendtoFirendsModal onOpenDialog={setFirendModal} open={firendModal} />
            <SellModal onOpenDialog={setSellModal} open={sellModal} />
            <div className='flex items-center gap-3 mt-4'>
                <Button onClick={() => setService(1)} sx={{
                    color: 'white',
                    paddingY: 0.5,
                    paddingX: 1.5,
                    fontSize: 18
                }} className='flex items-center gap-2' variant={service ? 'contained' : 'outlined'}>
                    <img className='rounded-full' width={22} src="/icons/tron.png" alt="" />
                    <span className='text-white '>ترون</span>
                </Button>
                <Button onClick={() => setService(0)} variant={service ? 'outlined' : 'contained'} style={{
                    // backgroundColor: '#C294F4'
                }} sx={{
                    color: 'black',
                    paddingY: 0.5,
                    paddingX: 1.5,
                    fontSize: 18,
                }} className='flex items-center  gap-2'>
                    <img className='rounded-full' width={22} src="/icons/teter.png" alt="" />
                    <span className=' text-white '>تتر</span>
                </Button>
            </div>
            <div className='mt-4 flex text-white flex-col gap-4'>

                <TextField
                    className={'rounded-3xl w-full text-center'}
                    // error={!!formik.errors.caseName}
                    sx={{
                        direction: 'ltr',
                        input: {
                            textAlign: 'center',
                            color: 'white',
                            borderColor: '#FFFFFF',
                            outlineColor: '#FFFFFF'
                        },
                        "& .MuiFormLabel-root": {
                            color: 'secondary.main'
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: '#FFFFFF'
                        },
                        '&:hover fieldset': {
                            borderColor: '#BB86FC !important',
                        },
                        '&:hover .MuiFormLabel-root': {
                            color: '#BB86FC !important',
                        },
                        // "& .MuiFormLabel-root.Mui-focused": {
                        //   color: 'primary.main'
                        // }
                    }}

                    id="CaseName"
                    name={'caseName'}
                    label="مبلغ (تومان)"
                    value={userCost}
                    variant="outlined"
                    type={'search'}
                    onChange={(e) => {

                        const reg = new RegExp('^[0-9]*$')

                        const value1 = e.target.value.split('').filter(ch => ch !== ',').join('')
                        if (e.target.value.includes('.')) return
                        if (!reg.test(value1)) return

                        return handleChageCostAmount(e.target.value, 'cost')
                    }}
                    InputProps={{
                        inputProps: {
                            inputMode: 'numeric',
                            pattern: "[0-9]{10}",
                            maxLength: 14

                        }
                    }}
                />
                <TextField
                    className={'rounded-3xl w-full text-center'}
                    // error={!!formik.errors.caseName}
                    sx={{
                        direction: 'ltr',
                        input: {
                            textAlign: 'center',
                            color: 'white',
                            borderColor: '#FFFFFF',
                            outlineColor: '#FFFFFF'
                        },
                        "& .MuiFormLabel-root": {
                            color: 'secondary.main'
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: '#FFFFFF'
                        },
                        '&:hover fieldset': {
                            borderColor: '#BB86FC !important',
                        },
                        '&:hover .MuiFormLabel-root': {
                            color: '#BB86FC !important',
                        },
                        // "& .MuiFormLabel-root.Mui-focused": {
                        //   color: 'primary.main'
                        // }
                    }}

                    id="CaseName"
                    name={'caseName'}
                    label="مقدار"
                    value={userAmount}
                    variant="outlined"
                    type={'search'}
                    autoComplete='off'

                    onChange={(e) => {
                        const reg = new RegExp('^[0-9]*$')

                        const value1 = e.target.value.split('').filter(ch => ch !== '.').join('')
                        // if (e.target.value.includes('.')) return
                        if (!reg.test(value1)) return                        

                       return handleChageCostAmount(e.target.value, 'amount')
                    }}
                    InputProps={{

                        inputProps: {
                            inputMode: 'numeric',
                            pattern: "d*",
                            maxLength: 8
                        }
                    }}
                />
                <TextField
                    className={'rounded-3xl w-full text-center'}
                    // error={!!formik.errors.caseName}
                    sx={{
                        input: {
                            textAlign: 'center',
                            color: 'white',
                            borderColor: '#FFFFFF',
                            outlineColor: '#FFFFFF'
                        },
                        "& .MuiFormLabel-root": {
                            color: 'secondary.main'
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: '#FFFFFF'
                        },
                        '&:hover fieldset': {
                            borderColor: '#BB86FC !important',
                        },
                        '&:hover .MuiFormLabel-root': {
                            color: '#BB86FC !important',
                        },
                        // "& .MuiFormLabel-root.Mui-focused": {
                        //   color: 'primary.main'
                        // }
                    }}

                    id="CaseName"
                    name={'caseName'}
                    label="آدرس کیف پول"
                    // value={formik.values.caseName}
                    variant="outlined"
                    type={'text'}
                // onChange={formik.handleChange}
                />


                <div className='flex flex-col md:flex-row items-center gap-3'>
                    <Button onClick={() => {



                        console.log(Number(userCost) , "userCost");
                        console.log(Number(userAmount) , "userAmount");
                        
                        // setSellModal(true)
                    }} sx={{
                        color: 'white',
                        paddingY: 1,
                        fontSize: 16
                    }} color='primary' className='w-full' variant="contained">
                        خرید
                    </Button>
                    <Button onClick={() => setFirendModal(true)} sx={{
                        color: 'white',
                        paddingY: 1,
                        fontSize: 16
                    }} color='primary' className='w-full' variant="contained" >
                        ارسال به دوستان
                    </Button>
                </div>



            </div>

        </>
    )
}
