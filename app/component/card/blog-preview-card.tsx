import React from 'react';
import Image from 'next/image';
import cardHeaderLogo from '@/public/assets/blogimage.svg';
import userPic from '@/public/assets/userpic.svg';

export const BlogPreviewCard = () => {
  return (
    <div className='flex justify-center items-center h-[100dvh] px-4'>
      <div className='w-[24rem] shadow-[8px_8px_0px_0px_#000] bg-white rounded-[1.25rem] border-[1px] border-black p-[1.5rem]	'>
        <div>
          <Image src={cardHeaderLogo} alt='cardHeaderLogo' />
        </div>
        <div className='flex flex-col gap-3 items-start self-stretch mt-6'>
          <div className=' w-[5.125rem] rounded-[0.25rem] bg-[#F4D04E] mb-2 p-[0.25rem_0.75rem] text-sm font-extrabold'>
            Learning
          </div>
          <div className='text-sm  font-medium'>Published 21 Dec 2023</div>
          <div className='text-2xl font-extrabold hover:text-[#F4D04E] cursor-pointer'>
            HTML & CSS foundations
          </div>
          <div className='text-[#7F7F7F] font-medium'>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </div>
          <div className='flex items-center gap-3'>
            <Image src={userPic} alt='userPic' />
            <div className='text-sm font-extrabold'>Greg Hooper</div>
          </div>
        </div>
      </div>
    </div>
  );
};
