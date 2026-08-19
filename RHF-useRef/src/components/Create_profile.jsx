import { useRef } from 'react'

const Create_profile = () => {


  const input_ref = useRef({});


 const handle_form = (e) => {
  e.preventDefault();
  const data = {
    name: input_ref.current.name.value,
    email: input_ref.current.email.value,
    password: input_ref.current.password.value,
    profile_url: input_ref.current.profile_url.value,
  }
  console.log(data);
  input_ref.current.name.value = '';
  input_ref.current.email.value = '';
  input_ref.current.password.value = '';
  input_ref.current.profile_url.value = '';
 }




  return (
    <div className='flex items-center justify-center h-screen'>
        <form 
        onSubmit={handle_form}
        className='flex flex-col gap-5 bg-[#ff0000] p-5 rounded-lg w-90'>
            <input
             ref = {(ele) => { input_ref.current.name = ele }}
             className='bg-[#ffffff] rounded-md  p-2' type="text" placeholder='user name'/>
            <input
             ref={(ele) => {input_ref.current.email = ele}}
             className='bg-[#ffffff] rounded-md  p-2' type="email" placeholder='email'/>
            <input
             ref={(ele) => {input_ref.current.password = ele}}
             className='bg-[#ffffff] rounded-md  p-2' type="password" placeholder='password'/>
            <input
             ref={(ele) => {input_ref.current.profile_url = ele}}
            className='bg-[#ffffff] rounded-md p-2' type="url" placeholder='profile url'/>
            <button className='bg-[#ffffff] rounded-md  p-2' >create</button>
        </form>
    </div>
  )
}
export default Create_profile