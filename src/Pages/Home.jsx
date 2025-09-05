import Hero from '../Components/Layout/Hero'
import GenderCollection from '../Components/Products/GenderCollection'
import NewArrival from '../Components/Products/NewArrival'
import ProductGrid from '../Components/Products/ProductGrid'
import ProductDetails from '../Components/Products/ProductDetails'
import FeaturedCollection from '../Components/Products/FeaturedCollection'
import FeaturedSection from '../Components/Products/FeaturedSection'


const PlaceholderProducts = [
  {
    _id: '1',
    name: 'product1',
    price: 1000,
    image: [
      {
        url: 'https://picsum.photos/500/500?random=2',
        alt: "Stylish Jacket Front View"
      }
    ]
  },
  {
    _id: '2',
    name: 'product2',
    price: 1000,
    image: [
      {
        url: 'https://picsum.photos/500/500?random=562',
        alt: "Stylish Jacket Front View"
      }
    ]
  },
  {
    _id: '3',
    name: 'product3',
    price: 1000,
    image: [
      {
        url: 'https://picsum.photos/500/500?random=2562',
        alt: "Stylish Jacket Front View"
      }
    ]
  },
  {
    _id: '4',
    name: 'product4',
    price: 1000,
    image: [
      {
        url: 'https://picsum.photos/500/500?random=922',
        alt: "Stylish Jacket Front View"
      }
    ]
  },
  {
    _id: '5',
    name: 'product5',
    price: 1000,
    image: [
      {
        url: 'https://picsum.photos/500/500?random=292',
        alt: "Stylish Jacket Front View"
      }
    ]
  },
  {
    _id: '6',
    name: 'product6',
    price: 1000,
    image: [
      {
        url: 'https://picsum.photos/500/500?random=212',
        alt: "Stylish Jacket Front View"
      }
    ]
  },
  {
    _id: '7',
    name: 'product7',
    price: 1000,
    image: [
      {
        url: 'https://picsum.photos/500/500?random=232',
        alt: "Stylish Jacket Front View"
      }
    ]
  },
  {
    _id: '8',
    name: 'product8',
    price: 1000,
    image: [
      {
        url: 'https://picsum.photos/500/500?random=222',
        alt: "Stylish Jacket Front View"
      }
    ]
  },
]


const Home = () => {
  return (
    <>
      <Hero />
      <GenderCollection />
      <NewArrival />
      <h2 className='text-3xl font-bold mb-4 text-center' >Best Seller</h2>
      <ProductDetails />

      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold mb-4 text-center '>
          Top Women's Wears
        </h2>
        <ProductGrid products={PlaceholderProducts} />
      </div>
      <FeaturedCollection/>
      <FeaturedSection />
    </>
  )
}

export default Home
