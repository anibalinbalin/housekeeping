import Image from "next/image";
import Link from "next/link";
import overview from "./casa.jpg";
import { cn } from "@/lib/utils";
import { HomeIcon, MixerHorizontalIcon, CheckCircledIcon, PersonIcon } from "@radix-ui/react-icons";

export function SectionSolution() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>SERVICIOS INCLUIDOS</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-[1.5fr,1fr] gap-6 md:gap-12 px-4 md:px-0 pt-20 md:pt-0">
          <div className="flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="min-h-[250px] md:h-[300px] flex border flex-col justify-between border-border bg-[#121212] px-6 md:px-8 pt-6 md:pt-8 pb-4 md:pb-6">
                <div className="flex flex-col items-center gap-4">
                  <HomeIcon
                    className="w-12 h-12 md:w-[76px] md:h-[76px]"
                    style={{ color: "#e6e5e5" }}
                  />
                  <h2 className="text-lg md:text-xl">Supervisión y Preparación</h2>
                </div>
                <div className="text-[#878787] text-[11px] md:text-xs text-left space-y-1">
                  <div>• Optimización integral de la casa antes de cada llegada.</div>
                  <div>• Verificación de limpieza realizada por Margarita.</div>
                  <div>• Confirmación de stock y orden doméstico esencial.</div>
                  <div>• Compras previas según criterios familiares con sugerencias nutricionales si se requieren.</div>
                  <div>• Control claro de las facturas y pagos.</div>
                </div>
              </div>

              <div className="min-h-[250px] md:h-[300px] flex border flex-col justify-between border-border bg-[#121212] px-6 md:px-8 pt-6 md:pt-8 pb-4 md:pb-6">
                <div className="flex flex-col items-center gap-4">
                  <MixerHorizontalIcon
                    className="w-12 h-12 md:w-[76px] md:h-[76px]"
                    style={{ color: "#e6e5e5" }}
                  />
                  <h2 className="text-lg md:text-xl">Control Ambiental</h2>
                </div>
                <div className="text-[#878787] text-[11px] md:text-xs text-left space-y-1">
                  <div>• Control de humedad y ventilación de ambientes.</div>
                  <div>• Optimización horaria del uso de bomba de piscina.</div>
                  <div>• Control de iluminación exterior.</div>
                  <div>• Optimización del uso de energía y servicios.</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="min-h-[250px] md:h-[300px] flex border flex-col justify-between border-border bg-[#121212] px-6 md:px-8 pt-6 md:pt-8 pb-4 md:pb-6">
                <div className="flex flex-col items-center gap-4">
                  <CheckCircledIcon
                    className="w-12 h-12 md:w-[76px] md:h-[76px]"
                    style={{ color: "#e6e5e5" }}
                  />
                  <h2 className="text-lg md:text-xl">Coordinación Técnica</h2>
                </div>
                <div className="text-[#878787] text-[11px] md:text-xs text-left space-y-1">
                  <div>• Supervisión de jardinería y piscina.</div>
                  <div>• Control de fumigación / plagas.</div>
                  <div>• Coordinación de servicios técnicos frente a desgastes normales de una casa.</div>
                  <div>• Propuestas de mejora tecnológicas (wiFi en habitaciones, uso de AirPlay dentro y afuera de la casa)</div>
                </div>
              </div>

              <div className="min-h-[250px] md:h-[300px] flex border flex-col justify-between border-border bg-[#121212] px-6 md:px-8 pt-6 md:pt-8 pb-4 md:pb-6">
                <div className="flex flex-col items-center gap-4">
                  <PersonIcon
                    className="w-12 h-12 md:w-[76px] md:h-[76px]"
                    style={{ color: "#e6e5e5" }}
                  />
                  <h2 className="text-lg md:text-xl">Gestión de Personal</h2>
                </div>
                <div className="text-[#878787] text-[11px] md:text-xs text-left space-y-1">
                  <div>• Supervisión del personal tercerizado.</div>
                  <div>• Coordinación operativa de tareas.</div>
                  <div>• Relacionamiento correcto con proveedores y terceros.</div>
                  <div>• Garantía de estándares de calidad.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <Image
              src={overview}
              alt="Casa Overview"
              width={500}
              height={580}
              quality={100}
              className="rounded-lg shadow-lg object-cover"
              style={{ maxHeight: '580px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
