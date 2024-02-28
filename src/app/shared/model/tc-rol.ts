import { Type } from "class-transformer";

export class TcRol {
    idRol: number;
    activo: boolean;
    clave: string;
    descripcion: string;
    fechaAlta: string;
    fechaModifica: string;
    idParent: number;
    sistema: boolean;
    @Type(() => TcRol)
    data: TcRol;
    @Type(() => TcRol)
    tcRol: TcRol;
}
