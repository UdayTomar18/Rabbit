
import {TbBrandMeta} from 'react-icons/tb'
import {IoLogoInstagram} from 'react-icons/io';
import { RiTwitterXLine} from 'react-icons/ri';

const Topbar = () => {
  return (
    <div className='bg-rabbit-red text-white px-10 '>
      <div className='container mx-auto flex justify-between items-center py-3 px-4'>  
        <div className= 'hidden md:flex items-center space-x-4'>
          
        <a href="#" className='hover:text-gray-300 '><TbBrandMeta className='w-5 h-5'/></a>
        <a href="#" className='hover:text-gray-300 '><IoLogoInstagram className='w-5 h-5'/></a>
        <a href="#" className='hover:text-gray-300 '><RiTwitterXLine className='w-4 h-5'/></a>
        </div>

      <div className='text-center text-sm flex-grow'>
        <span>we ship worldwide - Fast and reailable shipping!</span>
      </div>
      <div className='hidden text-sm md:block'>
        <a href="tel:12345678">7838567860</a>
      </div>

      </div>
    </div>
  )
}

export default Topbar
