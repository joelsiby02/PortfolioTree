import { InfiniteMovingCardsDemo } from '@/components/InfiniteCards';
import Hero from './Hero';
export default function About() {
  return (
      <div className="w-screen">
        <div className='absolute'>
        <div className='absolute z-0 h-screen flex flex-col mt-36'>
          <InfiniteMovingCardsDemo />
        </div>
        <div className='z-1 mt-64 md:mx-20 mx-5 md:flex md:justify-start  md:w-2/3'>
          <Hero />
        </div>
      </div>
      </div>
  );
}
