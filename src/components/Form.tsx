import MailOutlineIcon from '@mui/icons-material/MailOutline';
import SendIcon from '@mui/icons-material/Send';

const Form = () => {
  return (
    <div className='form-bg w-full sm:rounded-[30px] rounded-[10px] sm:p-[35px] p-[20px] max-w-full'>
      <div className='sm:mb-8 mb-3'>
        <h4 className='sm:text-[18px] text-[10px] font-bold sm:leading-[20px] leading-[12px] tracking-[-0.18px]'>Join the waitlist</h4>
        <p className='sm:text-[16px] text-[8px] font-medium sm:leading-[20px] leading-[12px] tracking-[-0.16px]]'>Sign up to get early access</p>
      </div>

      <form method="" className='flex justify-between gap-2'>
        <div className='relative flex items-center w-full'>
            <input className='form-input rounded-[8px] sm:rounded-[20px] sm:text-[16px] text-[10px] font-normal sm:leading-[20px] leading-[10px] tracking-[-0.16px] sm:px-12 px-8 sm:py-3 py-2 text-black w-full h-full max-w-[594px]' type="email" name="email" placeholder="Your email" id="" />
            <MailOutlineIcon className='mailIcon' />
        </div>

        <button type="submit" className='sendButton rounded-[8px] sm:rounded-[20px] sm:px-8 p-4 flex justify-center items-center'><SendIcon className='sendIcon' /></button>
      </form>
    </div>
  )
}

export default Form;