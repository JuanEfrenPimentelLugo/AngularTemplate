import { Injectable } from '@angular/core';

@Injectable()
export class Locator{

    // Login
    //public static authAutenticar = '/auth/autenticar';
    public static authAutenticar = '/Users/Authenticate';
    public static authValidaToken = '/auth/valida-token';

    // Reporte
    public static reportGenerar = '/reporte/generar-reporte';
    // Catalogos
    public static catTipoNota = '/catalogo/obtener-tipo-nota';
    public static catTipoBitacoraOp = '/catalogo/obtener-tipo-bitacora-op';
    public static catEstatusBitOp = '/catalogo/obtener-estatus-bit-op';
    public static catTipoAdjudicacion = '/catalogo/obtener-tipo-adjudicacion';
    public static catTipoObraPublica = '/catalogo/obtener-tipo-obra-publica';
    public static catTipoFinanciamiento = '/catalogo/obtener-tipo-financiamiento';
    public static catRolesByClave = '/catalogo/obtener-rol/clave/';
    public static catProveedores = '/catalogo/obtener-proveedor';
    public static catTipoDocumento = '/catalogo/obtener-tipo-documento/';
    public static catTipoContribuyente = '/catalogo/obtener-tipo-contribuyente';
    public static catCategoriaProveedor = '/catalogo/obtener-categoria-proveedor';
    public static catAutoCompleteCp = '/catalogo/obtener-autocomplete-cp/';
    public static catEstado = '/catalogo/obtener-estado';
    public static catMunicipio = '/catalogo/obtener-municipio/';
    public static catColonia = '/catalogo/obtener-colonia/';
    public static catDireccion = '/catalogo/obtener-direccion/';
    public static catBanco = '/catalogo/obtener-banco/';
    public static catCombustible ='/catalogo/obtener-tipo-combustible/'
    public static catSolCombVehiculo ='/catalogo/obtener-sol-comb-vehiculo/'
    public static catSemana ='/catalogo/obtener-semana/'
    public static catArea ='/catalogo/obtener-area';
    public static catEstatusSolComb='/catalogo/obtener-tipo-estatus-sol-comb';
    public static catModulo = '/catalogo/obtener-modulo';

    // Fletes
    public static fleCapturarSolicitud = '/flete/capturar-solicitud-flete';

    // Obras públicas
    public static obrasPublicas = '/obra-publica/listado';
    public static opuAnaliticaOPPaneadoChart = '/obra-publica/analitica/op-planeado-chart';
    public static opuAnaliticaOPAvance = '/obra-publica/analitica/op-avance';
    public static opuAnaliticaOPMesChart = '/obra-publica/analitica/op-mes-chart';
    public static opuAnaliticaOPMarkerMap = '/obra-publica/analitica/op-marker-map';
    public static opuAgregar = '/obra-publica/agregar';
    public static opuObtener = '/obra-publica/obtener/';
    public static opuEliminar = '/obra-publica/eliminar/';
    public static opuResumen = '/obra-publica/obtener-resumen/';
    public static opuAgregarCoordenadas = '/coordenada-op/agregar';
    public static opuObtenerCoordenadas = '/coordenada-op/obtener/';

    // Usuarios
    public static usuListado = '/usuario/listado';
    public static listrol = '/usuario/listado-rol';


    //Bitácora de seguimient
    public static bitacoraObtener = '/bitacora-seguimiento/obtener/';
    public static bitacoraLista = '/bitacora-seguimiento/listado/';

    //Dato Dependencia
    public static datoDependenciaAgregar = '/dato-dependencia/agregar/';
    public static datoDependenciaObtener = '/dato-dependencia/obtener/';

    //Dato COntratista
    public static datoContratistaAgregar = '/dato-contratista/agregar/';
    public static datoContratistaObtener = '/dato-contratista/obtener/';

    //Bitácora de seguimient
    public static bitacoraSegHistListado = '/bitacora-seguimiento-hist/listado/';
    public static bitacoraAgergar = '/bitacora-seguimiento/agregar/';

    //Documentos
    public static documentoListado = '/documento/listado/';
    public static documentoEliminar = '/documento/eliminar/';
    public static documentoAgergar = '/documento/agregar/';
    public static documentoDescarga = '/documento/descarga/';

    //Proveedor
    public static proListado = '/proveedor/listado/';
    public static proEliminar = '/proveedor/eliminar/';
    public static proAgregar = '/proveedor/agregar/';
    public static proObtener = '/proveedor/obtener/';
    public static proFindRfc = '/proveedor/find-rfc/';

    //Proveedor dato gral
    public static pdgObtener = '/proveedor-dato-gral/obtener/';
    public static pdgAgregar = '/proveedor-dato-gral/agregar/';

    //Proveedor cuenta contable
    public static pctListado = '/proveedor-cta/listado/';
    public static pctAgregar = '/proveedor-cta/agregar/';
    public static pctEliminar = '/proveedor-cta/eliminar/';

