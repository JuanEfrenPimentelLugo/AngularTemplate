export const MimeType = {
    MIME_PDF: { value: "application/pdf", extension: "pdf" }
}

export const FileType = {
    MAX_SIZE: { value: parseFloat('10485760') }, //MB
    UN_MB_SIZE: { value: parseFloat('1048576') }
}

export const FileExtensionType = {
    IMG: { value: '.bmp,.gif,.jpg,.tif,.png'}
}

export const PatternType = {
    NUMBER_INTEGER: { value: /[0-9]/ },
    ALPHANUMERIC: { value: /^[a-zA-Z0-9\.]*$/ }
}

export const MensajeValidacionFormType = {
    MEN_REQUERIDO:      { value: "Campo requerido." },
    MEN_LONG_MAX:       { value: "El campo debe tener menos {{maxLength}} caracteres." },
    MEN_FILE_MAX:       { value: "El archivo debe tener menos {{maxSize}}." },
    MEN_IMG_REQUERIDO:  { value: "Imagen requerida." },
    MEN_UBI_REQUERIDO:  { value: "Ubicación requerida." },
    MEN_DUPLICADO:      { value: "Campo duplicado." },
    MEN_EMAIL:          { value: "Dirección de correo electrónico no válida."},
    MEN_ITEM_DUPLICADO: { value: "Registro duplicado." }
}

export const MensajeConfirmacionType = {
    MEN_ELIMINAR: { header: "Mensaje de confirmación de borrado", message: "¿Está seguro que desea eliminar el registro ({{}})?", icon: "pi pi-exclamation-triangle" },
    MEN_ELIMINAR_FAC: { header: "Mensaje de confirmación de borrado", message: "¿Está seguro que desea eliminar el registro ({{}})?, Con esta acción se eliminaran los archivos relacionados y conceptos cargados", icon: "pi pi-exclamation-triangle" },
    MEN_CREAR:    { header: "Mensaje de confirmación de creación", message: "¿Está seguro que desea continuar con la creación del registro ({{}})?", icon: "pi pi-plus" },
    MEN_ENVIAR:    { header: "Mensaje de confirmación de envío", message: "¿Está seguro que desea continuar con el envío de la solicitud ({{}})?", icon: "pi pi-plus" },
    MEN_CANCELAR:    { header: "Mensaje de confirmación de cancelación", message: "¿Está seguro que desea continuar con la cancelación de la solicitud ({{}})?", icon: "pi pi-plus" },
}

export const MensajeToastType = {
    MEN_CAM_PERMISO_DENEGADO: { summary: "Permiso denegado", detail: "No se tiene permiso para acceder a la cámara" },
    MEN_COM_FALTAN_DOCUMENTOS: { summary: "Faltan documentos", detail: "Falta agregar documentos a la solicitud" },
}

export const PermisoType = {
    PER_CONS: { value: "PER_CONS" },
    PER_ALTA: { value: "PER_INSE" },
    PER_EDIC: { value: "PER_MODI" },
    PER_ELIM: { value: "PER_ELIM" },
    PER_VISU: { value: "PER_VISU" },
    PER_DESC: { value: "PER_DESC" },
    PER_ENVI: { value: "PER_ENVI" },
    PER_PROG: { value: "PER_PROG" },
    PER_AUTO: { value: "PER_AUTO" },
    PER_CANC: { value: "PER_CANC" }
}

export const TipoBitacoraType = {
    TNO_INCI: { value: "TNO_INCI" },
    TNO_SUPE: { value: "TNO_SUPE" },
    TNO_INOP: { value: "TNO_INOP" },
    TNO_TERM: { value: "TNO_TERM" }
}

export const EstatusBitacoraType = {
    TEB_ABIE: { value: "TEB_ABIE" },
    TEB_CERR: { value: "TEB_CERR" }
}

export const ModuloType = {
    MOD_DEFAULT: { value: "MOD_DEFAULT" },
    MOD_PROV: { value: "MOD_PROV" },
    MOD_OBPU: { value: "MOD_OBPU" },
    MOD_COMB: { value: "MOD_COMB" }
}

export const SolDocumentoType = {
    DOC_BIT_SEGU: { value: "DOC_BIT_SEGU" },
    DOC_OP:       { value: "DOC_OP" },
    DOC_PRO:      { value: "DOC_PRO" },
    DOC_CO:       { value: "DOC_CO" },
    DOC_CVI:      { value: "DOC_CVI" },
    DOC_CVI_BCOM: { value: "DOC_CVI_BCOM" },
    DOC_CVI_BMAN: { value: "DOC_CVI_BMAN" },
    DOC_FAC:      { value: "DOC_FAC" },
}

