

const SearchCard = () => {
  return (
    <div className="w-full bg-[#00b074] h-[150px] flex items-center justify-around tablet:flex-wrap  md:flex-wrap tablet:h-[300px]">
     
     <input type="text" placeholder="KeyWord" className="p-3 w-[300px] outline-none tablet:p-2"/>
     <select className="text-[#2b3940]  p-3 w-[300px] tablet:p-2 outline-none">
          <option selected disabled>Category</option>
          <option>Human Resources</option>
          <option>Project Management</option>
           <option>Customer Service</option>
     </select>
     <select className="text-[#2b3940]  p-3 tablet:p-2 w-[300px] outline-none">
          <option selected disabled>Location</option>
          <option>NewYork,USA</option>
          <option>Lagos, Nigeria</option>
           <option>Bengaluru,India</option>
     </select>
     <button className="p-3 tablet:p-2 w-[300px] bg-[#2b3940] text-white" >Search</button>
     
    </div>
  )
}

export default SearchCard