import { Type } from "class-transformer";
import { TcRol } from "./tc-rol";

export class TdUsuario {
    idUsuario: number;
    activo: boolean;
    curp: string;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    fechaAlta: string;
    ineOcr: string;
    profesion: string;
    telefono: string;
    correoElectronico: string;
    @Type(() => TcRol)
    tcRol: TdUsuario;

}
