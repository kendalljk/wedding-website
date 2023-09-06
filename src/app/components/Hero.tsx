import Image from "next/image"
import hero from '../../../public/hero.jpg'

const Hero =() => {
  return (
    <section className="flex justify-center w-full"
    >
        <Image src={hero} alt="Brent and Miranda engagement photo" width={800}
        />
    </section>
  )
}

export default Hero