import { useForm } from 'react-hook-form'
import { createUser } from '../api/users.api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = handleSubmit(async data => {
    await createUser(data)
    toast.success('Successful user registration', {
        position: "bottom-right",
        style: {
            background: "#101010",
            color: "#fff"
        }
    })
    navigate('/login')
  });
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="font-bold uppercase">User Register</h1>
      <form onSubmit={onSubmit}>
      <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          {...register("name", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.name && <span>this Name is required</span>}
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          {...register("email", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.email && <span>this Email is required</span>}
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.password && <span>this Password is required</span>}

        <button className="bg-indigo-500 px-3 py-3 rounded-lg block w-full">Save</button>
      </form>
    </div>
  );
}
