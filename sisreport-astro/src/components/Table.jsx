import { useStoreSisReports } from "@store/StoreSisReports"

export default function Table() {
  const { reports } = useStoreSisReports()

  const isReports = reports.length > 0

  console.log(reports);


  return (
    <div class="overflow-x-auto rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 font-semibold">
        <thead class="text-black uppercase bg-primary">
          <tr>
            <th scope="col" class="px-6 py-3"> Numero Computador</th>
            <th scope="col" class="px-6 py-3"> Sede</th>
            <th scope="col" class="px-6 py-3"> Salon</th>
            <th scope="col" class="px-6 py-3"> Descripción</th>
            <th scope="col" class="px-6 py-3"> Estado</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr class="odd:bg-gray-500 even:bg-white border-b text-black" key={report._id}>
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-950 whitespace-nowrap"
              >{report.numeroComputador}</th>
              <td class="px-6 py-4">{report.sede}</td>
              <td class="px-6 py-4">{report.salon}</td>
              <td class="px-6 py-4">{report.description}</td>
              <td class="px-6 py-4">
                {report.estado ? "Activo" : "Inactivo"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
