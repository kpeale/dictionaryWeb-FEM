import { useState } from 'react';
import API from './API';

function Form() {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className='mx-[13.5rem] lg:mx-10'>
        <form className=''>
          <div className='relative'>
            <input
              type='text'
              onSubmit={handleSubmit}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className='bg-[#f4f4f4] rounded-lg lg:ml-0 px-6 py-3 text-[#2d2d2d] text-lg font-bold w-full max-w-[950px]  z-0 lg:max-w-[580px] md:max-w-[500px] lg:w-full sm:max-w-[370px] ssm:max-w-[300px]'
              placeholder='text..'
            />
            <img
              className='absolute lg:opacity-0 right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 '
              src='../images/icon-search.svg'
              alt='search-icon'
            />
          </div>
        </form>

        <div className='flex flex-row mt-8 justify-between lg:ml-0 lg:w-[80%]'>
          <p className='text-6xl font-bold lg:w-[40%] '>fish</p>

          <div className='lg:w-[28%] '>
            <img
              src='../images/icon-play.svg'
              alt='icon play'
              className='lg:w-16'
            />
          </div>
        </div>
      </section>
      <API text={text} />
    </>
  );
}

export default Form;
