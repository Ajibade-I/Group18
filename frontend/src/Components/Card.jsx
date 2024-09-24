


const Card = (props) => {

  return (
    <div className="w-[300px] h-[200px] bg-white hover:border p-8 shadow-lg">
      <img src={props.image}/>
      <p className=" font-bold  text-[#2b3940]">{props.title}</p>
      <p className="text-[#00b074]">{props.text}</p>
        
        

    </div>
  )
}

export default Card