import { useForm } from 'react-hook-form'
import { login } from '../api/users.api'
import { useNavigate } from 'react-router-dom'
import { Navigation } from '../components/Navigation'
import { toast } from 'react-hot-toast'

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = handleSubmit(async data => {
    const res = await login(data)
    console.log(res.data)
    if (res.status === 200){
      sessionStorage.setItem('var-token', res.data.token);
      toast.success('User successfully logged in', {
        position: "bottom-right",
        style: {
            background: "#101010",
            color: "#fff"
        }
      })
      navigate('/users')
    } else {
      sessionStorage.clear();
      toast.error('User not logged in error', {
        position: "bottom-right",
        style: {
            background: "#101010",
            color: "#fff"
        }
      })
    }
  });
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="font-bold uppercase">User Login</h1>
      <form onSubmit={onSubmit}>
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

        <button className="bg-indigo-500 px-3 py-3 rounded-lg block w-full">Login</button>
        <Navigation></Navigation>
      </form>
    </div>
  );
}
