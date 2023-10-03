'use client'

import React, { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'


interface Props {
    onOpenDialog: React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean
}

export default function Auth(props: Props) {

    const [phone, setPhone] = useState('09')



    return (
        <Dialog className='w-full' open={props.open} onClose={() => props.onOpenDialog(false)} aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <div className='w-full bg-[#BB86FC] p-4 flex items-center justify-between'>
                <h1 className='text-white text-xl'>ورود یا ثبت نام</h1>
                <Button>
                    <span className='text-white'>انصراف</span>
                </Button>
            </div>
            <div className='bg-[#282828] text-white'>

                <DialogTitle>
                    <h1 className='text-white'>به اوکی<span>&#8202;</span>چنج خوش آمدید.</h1>

                </DialogTitle>
                <DialogContentText className='w-full px-4 ' id="alert-dialog-slide-description">
                    <p className='text-md text-center mt-3 text-white'>برای ورود یا ثبت نام، لطفا شماره موبایل خود را وارد کنید</p>
                </DialogContentText>

                <DialogContent className=''>
                    <TextField
                        className={'rounded-3xl w-full text-center'}
                        // error={!!formik.errors.caseName}
                        sx={{
                            direction:'ltr',
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
                        label="شماره موبایل"
                        value={phone}
                        variant="outlined"
                        type={'search'}
                        onChange={(e) => setPhone(e.target.value)}
                        InputProps={{
                            inputProps:{

                                inputMode:'numeric',
                                pattern: "d*",

                            }
                        }}
                    />
                </DialogContent>


                <DialogActions className='mx-2 '>
                    <Button className='w-full' variant='contained'>
                        <span className=' text-white'>ادامه</span>
                    </Button>
                </DialogActions>


            </div>

        </Dialog>
    )
}
