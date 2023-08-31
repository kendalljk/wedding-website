import Image from "next/image"
import hero from '../../../public/hero.jpg'

const Hero =() => {
  return (
    <section className="flex justify-center w-full"
    >
      <div className=""
          style={{
                maxHeight: '80vh',
        }}
      >
        <Image src={hero} alt="Brent and Miranda engagement photo"
          style={{
            objectFit: 'contain',
            maxHeight: '100%',
        }}/>
      </div>
    </section>
  )
}

export default Hero