import { createReportesApi } from '@api/report.api';
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'


export default function FormReport() {

  function createReportes(data) {
    createReportesApi(data)

    toast.success('Reporte exitoso')
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    createReportes(data)
    reset()
  })

  return (
    <form className='flex flex-col gap-4' onSubmit={onSubmit}>
      <div className='flex flex-col'>
        <label htmlFor="ccEst">Numero de identificación</label>
        <input
          type='number'
          {...register('ccEst', { required: true })}
          placeholder='1006...'
          autoFocus
          autoComplete='off'
          className='bg-white/40 text-white outline-none p-1'
        />
        {errors.ccEst?.type === 'required' && (
          <p role='alert' className='text-quaternary'>
            Numero de identificación invalido
          </p>
        )}
      </div>

      <div className='flex flex-col md:flex-row  md:justify-between '>
        <div className='flex flex-col'>
          <label htmlFor='sede'>Seleccione la sede</label>
          <select
            {...register('sede', { required: true })}
            className='bg-white/40 outline-none p-1  text-white'>
            <option className='text-black' value=''>seleccionar</option>
            <option className='text-black' value='Casa Obando'>Casa Obando</option>
            <option className='text-black' value='Bicentenario'>Bicentenario</option>
            <option className='text-black' value='sede 3'>Sede 3</option>
          </select>
          {errors.sede?.type === 'required' && (
            <p role='alert' className='text-quaternary'>
              Seleccione una sede
            </p>
          )}
        </div>

        <div className='flex flex-col'>
          <label htmlFor='salon'>Número del Salón</label>
          <select
            {...register('salon', { required: true })}
            className='bg-white/40 outline-none p-1 text-white'>
            <option className='text-black' value=''>seleccionar</option>
            <option className='text-black' value='1'>salón 1</option>
            <option className='text-black' value='2'>salón 2</option>
            <option className='text-black' value='3'>salón 3</option>
          </select>
          {errors.salon?.type === 'required' && (
            <p role='alert' className='text-quaternary'>
              Seleccione un salón
            </p>
          )}
        </div>

        <div className='flex flex-col'>
          <label htmlFor='numeroComputador'>Número de computador</label>
          <select
            {...register('numeroComputador', { required: true })}
            className='bg-white/40 outline-none p-1 text-white'>
            <option className='text-black' value=''>seleccionar</option>
            <option className='text-black' value='1'>computador 1</option>
            <option className='text-black' value='2'>computador 2</option>
            <option className='text-black' value='3'>computador 3</option>
          </select>
          {errors.numeroComputador?.type === 'required' && (
            <p role='alert' className='text-quaternary'>
              Seleccione un computador
            </p>
          )}
        </div>
      </div>

      <div className='flex flex-col'>
        <label htmlFor='description'>Descripción del problema</label>
        <textarea
          {...register('description', { required: true })}
          rows='10'
          className='bg-white/40 outline-none p-1  text-white'
          placeholder='Este equipo no ...'></textarea>
        {errors.description?.type === 'required' && (
          <p role='alert' className='text-quaternary'>
            Falta descripción del reporte
          </p>
        )}
      </div>

      <button
        type='submit'
        className='bg-primary w-max text-black rounded-lg py-2 px-6 hover:bg-primary/60 hover:text-white'>
        Enviar Reporte
      </button>

      <Toaster richColors />
    </form>
  )
}
