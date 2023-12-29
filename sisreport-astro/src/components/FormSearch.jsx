import { getOneReportApi } from "@api/report.api"
import { useStoreSisReports } from "@store/StoreSisReports"
import { useForm } from "react-hook-form"

export default function FormSearch() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const { setReports } = useStoreSisReports()

  async function searchReports({ ccEst }) {
    const { data } = await getOneReportApi(ccEst)
    setReports(data.reporte)
  }

  const onSubmit = handleSubmit((ccEst) => {
    searchReports(ccEst)
    reset
  })


  return (
    <form onSubmit={onSubmit}>
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>

        <input
          type="search"
          id="default-search"
          {...register('ccEst', { required: true })}
          class="block w-full p-4 ps-10 text-sm rounded-lg bg-gray-500 focus:border-blue-500 outline-none text-white"
          placeholder="Documento Identidad, 1006..." required />
        <button type="submit" class="text-black absolute end-2.5 bottom-2.5 bg-primary hover:bg-primary/40 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
      </div>
    </form>
  )
}
