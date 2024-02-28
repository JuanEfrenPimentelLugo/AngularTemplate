import { factors } from "@turf/turf";

//Proveedor
export const tcProveedorIdType = ['idProveedor', 'descripcion', 'rfc', 'fechaAlta', 'fechaModifica', 'fechaBaja', 'contribuyente', 'categoria'] as const;
type TcProveedorIdType = typeof tcProveedorIdType[number];
export const TcProveedorFieldType: Record<TcProveedorIdType, string> = {
    idProveedor: "pro.id_proveedor",
    descripcion: "pro.descripcion",
    rfc: "pro.rfc",
    fechaAlta: "pro.fecha_alta",
    fechaModifica: "pro.fecha_modifica",
    fechaBaja: "pro.fecha_baja",
    contribuyente: "tpc.descripcion",
    categoria: "tcp.descripcion"
}

//Tipo de obra pública
export const tcTipoObraPublicaIdType = ['idTipoObraPublica', 'descripcion'] as const;
type TcTipoObraPublicaType = typeof tcTipoObraPublicaIdType[number];
export const TcTipoObraPublicaFieldType: Record<TcTipoObraPublicaType, string> = {
    idTipoObraPublica: "id_tipo_obra_publica",
    descripcion: "descripcion"
}

//Rol
export const tcRolIdType = ['idRol', 'descripcion'] as const;
type TcRolType = typeof tcRolIdType[number];
export const TcRolFieldType: Record<TcRolType, string> = {
    idRol: "rol.id_rol",
    descripcion: "rol.descripcion"
}

//Seccion y permiso
export const SeccionPermisoDtoIdType = ['idSeccion', 'seccion', 'url'] as const;
type SeccionPermisoDtoType = typeof SeccionPermisoDtoIdType[number];
export const SeccionPermisoDtoFieldType: Record<SeccionPermisoDtoType, string> = {
    idSeccion: "rec.id_seccion",
    seccion: "rec.seccion",
    url: "rec.url"
}

//Solicitud de combustible
export const tdSolicitudCombustibleIdType = ['solIdSolicitudCombustible', 'areDescripcion', 'periodo', 'estDescripcion'] as const;
type TdSolicitudCombustibleType = typeof tdSolicitudCombustibleIdType[number];
export const TdSolicitudCombustibleFieldType: Record<TdSolicitudCombustibleType, string> = {
    solIdSolicitudCombustible: "sol_id_solicitud_combustible",
    areDescripcion: "tr.descripcion",
    periodo: "tsc.fecha_inicio",
    estDescripcion: "tesc.descripcion"
}

//Solicitud de combustible
export const obraPublicaDtoIdType = ['opuIdObraPublica', 'tadDescripcion', 'opuNumeroContrato', 'opuObjectoContrato', 'opuPorcentajeProgreso', 'opuNumIncidencias'] as const;
type ObraPublicaDtoType = typeof obraPublicaDtoIdType[number];
export const ObraPublicaDtoFieldType: Record<ObraPublicaDtoType, string> = {
    opuIdObraPublica: "opu_id_obra_publica",
    tadDescripcion: "tad_descripcion",
    opuNumeroContrato: "opu_numero_contrato",
    opuObjectoContrato: "opu_objecto_contrato",
    opuPorcentajeProgreso: "opu_porcentaje_progreso",
    opuNumIncidencias: "opu_num_incidencias"
}

//Control vehicular
export const tdControlVehicularIdType = ['idControlVehicular', 'areaResponsable', 'marca', 'modelo', 'nombreMueble', 'nombreResguardatario', 'numeroInventario', 'numeroSerie'] as const;
type TdControlVehicularIdType = typeof tdControlVehicularIdType[number];
export const TdControlVehicularFieldType: Record<TdControlVehicularIdType, string> = {
    idControlVehicular: 'idControlVehicular',
    areaResponsable: '"tdBieneMueble.areaResponsable"',
    marca: '"tdBieneMueble.marca"',
    modelo: '"tdBieneMueble.modelo"',
    nombreMueble: '"tdBieneMueble.nombreMueble"',
    nombreResguardatario: '"tdBieneMueble.nombreResguardatario"',
    numeroInventario: '"tdBieneMueble.numeroInventario"',
    numeroSerie: '"tdBieneMueble.numeroSerie"'
}

//Bitacora de combustible
export const tdBitacoraCombustibleIdType = ['idBitacoraCombustible', 'fechaAlta', 'proveedor', 'tipoCombustible', 'litroCargado', 'costoTotal', 'estatus'] as const;
type TdBitacoraCombustibleIdType = typeof tdBitacoraCombustibleIdType[number];
export const TdBitacoraCombustibleFieldType: Record<TdBitacoraCombustibleIdType, string> = {
    idBitacoraCombustible: 'tbc.id_bitacora_combustible',
    fechaAlta: 'tbc.fecha_alta',
    proveedor: 'tvr.descripcion',
    tipoCombustible: 'tco.descripcion',
    litroCargado: 'tbc.litro_cargado',
    costoTotal: 'tbc.costo_total',
    estatus: 'cin.estatus'
}

//listado documento factura
export const tdFacturaIdType = ['idFactura', 'tcProveedor.descripcion', 'uuid', 'version', 'folio', 'fecha','total','tipoComprobante','areas', 'tdUsuarioAlta.nombre','tcModulo.descripcion'] as const;
type TdFacturaIdType = typeof tdFacturaIdType[number];
export const TdFacturaFieldType: Record<TdFacturaIdType, string> = {
    idFactura: '"idFactura"',
    'tcProveedor.descripcion': '"tcProveedor.descripcion"',
    uuid: 'uuid',
    version: 'version',
    folio: 'folio',
    fecha:'fecha',
    total:'total',
    areas:'areas',
    tipoComprobante:'"tipoComprobante"',
    'tdUsuarioAlta.nombre':'"tdUsuarioAlta.nombre"',
    'tcModulo.descripcion':'"tcModulo.descripcion"'
}

//Listado de detalle de consolidación
export const facConsolidaDetailDtoIdType = ['id', 'folio', 'descripcion', 'estatus', 'fecha', 'areaResponsable', 'importe', 'isChecked'] as const;
type FacConsolidaDetailDtoIdType = typeof facConsolidaDetailDtoIdType[number];
export const FacConsolidaDetailDtoFieldType: Record<FacConsolidaDetailDtoIdType, string> = {
    id: 'id',
    folio: 'folio',
    descripcion: '"descripcion"',
    estatus: '"estatus"',
    fecha: '"fecha"',
    areaResponsable: '"areaResponsable"',
    importe: '"importe"',
    isChecked: '"isChecked"'
}
