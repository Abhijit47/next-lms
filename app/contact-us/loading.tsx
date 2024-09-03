import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className={'grid h-screen place-items-center'}>
      <ArrowPathIcon className='h-8 w-8' />
    </div>
  );
}
