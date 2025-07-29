import Image from "next/image";
import Link from "next/link";
import terreno from "../../../public/terreno.jpg";
import { Card } from "./ui";
import { FileTextIcon, CircleIcon, CodeIcon } from "@radix-ui/react-icons";

export function SectionProblem() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-4 right-4 md:left-8 md:right-8 top-4 flex justify-between text-lg">
        <span>RESUMEN EJECUTIVO</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <div className="grid md:grid-cols-2 gap-12 px-4 md:px-0 md:pt-0 h-[580px] md:h-auto overflow-auto pb-[100px] md:pb-0">
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <h2 className="text-4xl md:text-5xl text-center md:text-left leading-tight mb-8">
                El objetivo es mantener, optimizar y garantizar que la casa este en óptimas condiciones.
              </h2>
            </div>
            <div className="max-w-md mx-auto md:mx-0">
              <Image
                src={terreno}
                alt="Terreno"
                width={500}
                height={667}
                quality={100}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 justify-center">
            <Card className="min-h-[180px]">
              <FileTextIcon
                width={76}
                height={76}
                style={{ color: "#e6e5e5" }}
              />
              <h2 className="text-2xl">Gestión Integral</h2>
              <p className="text-[#878787] text-sm text-center">
                La propuesta consiste en una gestión integral del mantenimiento de la casa y sus alrededores.
              </p>
            </Card>
            <Card className="min-h-[180px]">
              <CircleIcon
                width={76}
                height={76}
                style={{ color: "#e6e5e5" }}
              />
              <h2 className="text-2xl">Supervisión de Tareas</h2>
              <p className="text-[#878787] text-sm text-center">
                Supervisión y dirección de tareas delegadas a terceros.
              </p>
            </Card>
            <Card className="min-h-[180px]">
              <CodeIcon
                width={76}
                height={76}
                style={{ color: "#e6e5e5" }}
              />
              <h2 className="text-2xl">Optimización de Recursos</h2>
              <p className="text-[#878787] text-sm text-center">
                Optimización técnica, energética, recursos e instalaciones.
                Coordinación de compras, servicios y mantenimiento.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
