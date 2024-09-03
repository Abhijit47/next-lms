// import {
//   HeroiconsOutlineMail,
//   HeroiconsOutlinePhone,
// } from "@/app/_assets/icons";
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ContactInformation() {
  return (
    <dl className='mt-8 space-y-6'>
      <dt>
        <span className='sr-only'>Phone number</span>
      </dt>
      <dd className='flex text-base text-teal-50'>
        <PhoneIcon
          className='h-6 w-6 flex-shrink-0 text-indigo-200'
          aria-hidden='true'
        />
        <Link href={'tel:+919563828213'} className='ml-3'>
          +91 (956) 382-8213
        </Link>
      </dd>
      <dt>
        <span className='sr-only'>Email</span>
      </dt>
      <dd className='flex text-base text-teal-50'>
        <EnvelopeIcon
          className='h-6 w-6 flex-shrink-0 text-indigo-200'
          aria-hidden='true'
        />
        <Link href={'mailto:support@abhijit.com'} className='ml-3'>
          support@abhijit.com
        </Link>
      </dd>
    </dl>
  );
}
