
import Card from "./Card"
import pix1 from "../assets/icons8-email-67.png"
 import pix2 from "../assets/image2.png"
import pix3 from "../assets/icons8-avatar-48.png"
 import pix4 from "../assets/image4.png"
 import pix5 from "../assets/image5.png"
 import pix6 from "../assets/icons8-handshake-50.png"
 import pix7 from "../assets/image7.png"
 import pix8 from "../assets/image8.png"

const Category = () => {
    
  return (
    <div className="w-full  text-[#2b3940]  flex flex-col  justify-center  items-center my-24">
        <h2 className=" font-bold text-4xl tablet:text-3xl">Explore By Category</h2>
         
        
       
    <div className="flex flex-wrap   items-center justify-center gap-16  tablet:gap-5  p-6 my-14">
     
     <Card image={pix1} title = "Marketing" text = "123 vacancy"/>
      <Card image={pix2} title = "Cutomer Service" text = "123 vacancy"/>
      <Card image={pix3} title = "Human Resource" text = "123 vacancy"/>
      <Card image={pix4} title = "Project Management" text = "123 vacancy"/>
      <Card image={pix5} title = "Business Development" text = "123 vacancy"/>
      <Card image={pix6} title = "Sales & Communication" text = "123 vacancy"/>
      <Card image={pix7} title = "Teaching & Education" text = "123 vacancy"/>
      <Card image={pix8} title = "Design and Creative" text = "123 vacancy"/>
     
      </div> 

    </div>
  )
}

export default Category