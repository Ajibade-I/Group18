

const ContactInput = () => {
  return (
    <div className="w-full">
           <div className="flex-col flex gap-4 w-full">
            <input placeholder="Your Name" type="text" className="p-4 outline-none" />
            <input placeholder="Your Email" type="text" className="p-4 outline-none" />
            <input placeholder="Subject" type="text" className="p-4 outline-none" />

            <textarea placeholder = "Message"
            maxLength = {400} className="h-[130px] p-4 outline-none">
            </textarea>
            <button className="bg-[#00b074] font-medium p-4 rounded text-white ">Send Message</button>
          </div>
    </div>
  )
}

export default ContactInput