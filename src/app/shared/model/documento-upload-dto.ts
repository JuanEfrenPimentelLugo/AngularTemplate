import { Type } from "class-transformer";
import { DocCoordenadaDto } from "./doc-coordenada-dto";
import { TcTipoDocumento } from "./tc-tipo-documento";
import { TdUsuario } from "./td-usuario";

export class DocumentoUploadDto {
    id: number;
    idParent: number;
    fechaAlta: string;
    fechaBaja: string;
    idUserSistemaAlta: number;
    idUserSistemaBaja: number;
    nombreArchivo: string;
    idMongo: string;
    @Type(() => TcTipoDocumento)
    tcTipoDocumento: TcTipoDocumento;
    @Type(() => DocCoordenadaDto)
    docCoordenadaDto: DocCoordenadaDto;
    @Type(() => TdUsuario)
    tdUsuarioAlta: TdUsuario;
    @Type(() => TdUsuario)
    tdUsuarioBaja: TdUsuario;
    idTipoDocumento: number;
    bFile : number[];
    ftype: string;
    fsize: number;
    calculosize: string;
    count:number
}
