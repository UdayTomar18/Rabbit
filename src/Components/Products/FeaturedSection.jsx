import { HiShoppingBag} from 'react-icons/hi'
import { HiArrowPathRoundedSquare } from 'react-icons/hi2'
import { HiOutlineCreditCard } from 'react-icons/hi'
const FeaturedSection = () => {
  return (
    <section className="py-16 px-4 bg:white" >
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>

            <div className='flex flex-col items-center '>
                <div className='p-4 rounded-full mb-2'>
                    <HiShoppingBag className='text-xl' />

                </div>
                    <h4 className='tracking-tighter mb-2'>FREE INTERNATIONAL SHIPPING</h4>
                    <p className='text-gray-600 text-sm'>On all oreder abover 5000</p>
            </div>
            <div className='flex flex-col items-center '>
                <div className='p-4 rounded-full mb-2'>
                    <HiArrowPathRoundedSquare className='text-xl' />

                </div>
                    <h4 className='tracking-tighter mb-2'>45 DAYS RETURN</h4>
                    <p className='text-gray-600 text-sm'>Money back gurentee </p>
            </div>
            <div className='flex flex-col items-center '>
                <div className='p-4 rounded-full mb-2'>
                    <HiOutlineCreditCard className='text-xl' />

                </div>
                    <h4 className='tracking-tighter mb-2'>SECURE CHECKOUT</h4>
                    <p className='text-gray-600 text-sm'>100% secure checkout process</p>
            </div>

        </div>
      
    </section>
  )
}

export default FeaturedSection