    //Proveedor - clasificación
    public static pclAgregar = '/rel-categoria-proveedor/agregar/';
    public static pclObtener = '/rel-categoria-proveedor/obtener/';
    public static pclFindProveedor = '/rel-categoria-proveedor/find-rel-categoria/';


    //Tipo de obra pública
    public static topListado = '/tipo-obra-publica/listado/';
    public static topEliminar = '/tipo-obra-publica/eliminar/';
    public static topAgergar = '/tipo-obra-publica/agregar/';
    public static topFindDescripcion = '/tipo-obra-publica/find-descripcion/';
    public static topObtener = '/tipo-obra-publica/obtener/';

    //Rol
    public static rolListadoTree = '/rol/listado-tree/';
    public static rolEliminar = '/rol/eliminar/';
    public static rolAgergar = '/rol/agregar/';
    public static rolFindDescripcion = '/rol/find-descripcion/';
    public static rolFindClave = '/rol/find-clave/';
    public static rolObtener = '/rol/obtener/';

    //Seccion permiso
    public static sepListado = '/seccion-permiso/listado/';
    public static sepEliminar = '/seccion-permiso/eliminar-seguridad/';
    public static sepAgregarSeguridad = '/seccion-permiso/agregar-seguridad/';
    public static sepObtenerSeguridad = '/seccion-permiso/obtener-seguridad/';

    //Seccion
    public static secObtenerTree = '/seccion/obtener-tree/';
    public static secListadoTreeNode = '/seccion/listado-tree-node/';

    //Permisos
    public static permisos = '/seccion-permiso/obtener-permisos/';

    //Menu
    public static menObtenerTreeMenu = '/seccion/listado-tree-menu/';
    public static menListadoCatalogo = '/seccion/listado-catalogo/';

    //Combustible
    public static solCombustibleResumenList = '/solicitud-combustible/listado/';
    public static solCombustibleAgregar = '/solicitud-combustible/agregar-solicitud/';
    public static solCombustibleObtener = '/solicitud-combustible/obtener/';
    public static solCombustibleEliminar = '/solicitud-combustible/eliminar-solicitud/';
    public static solCombVehiculoEliminar = '/vehiculos-solicitud/eliminar-vehiculo/';
    public static solCombVehiculoInsertarEstatus = '/vehiculos-solicitud/agregar-vehiculo-estatus/';
    public static solCombustibleEnviar = '/solicitud-combustible/enviar/';
    public static solCombustibleAceptar = '/solicitud-combustible/aceptar/';
    public static solCombustibleCancelar = '/solicitud-combustible/cancelar/';
    public static solCombustibleExiste = '/solicitud-combustible/existe';

    //Inventario - Vehículos
    public static vehObtener = '/vehiculos/obtener/';
    public static vehSolicitud = '/vehiculos-solicitud/obtener/';

    //Programación
    public static pcoEliminar = '/programacion-comb/eliminar/';
    public static pcoAgregar = '/programacion-comb/agregar/';
    public static pcoObtener = '/programacion-comb/obtener/';
    public static pcoListadoSemana = '/programacion-comb/listado-semana/';
    public static pcoFindRegistro = '/programacion-comb/find-registro/';

    //Cronograma
    public static pcoListadoEventoSol = '/programacion-comb/listado-evento-solicitud/';

    //Control vehicular
    public static covListado = '/control-vehicular/listado/';
    public static covObtener = '/control-vehicular/obtener/';
    public static covAgergar = '/control-vehicular/agregar/';
    public static covCrear = '/control-vehicular/crear/';

    //Bitácora de combustible
    public static bicObtener = '/bitacora-combustible/obtener/';
    public static bicLista = '/bitacora-combustible/listado/';
    public static bicAgergar = '/bitacora-combustible/agregar/';
    public static bicCombHistListado = '/bitacora-combustible-hist/listado/';

    //Facturas
    public static facDocumentoAgergar = '/factura/documento/agregar/';
    public static facDocumentoValidar = '/factura/documento/validar/';
    public static facDocumentoData = '/factura/documento/data/';
    public static facObtener = '/factura/obtener/'
    public static facConcListado = '/factura/coneptos/listado/';
    public static facConcObtener = "/factura/concepto/obtener/"
    public static facConcAgregar = "/factura/concepto/agregar/"
    public static facConcEliminar = "/factura/concepto/eliminar/"
    public static facListado = '/factura/listado/';
    public static facEliminar = '/factura/eliminar/';

    //Factura consolidada
    public static fanObtener = '/factura-consolidada/obtener/';
    public static fanAgergar = '/factura-consolidada/agregar/';
    public static fanGenerar = '/factura-consolidada/generar/';
    public static fanBorrar = '/factura-consolidada/eliminar/';
    public static fanCierre = '/factura-consolidada/cierre/';
    public static fanListado = '/factura-consolidada/listado/';
    public static fanUpdateConsolida = '/factura-consolidada/actualizar-consolida/';
    public static fanResumenConsolida = '/factura-consolidada/resumen-consolida/';
}
