import { useState } from "react";
export default () => {
  const [name ,setName] = useState('')
  const [age ,setAge] = useState('')
  const [email ,setEmail] = useState('')

  return (
 <div className="text-center ">   <div className="w-screen flex justify-center mt-20 gap-28">
      <div className="shadow-xl rounded-lg p-10 border flex flex-col gap-5 w-[500px]">
        <input
          type="text"
          id="name"
          placeholder="your name"
          class="border px-4 py-1.5 border-black rounded-lg" onChange={(e) =>setName( e.target.value) }
        />
        <input
          type="number"
          id="age"
          placeholder="your age"
          class="border px-4 py-1.5 border-black rounded-lg" onChange={(e) =>setAge( e.target.value) }
        />
        <input
          type="email"
          id="email"
          placeholder=" your email "
          class="border px-4 py-1.5 border-black rounded-lg" onChange={(e) =>setEmail( e.target.value) }
        />

        <button
          class="bg-blue-600 text-white px-4 py-1.5 rounded-lg"
          
        >
          clik
        </button>
      </div>
    </div>
<p className="pt-9  ">
hello {name} your age is 
{age} old ; and your email is : 
{email} 

</p>
</div>

  )}
