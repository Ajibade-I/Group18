import Category from "../Components/Category"
import ClientCard from "../Components/ClientCard"
import Hero from "../Components/Hero"
import JobListing from "../Components/JobListing"
import SearchCard from "../Components/SearchCard"
import TalentCard from "../Components/TalentCard"


const Home = () => {
  return (
    <div>
      <Hero/>
      <SearchCard/>
      <Category/>
      <TalentCard/>
      <JobListing/>
      <ClientCard/>
    </div>
  )
}

export default Home