import React, { useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const NewArrival = () => {

    const scrollRef = React.useRef(null);
    const[isDraging,setIsDraging] = React.useState(false);
    const[startX,setStartX] = React.useState(0);
    const [scrollLeft,setScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const[CanScrollLeft,setCanScrollLeft] = React.useState(false);
    const newArrivals = [
        {
            _id: 1,
            name: 'stylish jacket',
            price: 1200,
            image: 'https://picsum.photos/500/500?random=1',
        },
        {
            _id: 2,
            name: 'stylish jacket',
            price: 1200,
            image: 'https://picsum.photos/500/500?random=2',
        },
        {
            _id: 3,
            name: 'stylish jacket',
            price: 1200,
            image: 'https://picsum.photos/500/500?random=3',
        },
        {
            _id: 4,
            name: 'stylish jacket',
            price: 1200,
            image: 'https://picsum.photos/500/500?random=4',
        },
        {
            _id: 5,
            name: 'stylish jacket',
            price: 1200,
            image: 'https://picsum.photos/500/500?random=5',
        },
        {
            _id: 6,
            name: 'stylish jacket',
            price: 1200,
            image: 'https://picsum.photos/500/500?random=6',
        },
        {
            _id: 7,
            name: 'stylish jacket',
            price: 1200,
            image: 'https://picsum.photos/500/500?random=7',
        },
        {
            _id: 8,
            name: 'stylish jacket',
            price: 1200,
            image: 'https://picsum.photos/500/500?random=8',
        }


    ]
    
    const handleMouseDown =(e)=>{
        setIsDraging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setCanScrollLeft(scrollRef.current.scrollLeft);
    }

    const handleMouseMove = (e) => {
        if (!isDraging) return;
        const x = e.pageX -scrollRef.current-offsetLeft;
        const walk = x-startX; 
    }
    const handleMouseUpOrLeave = (e) => {
        isDraging(false)
    }
    const scroll = (direction) => {
        const ScrollAmount = direction === 'left' ? -300 : 300;
        scrollRef.current.scrollBy({ left: ScrollAmount, behavior: 'smooth' });
    };

    const updateScrollButtons = () => {
        const container = scrollRef.current;
        if (container) {
            const LeftScroll = container.scrollLeft;
            const RightScrollable = container.scrollWidth > LeftScroll + container.clientWidth;
            setCanScrollLeft(LeftScroll > 0);
            setCanScrollRight(RightScrollable);
        }
    };

    useEffect(() => {
        const container = scrollRef.current;
        if (container) {
            container.addEventListener('scroll', updateScrollButtons);
            updateScrollButtons();
            return ()=> container.removeEventListener("scroll", updateScrollButtons)
        }
    }, []);


    return (
        <section className='py-16 px-4 lg-px-0'>
            <div className='container mx-auto text-center mb-8 relative'>
                <h2 className='text-3xl mb-4 font-bold '>Explore New Arrivals</h2>
                <p className='text-lg mb-8 text-gray-600'>Discover the latest syles straight off the runway , freshly added to
                    keep the wardobe at cutting edge of fashion.
                </p>
            </div>
            <div className='absolute right-0 z-10 flex md:pr-4'>
                <button
                    onClick={() => scroll("left")}
                    disabled={!CanScrollLeft}
                    className={`rounded border p-2 spoace-x-2 ${CanScrollLeft ? ' bg-white text-black' : ' bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                >
                    <FiChevronLeft className='text-2xl rounded text-gray-500 cursor-pointer hover:text-gray-700 transition-colors' />
                </button>
                <button
                    onClick={() => scroll("right")}
                    disabled={!canScrollRight}
                    className={`rounded border p-2 spoace-x-2 ${canScrollRight ? ' bg-white text-black' : ' bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                >
                    <FiChevronRight className='text-2xl rounded text-gray-500 cursor-pointer hover:text-gray-700 transition-colors' />
                </button>
            </div>

            <div
  ref={scrollRef}
  onMouseDown={handleMouseDown}
  onMouseMove={handleMouseMove}
  onMouseUp={handleMouseUpOrLeave}
  onMouseLeave={handleMouseUpOrLeave}
  className={`w-full overflow-x-auto scrollbar-hide flex space-x-4 md:space-x-6 relative px-1 md:p-8 md:pt-16 md:pr-4 ${isDraging ? 'cursor-grabbing' : 'cursor-grab'}`}
>
  {newArrivals.map((product) => (
    <div
      key={product._id}
      className="min-w-[80vw] sm:min-w-[60vw] md:min-w-[40vw] lg:min-w-[30%] max-w-xs flex-shrink-0 relative"
    >
      <img
        src={product.image}
        draggable={false}
        className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-50 rounded-b-lg backdrop-blur-md p-4">
        <Link to={`/product/${product._id}`}>
          <h4 className="font-medium">{product.name}</h4>
          <p className="mt-1">{product.price}</p>
        </Link>
      </div>
    </div>
  ))}
</div>
        </section>
    )
}

export default NewArrival
