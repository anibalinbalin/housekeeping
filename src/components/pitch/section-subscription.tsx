import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function SectionSubscription() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>TAREAS MENSUALES</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="px-4 md:px-0 max-w-6xl mx-auto w-full">
          <p className="text-sm md:text-lg mb-6 md:mb-8 text-center">
            Esta es una tabla borrador del tipo de tareas que se gestionarian durante el mes, ajustado a la ocupación y necesidades de ustedes en la casa:
          </p>
          
          <div className="overflow-x-auto -mx-4 md:mx-0">
            <div className="min-w-full px-4 md:px-0">
              <Table>
            <TableHeader>
              <TableRow className="border-[#818181]">
                <TableHead className="w-[30%] text-white text-xs md:text-sm">Área</TableHead>
                <TableHead className="text-white text-xs md:text-sm">Tareas habituales</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-[#818181]">
                <TableCell className="font-medium text-xs md:text-sm">Ambiente interior</TableCell>
                <TableCell className="text-xs md:text-sm">
                  Ventilación, control de humedad, revisión de deshumidificadores, verificación de limpieza, control de stock.
                </TableCell>
              </TableRow>
              <TableRow className="border-[#818181]">
                <TableCell className="font-medium text-xs md:text-sm">Compras y stock</TableCell>
                <TableCell className="text-xs md:text-sm">
                 compras pautadas, reposición de productos básicos, stock de leña para la estufa y parrillero.
                </TableCell>
              </TableRow>
              <TableRow className="border-[#818181]">
                <TableCell className="font-medium text-xs md:text-sm">Energía y recursos</TableCell>
                <TableCell className="text-xs md:text-sm">
                  Verificación de consumo eléctrico, revisión de tarifas contratadas, programación horaria (triple tarifa de UTE), control de consumo de OSE, luces exteriores y bomba de piscina.
                </TableCell>
              </TableRow>
              <TableRow className="border-[#818181]">
                <TableCell className="font-medium text-xs md:text-sm">Piscina y exteriores</TableCell>
                <TableCell className="text-xs md:text-sm">
                  Coordinación de limpieza, chequeo de bomba y nivel de agua, revisión de entorno.
                </TableCell>
              </TableRow>
              <TableRow className="border-[#818181]">
                <TableCell className="font-medium text-xs md:text-sm">Jardinería y exteriores</TableCell>
                <TableCell className="text-xs md:text-sm">
                  Supervisión del personal de Christian, comunicación frente a  todas las tareas estacionales.
                </TableCell>
              </TableRow>
              <TableRow className="border-[#818181]">
                <TableCell className="font-medium text-xs md:text-sm">Mantenimiento técnico</TableCell>
                <TableCell className="text-xs md:text-sm">
                  Revisión de instalaciones visibles, reporte de deterioros, coordinación con carpinteros, electricistas, herreros o sanitarios.
                </TableCell>
              </TableRow>
              <TableRow className="border-[#818181]">
                <TableCell className="font-medium text-xs md:text-sm">Previo a llegada</TableCell>
                <TableCell className="text-xs md:text-sm">
                  Limpieza verificada, ventilación anticipada, casa abastecida, verificación general del estado funcional.
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
