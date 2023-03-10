import React, { useState } from 'react'
import { comments } from '../../../../mockdata/Comments'
import TwitterCard from '../mainComponents/TwitterCard'
import '../../../../assets/css/AnimatonStyle.css'


const commentRow1 = comments.slice(0, 5)
const commentRow2 = comments.slice(5, 10)
const commentRow3 = comments.slice(10, 15)
const commentRow4 = comments.slice(15, 20)


const CoommentsSection = () => {



    return (
        <div className="CommentsSection_Body">
            <div className="CommentsSection_Header text-center py-24">
                <h2 className="text-8xl text-[3rem] sm:text-[4rem] md:text-[6rem] leading-[130%] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                    “It’s like magic.”
                </h2>
                <p className="mt-3 text-slate-800 max-w-4xl mx-auto text-xl sm:text-2xl md:mt-5 md:text-3xl">
                    Our community loves how easy it is to start a project and managing a professional site in JettWork.
                </p>
            </div>
            <div className="absolute z-10 bg-gradient-to-b from-white opacity-[100%] h-[20%] w-full"></div>
            <div className=' Comments_Main w-full flex justify-center h-[100vh] overflow-hidden'>
                <div className='Comments_Main_Body flex gap-5 scroll-container overflow-hidden'>
                    <div className='commentRow1 flex flex-col gap-4'>
                        {
                            commentRow1.map((item, id) => (
                                <div key={id}>
                                    <TwitterCard profile_img={item.profile_img} name={item.name} username={item.username} comment={item.comment} />
                                </div>
                            ))
                        }
                    </div>

                    <div className='commentRow2 flex flex-col gap-4'>
                        {
                            commentRow2.map((item, id) => (
                                <div key={id}>
                                    <TwitterCard profile_img={item.profile_img} name={item.name} username={item.username} comment={item.comment} />
                                </div>
                            ))
                        }
                    </div>

                    <div className='commentRow3 flex flex-col gap-4'>
                        {
                            commentRow3.map((item, id) => (
                                <div key={id}>
                                    <TwitterCard profile_img={item.profile_img} name={item.name} username={item.username} comment={item.comment} />
                                </div>
                            ))
                        }
                    </div>

                    <div className='commentRow4 flex flex-col gap-4'>
                        {
                            commentRow4.map((item, id) => (
                                <div key={id}>
                                    <TwitterCard profile_img={item.profile_img} name={item.name} username={item.username} comment={item.comment} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="absolute z-10 bottom-0 bg-gradient-to-t from-white opacity-[100%] h-[30%] w-full"></div>
        </div>
    )
}

export default CoommentsSection