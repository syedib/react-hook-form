import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
function YoutubeForm() {

  type FormValues = {
    username: string;
    email: string;
    channel: string;
  }

  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted value: ", data)
  }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            
            <div className="form-control">
              <label htmlFor='username'>User Name</label>
              <input type="text" id="username" {...register("username", {
                required: 'Username is required'
              })} />

              <p className='error-message'>{errors.username?.message}</p>
            </div>

            <div className="form-control">
              <label htmlFor='email'>Email</label>
              <input type="text" id="email" {...register("email", {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Invalid Email Format'
                }
              })} />
              <p className='error-message'>{errors.email?.message}</p>
            </div>

            <div className="form-control">
              <label htmlFor='channel'>Channel</label>
              <input type="text" id="channel" {...register("channel", {
                required: 'Channel is required'
              })} />

            <p className='error-message'>{errors.channel?.message}</p>
            </div>

            <button>Submit</button>
        </form>
        <DevTool control={control}/>
    </div>
  )
}

export default YoutubeForm