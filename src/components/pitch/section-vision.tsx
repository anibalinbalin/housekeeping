import Link from "next/link";
import { Card } from "./ui";

export function SectionVision() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="absolute left-8 right-8 top-4 flex justify-between text-lg">
        <span>Gracias</span>
      </div>
      <div className="flex flex-col min-h-screen justify-center container">
        <h1 className="text-[48px] px-4 md:px-0 md:text-[48px] font-medium text-center leading-[60px]">
          Agradezco la confianza depositada para el mantenimento, seguridad y responsabilidad del funcionamiento de la casa.
          Quedo a disposición para responder dudas según nuevas necesidades.
          Este servicio está pensado para aportar continuidad, criterio profesional y tranquilidad en el disfrute de la misma.
        </h1>
      </div>
    </div>
  );
}
