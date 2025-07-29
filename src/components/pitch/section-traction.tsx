import Image from "next/image";
import customers from "./customers.png";
import { Card } from "./ui";

export function SectionTraction() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>HONORARIOS Y CONDICIONES</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="space-y-8">
            <Card className="min-h-[365px]">
              <h2 className="text-2xl">Honorarios mensuales</h2>

              <span className="mt-6 mb-4 font-mono text-[60px] md:text-[80px] block">
                USD 950.-
              </span>

            </Card>

            <Card className="min-h-[365px]">
              <h2 className="text-2xl">Facturación</h2>

              <p className="text-[#878787] text-sm text-left mt-4">
                • Facturación mensual al comienzo de cada período<br/><br/>
                • Sin contrato mínimo<br/><br/>
              </p>
            </Card>
          </div>
          <div className="space-y-8">
            <Card className="min-h-[365px]">
              <h2 className="text-2xl">Gastos operativos</h2>

              <p className="text-[#878787] text-sm text-left mt-4">
                Los gastos operativos (alimentos, leña, reparaciones, insumos) son autorizados previamente y abonados previamente, ya sea de forma directa o por reintegro documentado. A acordar.
              </p>
            </Card>
          </div>

          <div className="ml-auto w-full max-w-[820px] h-full border border-border p-6 bg-[#0C0C0C] relative flex flex-col justify-center">
            <h2 className="mb-8 block text-[38px] font-medium">
              Condiciones importantes
            </h2>

            <div className="space-y-6 text-[#878787]">
              <div className="border-l-4 border-white pl-4">
                <h3 className="text-white text-lg mb-2">Servicio de limpieza</h3>
                <p className="text-sm">
                  El servicio de limpieza, reparaciones, mantenimiento, sería abonado de forma independiente por el propietario. A acordar método.
                </p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <h3 className="text-white text-lg mb-2">Flexibilidad del servicio</h3>
                <p className="text-sm">
                  Las necesidades que se vayan presentando se comunican con antelación.
                </p>
              </div>

              <div className="border-l-4 border-white pl-4">
                <h3 className="text-white text-lg mb-2">Transparencia en gastos</h3>
                <p className="text-sm">
                  Todos los gastos operativos requieren autorización previa y se documentan para su reintegro o pago directo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