export const TipoDocParentType = {
    DOC_BIT_SEGU_GRAL: { value: "TDO_BISE" },
    DOC_OBR_PUBL_GRAL: { value: "TDO_OBPU" },
    DOC_PROV_GRAL: { value: "TDO_PROV" },
    DOC_COM_GRAL:{ value: "TDO_SOCO_OFI"},
    DOC_CVI_GRAL:{ value: "TDO_CVI"},
    DOC_CVI_BCOM_GRAL:{ value: "TDO_CVI_BCOM"},
    DOC_CVI_BMAN_GRAL:{ value: "TDO_CVI_BMAN"},
    DOC_FAC_GRAL:{value: "TDO_FAC"},
    TDO_INV_VEH:{value: "TDO_INV_VEH"},
}

export const TipoDocFacType = {
    TDO_FAC_CFDI: {value: "TDO_FAC_CFDI"},
    TDO_FAC_PDF:  {value: "TDO_FAC_PDF"}
}

export const TipoDocInvVeh = {
    TDO_INV_VEH:{value: "DOC_CARGA_INV"},
}

export const TipoDocumentoType = {
    TDO_BISE_MIN_CIE_EVI: { value: "TDO_BISE_MIN_CIE_EVI" },
    TDO_BISE_IMG_EVI: { value: "TDO_BISE_IMG_EVI" }
}

export const ButtonTooltipType = {
    BTN_NEW: { value: "Nuevo" },
    BTN_NEW_SUB: { value: "Nuevo subnivel" },
    BTN_EDI: { value: "Editar" },
    BTN_DEL: { value: "Eliminar" },
    BTN_PER: { value: "Permiso" },
    BTN_PRO: { value: "Programación" },
    BTN_ENV: { value: "Enviar" },
    BTN_VER: { value: "Ver" },
    BTN_CAN: { value: "Cancelar" },
}

export const EstatusSolCombType = {
    COM_PEND: { value: "COM_PEND"},
    COM_ENVI: { value: "COM_ENVI"},
    COM_ACEP: { value: "COM_ACEP"},
    COM_PROG: { value: "COM_PROG"},
    COM_TERM: { value: "COM_TERM"},
    COM_CANC: { value: "COM_CANC"}
}


export const SemanaType = {
    SEM_DOM: { value: "SEM_DOM"},
    SEM_LUN: { value: "SEM_LUN"},
    SEM_MAR: { value: "SEM_MAR"},
    SEM_MIE: { value: "SEM_MIE"},
    SEM_JUE: { value: "SEM_JUE"},
    SEM_VIE: { value: "SEM_VIE"},
    SEM_SAB: { value: "SEM_SAB"}
}

