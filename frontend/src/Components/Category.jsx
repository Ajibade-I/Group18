
import Card from "./Card"
import pix1 from "../assets/icons8-email-67.png"
import pix2 from "../assets/image2.png"
import pix3 from "../assets/icons8-avatar-48.png"
import pix4 from "../assets/image4.png"
import pix5 from "../assets/image5.png"
import pix6 from "../assets/image6.png"
import pix7 from "../assets/image7.png"
import pix8 from "../assets/image8.png"

const Category = () => {
    
  return (
    <div className="w-full  text-[#2b3940]  flex flex-col justify-center items-center  my-28">
        <h2 className=" font-bold text-4xl">Explore By Category</h2>
      <div className="flex flex-wrap  items-center justify-center  gap-5 p-6 my-10">
     
     <Card image={pix1} title = "Marketing" text = "123 vacancy"/>
      <Card image={pix2} title = "Marketing" text = "123 vacancy"/>
      <Card image={pix3} title = "Marketing" text = "123 vacancy"/>
      <Card image={pix4} title = "Marketing" text = "123 vacancy"/>
      <Card image={pix5} title = "Marketing" text = "123 vacancy"/>
      <Card image={pix6} title = "Marketing" text = "123 vacancy"/>
      <Card image={pix7} title = "Marketing" text = "123 vacancy"/>
      <Card image={pix8} title = "Marketing" text = "123 vacancy"/>
     
      </div>

    </div>
  )
}

export default Category