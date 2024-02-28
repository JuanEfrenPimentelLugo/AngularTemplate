import { Type } from "class-transformer";

export class TcSeccion{
    idSeccion: number;
    activo: boolean;
    clave: string;
    css: string;
    descripcion: string;
    orden: number;
    url: string;
    fechaAlta: string;
    @Type(() => TcSeccion)
    tcSeccion: TcSeccion;
    @Type(() => TcSeccion)
    tcSeccions: TcSeccion[];
    idParent: number;
    visible: boolean;
    icon: string;
    classCss: string;
}
