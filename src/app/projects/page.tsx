import { InfiniteMovingCardsDemo } from '@/components/InfiniteCards';
import { Cards } from './Cards';
export default function About() {
  return (
    <div className=''>
      <div className=' absolute w-screen'>
        <div className='absolute z-0 h-screen flex flex-col mt-36 mb-0 pb-0'>
          <InfiniteMovingCardsDemo />
        </div>
        <div>
          <div className='z-1 mt-64 mx-auto'>
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}
