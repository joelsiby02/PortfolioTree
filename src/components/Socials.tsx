"use client"
export function Socials() {
  const handleClick = (url:string) => {
    window.location.href = url
  }
  return (

    <div className='flex justify-center'>
      <div className="h-8 w-3/4 md:w-2/4 flex justify-around ">
        <img className='w-fi transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500  '
        src='/twitter.svg'
        width={500}
        height={500}
        alt='Picture of the author'
        onClick={() => handleClick('https://twitter.com/joxzbirdy02')}
      />

        <img className='w-fi transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500'
        src='/github.svg'
        width={500}
        height={500}
        alt='Picture of the author'
        onClick={() => handleClick('https://github.com/joelsiby02')}
      />
      

      <img className='w-fi transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500'
        src='/linkedin.svg'
        width={500}
        height={500}
        alt='Picture of the author'
        onClick={() => handleClick('https://www.linkedin.com/in/jo-el-752916277/')}
      />

   
      <img className='w-fi transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-500'
        src='D:\web\Portfolio_Website\public\kaggle.webp'
        width={500}
        height={500}
        alt='Picture of the author'
        onClick={() => handleClick('https://www.kaggle.com/joelsiby02')}
      />
      
      </div>
    </div>
  );
}
