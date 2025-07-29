import Image from "next/image";
import Link from "next/link";
import founders from "./founders.png";
import { Card } from "./ui";
import { GearIcon, ChatBubbleIcon } from "@radix-ui/react-icons";

export function SectionTeam() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>PROCESO DE TRABAJO Y COMUNICACIÓN</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="space-y-8">
            <Card className="items-start space-y-0">
              <GearIcon
                className="mb-4 w-12 h-12 md:w-[76px] md:h-[76px]"
                style={{ color: "#e6e5e5" }}
              />

              <h2 className="text-xl">Mantenimiento Continuo</h2>
              <span>Preventivo</span>

              <div className="text-[#878787] text-sm !mt-2">
                • Mantenimiento preventivo continuo<br/>
                • Control sistemático de tareas mediante checklist operativo
              </div>
            </Card>

            <Card className="items-start space-y-0">
              <ChatBubbleIcon
                className="mb-4 w-12 h-12 md:w-[76px] md:h-[76px]"
                style={{ color: "#e6e5e5" }}
              />

              <h2 className="text-xl">Comunicación Abierta</h2>
              <span className="mb-4">Coordinación</span>

              <div className="text-[#878787] text-sm !mt-2">
                • Whatsapp para coordinación con proveedores.<br/>
                • Reporte y seguimiento.<br/>
                • Acciones correctivas y preventivas.
              </div>
            </Card>
          </div>
          <div>
            <Image
              src="/laura.jpg"
              alt="Founders"
              width={650}
              height={875}
              quality={100}
            />
          </div>
          <div className="ml-auto w-full space-y-8 items-center flex">
            <h2 className="text-2xl md:text-[48px] font-medium text-center leading-tight">
              &ldquo;Mi compromiso es que La Siciliana este siempre acondicionada, funcional y óptima para su disfrute todo el año.&rdquo;
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
