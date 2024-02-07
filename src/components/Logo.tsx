"use client";
export default function Logo() {
  const handleClick = (url: string) => {
    window.location.href = url;
  };
  return (
    <div className='relative'>
      <img
        src='/logo.png'
        alt=''
        className='w-14 mx-9 my-5 fixed'
        onClick={() => handleClick('/projects')}
      />
    </div>
  );
}
