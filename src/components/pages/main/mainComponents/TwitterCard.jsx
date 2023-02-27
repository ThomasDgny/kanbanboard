import React from "react";

const TwitterCard = ({ profile_img, name, username, comment }) => {
    return (
        <div className="max-w-md mx-auto rounded-xl overflow-hidden w-[40vh] bg-[#fcfcfc] border">
            <div className="p-8 flex flex-col gap-5">
                <div className="TwitterCard_Header flex gap-3 items-center">
                    <img className="object-cover rounded-full w-[52px] h-[52px]" src={profile_img} alt={`${name} profile`} />
                    <div>
                        <div className="tracking-wide text-[20px] text-slate-800 font-bold">{name}</div>
                        <div className="tracking-wide text-[16px] text-gray-500 font-medium">@{username}</div>
                    </div>
                </div>

                <div className="">
                    <p className="mt-2 text-slate-800 leading-[160%] text-[20px]">{comment}</p>
                </div>

            </div>
        </div>
    );
};

export default TwitterCard;
