export type Language = 'es' | 'en';

export const translations = {
  es: {
    // Form Title
    formTitle: 'ORDEN DE EXTRUSIÓN',

    // Header Section
    fecha: 'Fecha',
    entrega: 'Entrega',
    foNumber: 'FO-PRO',
    extNumber: 'Ext.#',
    dado: 'Dado',
    bur: 'BUR',
    ordenDeFab: 'Orden De Fab',
    cliente: 'Cliente',
    clave: 'Clave',

    // Extrusion Section
    extrusion: 'EXTRUSIÓN',
    entregaPt: 'Entrega Pt',
    claveCoPosip: 'CLAVE COPOSIP',
    extruir: 'Extruir',
    kg: 'Kg',
    bobina: 'Bobina',
    medida: 'Medida',
    calibre: 'Calibre',
    bolseo: 'Bolseo',
    impresion: 'Impresión QC',
    tubular: 'Tubular',
    rollo: 'Rollo',

    // Materials Section
    llConAditivo: 'LL Con Aditivo',
    pigmento: 'PIGMENTO',
    natural: 'Natural',
    aditivos: 'ADITIVOS',

    // Roll Details
    detallesExtrusion: 'Detalles de Extrusión',
    pesoXRollo: 'Peso x Rollo',
    mtsXRollo: 'Mts x Rollo',
    noDeRollos: 'No. de Rollos',

    // Gramaje
    gramaje: 'GRAMAJE',
    largo: 'largo',
    ancho: 'ancho',
    min: 'MIN',
    max: 'MAX',
    gr: 'Gr',

    // Impression
    impresionTitle: 'IMPRESIÓN',
    caras: 'Caras',
    cara: 'Cara',
    identificacion: 'Identificación',
    tintasCara1: 'Tintas Cara 1',
    tintasCara2: 'Tintas Cara 2',

    // Bolseo Details
    bolseoTitle: 'BOLSEO',
    bolseoPor: 'Bolseo Por',
    pieza: 'PIEZA',
    kilos: 'KILOS',
    totalDe: 'Total de',
    bolsas: 'Bolsas',
    bolsasPor: 'Bolsas por',
    totalDeRollos: 'Total de Rollos',
    kgXPaq: 'KG. x Paq',
    conBobina: 'Con Bobina=',
    pesoPor: 'Peso Por',
    kgs: 'Kgs.',

    // Extrusion Parameters
    parametrosExtrusion: 'PARÁMETROS DE EXTRUSIÓN #',
    temperatura: 'Temperatura',
    zona: 'Zona',
    motorPrincipal: 'Motor Principal',
    fuelladores: 'Fuelladores',
    nipJalado: 'NIP Jalado Hz',
    tempBarraSello: 'Temp. Barra Sello',
    dadoLabel: 'Dado',
    cambiaM: 'Cambia M.',
    tiempoSello: 'Tiempo Sello',
    seg: 'Seg.',
    embobinador: 'Embobinador',
    hz: 'Hz',
    amp: 'Amp.',

    // Packaging
    empaque: 'EMPAQUE',
    bulto: 'BULTO DE',
    lote: 'LOTE',
    etiqueta: 'ETIQUETA',
    rolloBolseo: 'ROLLO BOLSEO',

    // Quality Control
    observaciones: 'OBSERVACIONES',
    prueba: 'PRUEBA',
    cuidarMedida: 'CUIDAR MEDIDA, CALIBRE, BUEN EMBOBINADO',
    selloGrueso: 'SELLO GRUESO (INDUSTRIAL)',
    selloFondo: 'SELLO FONDO',

    // Buttons
    submit: 'Enviar Orden',
    cancel: 'Cancelar',
    save: 'Guardar',

    // Validation Messages
    required: 'Este campo es requerido',
    invalidNumber: 'Debe ser un número válido',
    invalidDate: 'Debe ser una fecha válida',
  },
  en: {
    // Form Title
    formTitle: 'EXTRUSION ORDER',

    // Header Section
    fecha: 'Date',
    entrega: 'Delivery',
    foNumber: 'FO-PRO',
    extNumber: 'Ext.#',
    dado: 'Die',
    bur: 'BUR',
    ordenDeFab: 'Fab Order',
    cliente: 'Client',
    clave: 'Key',

    // Extrusion Section
    extrusion: 'EXTRUSION',
    entregaPt: 'Delivery Pt',
    claveCoPosip: 'COPOSIP KEY',
    extruir: 'Extrude',
    kg: 'Kg',
    bobina: 'Bobbin',
    medida: 'Measurement',
    calibre: 'Caliber',
    bolseo: 'Bagging',
    impresion: 'Printing QC',
    tubular: 'Tubular',
    rollo: 'Roll',

    // Materials Section
    llConAditivo: 'LL With Additive',
    pigmento: 'PIGMENT',
    natural: 'Natural',
    aditivos: 'ADDITIVES',

    // Roll Details
    detallesExtrusion: 'Extrusion Details',
    pesoXRollo: 'Weight x Roll',
    mtsXRollo: 'Mts x Roll',
    noDeRollos: 'No. of Rolls',

    // Gramaje
    gramaje: 'WEIGHT',
    largo: 'length',
    ancho: 'width',
    min: 'MIN',
    max: 'MAX',
    gr: 'Gr',

    // Impression
    impresionTitle: 'PRINTING',
    caras: 'Sides',
    cara: 'Side',
    identificacion: 'Identification',
    tintasCara1: 'Inks Side 1',
    tintasCara2: 'Inks Side 2',

    // Bolseo Details
    bolseoTitle: 'BAGGING',
    bolseoPor: 'Bagging By',
    pieza: 'PIECE',
    kilos: 'KILOS',
    totalDe: 'Total of',
    bolsas: 'Bags',
    bolsasPor: 'Bags per',
    totalDeRollos: 'Total Rolls',
    kgXPaq: 'KG. x Pack',
    conBobina: 'With Bobbin=',
    pesoPor: 'Weight Per',
    kgs: 'Kgs.',

    // Extrusion Parameters
    parametrosExtrusion: 'EXTRUSION PARAMETERS #',
    temperatura: 'Temperature',
    zona: 'Zone',
    motorPrincipal: 'Main Motor',
    fuelladores: 'Blowers',
    nipJalado: 'NIP Pull Hz',
    tempBarraSello: 'Sealing Bar Temp.',
    dadoLabel: 'Die',
    cambiaM: 'Change M.',
    tiempoSello: 'Sealing Time',
    seg: 'Sec.',
    embobinador: 'Winder',
    hz: 'Hz',
    amp: 'Amp.',

    // Packaging
    empaque: 'PACKAGING',
    bulto: 'BUNDLE OF',
    lote: 'BATCH',
    etiqueta: 'LABEL',
    rolloBolseo: 'ROLL BAGGING',

    // Quality Control
    observaciones: 'OBSERVATIONS',
    prueba: 'TEST',
    cuidarMedida: 'CHECK MEASUREMENT, CALIBER, GOOD WINDING',
    selloGrueso: 'THICK SEAL (INDUSTRIAL)',
    selloFondo: 'BOTTOM SEAL',

    // Buttons
    submit: 'Submit Order',
    cancel: 'Cancel',
    save: 'Save',

    // Validation Messages
    required: 'This field is required',
    invalidNumber: 'Must be a valid number',
    invalidDate: 'Must be a valid date',
  },
};

export const getTranslation = (lang: Language, key: keyof typeof translations.es): string => {
  return translations[lang][key] || key;
};
