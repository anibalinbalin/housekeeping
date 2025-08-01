import Link from "next/link";
import { Card } from "./ui";

export function SectionVision() {
  return (
    <div className="min-h-screen relative w-screen">
      <div className="flex flex-col min-h-screen justify-center container">
        <h1 className="text-[24px] sm:text-[32px] md:text-[48px] px-4 md:px-0 font-medium text-center leading-[32px] sm:leading-[40px] md:leading-[60px]">
          Agradezco la confianza depositada para el mantenimento, seguridad y responsabilidad del funcionamiento de la casa.
          Quedo a disposición para responder dudas según nuevas necesidades.
          Este servicio está pensado para aportar continuidad, criterio profesional y tranquilidad en el disfrute de la misma.
        </h1>
      </div>
    </div>
  );
}
