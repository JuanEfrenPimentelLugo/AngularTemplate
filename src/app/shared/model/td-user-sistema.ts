import { Type } from "class-transformer";
import { TcRol } from "./tc-rol";
import { TdUsuario } from "./td-usuario";

export class TdUserSistema {
    idUserSistema: number;
	activo: boolean;
	correoElectronico: string;
	fechaAlta: string;
	password: string;
	pwdChange: string;
	salt: string;
	username: string;
    @Type(() => TcRol)
	tcRol: TcRol;
    @Type(() => TdUsuario)
	tdUsuario: TdUsuario;
}