export const Secciones = {
    SEC_CT:                     { value: "SEC_CT"},
    SEC_CT_PROV:                { value: "SEC_CT_PROV"},
    SEC_CT_PROV_FORM:           { value: "SEC_CT_PROV_FORM"},
    SEC_CT_PROV_LIST:           { value: "SEC_CT_PROV_LIST"},
    SEC_CT_ROL0:                { value: "SEC_CT_ROL0"},
    SEC_CT_ROL0_FORM:           { value: "SEC_CT_ROL0_FORM"},
    SEC_CT_ROL0_LIST:           { value: "SEC_CT_ROL0_LIST"},
    SEC_CT_TIOP:                { value: "SEC_CT_TIOP"},
    SEC_CT_TIOP_FORM:           { value: "SEC_CT_TIOP_FORM"},
    SEC_CT_TIOP_LIST:           { value: "SEC_CT_TIOP_LIST"},
    SEC_OP:                     { value: "SEC_OP"},
    SEC_OP_COOP:                { value: "SEC_OP_COOP"},
    SEC_OP_COOP_BISE_FORM:      { value: "SEC_OP_COOP_BISE_FORM"},
    SEC_OP_COOP_BISE_LIST:      { value: "SEC_OP_COOP_BISE_LIST"},
    SEC_OP_COOP_CONT:           { value: "SEC_OP_COOP_CONT"},
    SEC_OP_COOP_DAGE:           { value: "SEC_OP_COOP_DAGE"},
    SEC_OP_COOP_DEPE:           { value: "SEC_OP_COOP_DEPE"},
    SEC_OP_COOP_DOCU_FORM:      { value: "SEC_OP_COOP_DOCU_FORM"},
    SEC_OP_COOP_DOCU_LIST:      { value: "SEC_OP_COOP_DOCU_LIST"},
    SEC_OP_COOP_LIST:           { value: "SEC_OP_COOP_LIST"},
    SEC_OP_DASH:                { value: "SEC_OP_DASH"},
    SEC_OP_DASH_AVAN:           { value: "SEC_OP_DASH_AVAN"},
    SEC_OP_DASH_CONT:           { value: "SEC_OP_DASH_CONT"},
    SEC_OP_DASH_MAPA:           { value: "SEC_OP_DASH_MAPA"},
    SEC_CV:                     { value: "SEC_CV"},
    SEC_CV_SOCO:                { value: "SEC_CV_SOCO"},
    SEC_CV_SOCO_DOCU_FORM:      { value: "SEC_CV_SOCO_DOCU_FORM"},
    SEC_CV_SOCO_DOCU_LIST:      { value: "SEC_CV_SOCO_DOCU_LIST"},
    SEC_CV_PROG:                { value: "SEC_CV_PROG"},
    SEC_CV_PROG_FORM:           { value: "SEC_CV_PROG_FORM"},
    SEC_CV_PROG_LIST:           { value: "SEC_CV_PROG_LIST"},
    SEC_CV_COVI:                { value: "SEC_CV_COVI"},
    SEC_CV_COVI_LIST:           { value: "SEC_CV_COVI_LIST"},
    SEC_CV_COVI_GRAL:           { value: "SEC_CV_COVI_GRAL"},
    SEC_CV_COVI_DOCU_FORM:      { value: "SEC_CV_COVI_DOCU_FORM"},
    SEC_CV_COVI_DOCU_LIST:      { value: "SEC_CV_COVI_DOCU_LIST"},
    SEC_CV_COVI_BICO_FORM:      { value: "SEC_CV_COVI_BICO_FORM"},
    SEC_CV_COVI_BICO_LIST:      { value: "SEC_CV_COVI_BICO_LIST"},
    SEC_CV_COVI_BIMA_FORM:      { value: "SEC_CV_COVI_BIMA_FORM"},
    SEC_CV_COVI_BIMA_LIST:      { value: "SEC_CV_COVI_BIMA_LIST"},
    SEC_CV_COVI_BIAC_FORM:      { value: "SEC_CV_COVI_BIAC_FORM"},
    SEC_CV_COVI_BIAC_LIST:      { value: "SEC_CV_COVI_BIAC_LIST"},
    SEC_CV_SOCO_LIST:           { value: "SEC_CV_SOCO_LIST"},
    SEC_CV_SOCO_FORM:           { value: "SEC_CV_SOCO_FORM"},
    SEC_CV_SOCO_VEH_LIST:       { value: "SEC_CV_SOCO_VEH_LIST"},
    SEC_CV_ATSC:                { value: "SEC_CV_ATSC"},
    SEC_CV_ATSC_LIST:           { value: "SEC_CV_ATSC_LIST"},
    SEC_CV_INVEH:               { value: "SEC_CV_INVEH"},
    SEC_CV_INVEH_LIST:          { value: "SEC_CV_INVEH_LIST"},
    SEC_CV_INVEH_FORM:          { value: "SEC_CV_INVEH_FORM"},
    SEC_FC:                     { value: "SEC_FC"},
    SEC_FC_FACT:                { value: "SEC_FC_FACT"},
    SEC_FC_FACT_LIST:           { value: "SEC_FC_FACT_LIST"},
    SEC_FC_FACT_STEP_DOC_FORM:  { value: "SEC_FC_FACT_STEP_DOC_FORM"},
    SEC_FC_FACT_STEP_VAL_FORM:  { value: "SEC_FC_FACT_STEP_VAL_FORM"},
    SEC_FC_FACT_STEP_DATA_LIST: { value: "SEC_FC_FACT_STEP_DATA_LIST"},
    SEC_FC_FACT_STEP_FIN_LIST:  { value: "SEC_FC_FACT_STEP_FIN_LIST"},
    SEC_FC_FACT_CONC_FORM:      { value: "SEC_FC_FACT_CONC_FORM"},
    SEC_FC_FACT_CONC_LIST:      { value: "SEC_FC_FACT_CONC_LIST"},
    SEC_FC_FACT_CONS:           { value: "SEC_FC_FACT_CONS"},
    SEC_FC_FACT_CONS_CIER:      { value: "SEC_FC_FACT_CONS_CIER"},

}

