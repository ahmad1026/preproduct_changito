'use client'

import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'


interface Props {
    onOpenDialog: React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean
}

export default function SendtoFirendsModal(props: Props) {

    // const [open, setOpen] = React.useState(false);


    // const handleClickOpen = () => {
    //     setOpen(true);
    //   };

    //   const handleClose = () => {
    //     setOpen(false);
    //   };



    return (
        <Dialog className='w-full ' open={props.open} onClose={() => props.onOpenDialog(false)} aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <div className='w-full bg-[#BB86FC] px-4 flex items-center justify-between'>
                <h1 className='text-white text-md'>پیش فاکتور</h1>
                <Button>
                    <span className='text-white'>انصراف</span>
                </Button>
            </div>
            <div className='bg-[#282828] text-white'>

            <DialogTitle>{"فروش"}</DialogTitle>

            <DialogContent className=''>
                <ul className='flex flex-col gap-2'>
                    <li className='flex text-base justify-between items-center'>
                        <span>مبلغ</span>
                        <span>50,000  تومان</span>
                    </li>
                    <li className='flex text-base justify-between items-center'>
                        <span>مقدار</span>
                        <span>1.1  دلار</span>
                    </li>
                    <li className='flex text-base justify-between items-center'>
                        <span>کارمزد تبدیل</span>
                        <span>1.527  تومان</span>
                    </li>
                    
                    <li className='flex text-base justify-between items-center'>
                        <span>مبلغ دریافتی شما</span>
                        <span>48.950  تومان</span>
                    </li>
                </ul>
            </DialogContent>

            <DialogContentText className='w-full px-4 ' id="alert-dialog-slide-description">

                <div className='rounded-md p-2 bg-[#404349] '>
                    <h1 className='text-[#af6eff]'>تحویل آنی</h1>
                    <p className='text-md text-center mt-3 text-purple-400'>بعد از پرداخت کد ووچر به صورت آنی به شما تحویل داده خواهد شد.</p>
                </div>

            </DialogContentText>
            <DialogActions className='mx-2 '>
                <Button className='w-full' variant='contained'>
                    <span className=' text-white'>پرداخت</span>
                </Button>
            </DialogActions>


            </div>
            {/* <div className='w-full bg-[#BB86FC] px-4 flex items-center justify-between'>
                <h1 className='text-white text-md'>پیش فاکتور</h1>
                <Button>
                    <span className='text-white'>انصراف</span>
                </Button>
            </div>
            <DialogTitle className='bg-[#282828]' id="alert-dialog-title">
                سفارش فروش
            </DialogTitle> */}

        </Dialog>
    )
}
