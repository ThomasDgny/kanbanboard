import React, { useState } from 'react'
import TextEditor from '../../../elements/TextEditor'
import axios from 'axios';

const FeedBackForm = () => {
    const [email, setEmail] = useState('')
    const [senderName, setSenderName] = useState('')
    const [description, setDescription] = useState('')

    const userFeedBack = {
        senderName: senderName,
        email: email,
        description: description
    }


    const formSender = async () => {
        const options = {
            method: 'POST',
            url: 'https://dragon.pdf2go.com/api/applicant/job',
            body: userFeedBack
        };
        if (description.trim() === '') {
            alert('Please fill the message area')
        } else {
            await axios.request(options)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.error(error);
                })
        }
    }

    const submitFeedBackForm = (e) => {
        e.preventDefault();
        formSender()
        console.log(userFeedBack);
    }


    return (
        <div className='FeedBackForm bg-slate-100'>

            <div className="FeedBackForm_Header text-center py-24">
                <h2 className="text-8xl text-[3rem] sm:text-[4rem] md:text-[6rem] leading-[130%] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                    We are open for every feedback
                </h2>
                <p className="mt-3 text-slate-800 max-w-4xl mx-auto text-xl sm:text-2xl md:mt-5 md:text-3xl">
                    We love hearing from our customers! Whether you have a question, comment, or suggestion, we want to hear it.
                </p>
            </div>

            <div className='FeedBackFormMain flex justify-center items-center'>
                <div className='w-[90%] md:w-[80%]  '>
                    <form onSubmit={submitFeedBackForm}>
                        <div className='flex flex-col gap-5'>
                            <div className='flex flex-col md:flex-row gap-5'>
                                <input onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())} required type="email" placeholder='Email' className='text-[16px] p-3 border rounded-lg w-full text-black' />
                                <input onChange={(e) => setSenderName(e.target.value.toLocaleLowerCase())} required type="text" placeholder='Name' className='text-[16px] p-3 border rounded-lg w-full text-black' />
                            </div>
                            <div className='TextArea bg-white p-5 rounded-lg border'>
                                <TextEditor
                                    content={description}
                                    setContent={setDescription}
                                    readonly={false}
                                    toolBarIsVisble={true}
                                    height={'50vh'}
                                />
                            </div>
                        </div>
                        <div className='w-full flex justify-end py-5'>
                            <input type="submit" value='Submit' className="Submit_Button cursor-pointer inline-flex text-[18px] md:text-[24px] items-center justify-center px-12 py-4 border  rounded-md font-medium text-white bg-gradient-to-tr from-[#1ec3ff] to-[#008be8] border-[#00BCFF] focus:outline-none focus:ring-8 focus:ring-offset-2 focus:ring-[#e3f4ffb9] shadow-lg shadow-[#00bbff7e]" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FeedBackForm