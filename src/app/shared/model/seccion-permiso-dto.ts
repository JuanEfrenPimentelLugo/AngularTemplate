import { Type } from "class-transformer";
import { PermisoDto } from "./permiso-dto";

export class SeccionPermisoDto {
    idRol: number;
    idSeccion: number;
    seccion: string;
    url: string;
    idParent: number;
    level: number;
    permiso: string;
    count: number;
    @Type(() => PermisoDto)
    permisoDto: PermisoDto[];
}
