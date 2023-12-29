import { loginApi } from '@api/auth.api'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'


export default function FormLogin() {
  const isAuthenticated = false

  if (isAuthenticated) return <Navigate to='/dashboard' replace />

  function signup(data) {
    loginApi(data)

    toast.success('Sesión iniciada')
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    signup(data)
    reset()
  })

  return (
    <form className='flex flex-col gap-4' onSubmit={onSubmit}>
      <div className='flex flex-col'>
        <label htmlFor='identificacion'>Numero de identificación</label>
        <input
          type='text'
          {...register('identificacion', { required: true })}
          placeholder='1006...'
          autoFocus
          autoComplete='off'
          className='bg-white/40 text-white outline-none p-1'
        />
        {errors.identificacion?.type === 'required' && (
          <p role='alert' className='text-P-error'>
            Numero de identificación invalido
          </p>
        )}
      </div>

      <div className='flex flex-col'>
        <label htmlFor='password'>Contraseña</label>
        <input
          type='password'
          {...register('password', { required: true })}
          placeholder='noSoyUnaContraseña...'
          autoFocus
          autoComplete='off'
          className='bg-white/40 text-white outline-none p-1'
        />
        {errors.password?.type === 'required' && (
          <p role='alert' className='text-P-error'>
            Contraseña invalida
          </p>
        )}
      </div>

      <button
        type='submit'
        className='bg-primary w-max text-black rounded-lg py-2 px-6 hover:bg-primary/60 hover:text-white'>
        Iniciar Sesión
      </button>

      <Toaster richColors />

    </form >
  )
}
