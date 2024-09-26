import JobCard from "./JobCard"
import pix from "../assets/com-logo-1.jpeg"
import pix1 from "../assets/com-logo-2.jpeg"
import pix2 from "../assets/com-logo-3.jpeg"
import pix3 from "../assets/com-logo-4.jpeg"
import pix4 from "../assets/com-logo-5.jpeg"
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Link } from "react-router-dom"

const JobListing = () => {
  return (
    <div className=" w-full my-20 px-10 tablet:px-0 text-center flex flex-col  text-[#2b3940]"> 
        <h2 className="font-bold text-4xl tablet:text-2xl montserrat-regular">Job Listing</h2>
       <div>
       <Link to="/login">
       <JobCard image={pix} title="Software Engineering" text="NewYork,USA" icon = {<CiLocationOn />} text1 = "Full Time" icon1 = {<CiClock2 />}
        text2 = "$123-$456"  icon2 = {<FaRegMoneyBillAlt />} Month = "" Year = "" date = ""/></Link>
        <Link to="/login">
        <JobCard image={pix1} title="Marketing Manager" text="NewYork,USA" icon = {<CiLocationOn />} text1 = "Full Time" icon1 = {<CiClock2 />}
        text2 = "$123-$456"  icon2 = {<FaRegMoneyBillAlt />} Month = "" Year = "" date = ""/></Link>
        <Link to="login">
        <JobCard image={pix2} title="Product Designer" text="NewYork,USA" icon = {<CiLocationOn />} text1 = "Full Time" icon1 = {<CiClock2 />}
        text2 = "$123-$456"  icon2 = {<FaRegMoneyBillAlt />} Month = "" Year = "" date = ""/> 
        </Link>
         <Link to="/login">
         <JobCard image={pix3} title="Creative Director" text="NewYork,USA" icon = {<CiLocationOn />} text1 = "Full Time" icon1 = {<CiClock2 />}
        text2 = "$123-$456"  icon2 = {<FaRegMoneyBillAlt />} Month = "" Year = "" date = ""/>
         </Link>
        <Link to="login">
        <JobCard image={pix4} title="Wordpress Developer" text="NewYork,USA" icon = {<CiLocationOn />} text1 = "Full Time" icon1 = {<CiClock2 />}
        text2 = "$123-$456"  icon2 = {<FaRegMoneyBillAlt />} Month = "" Year = "" date = ""/>
        </Link>
       </div>
    </div>
  )
}

export default JobListing