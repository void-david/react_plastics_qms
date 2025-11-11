// Main Extrusion Order interface
export interface ExtrusionOrder {
  // Header Information
  orderNumber: string;
  date: string;
  deliveryDate: string;
  foNumber: string;
  extNumber: string;
  client: string;
  key: string;
  dado: string;
  bur: string;
  orderDeFab: string;

  // Extrusion Details
  deliveryType: 'pt' | 'other';
  claveCoPosip: string;
  extruir: number; // kg
  bobina: string;
  medida: number;
  calibre: number;
  productType: 'tubular' | 'rollo' | 'other';
  bolseoEnabled: boolean;
  impresionQC: boolean;

  // Materials
  llConAditivo: {
    percentage1: number;
    kg1: number;
    percentage2: number;
    kg2: number;
  };
  pigment: string;
  pigmentPercentage: number;
  additives: AdditiveEntry[];

  // Roll Details
  pesoXRollo: number; // kg
  mtsXRollo: number;
  noDeRollos: number;

  // Gramaje (Weight specifications)
  gramaje: {
    largo: number;
    ancho: number;
    min: number;
    max: number;
  };

  // Impression
  impression: {
    enabled: boolean;
    sides: 1 | 2;
    identificacion: string;
    tintasCara1: string;
    tintasCara2: string;
  };

  // Bolseo (Bag) Details
  bolseo: {
    enabled: boolean;
    type: 'pieza' | 'kilos';
    medida: number;
    multiplier: number;
    totalBolsas: number;
    bolsasPorRollo: number;
    totalRollos: number;
    kgXPaq: number;
    conBobina: number;
    pesoPorBolsas: number;
  };

  // Extrusion Parameters
  parameters: {
    extNumber: string;
    temperatures: TemperatureZones;
    motorPrincipal: MotorSettings;
    fuelladores: FuelladoresSettings;
    nip: NIPSettings;
    tempBarraSello: TemperatureSettings;
    tiempoSello: number; // seconds
    embobinador: EmbobinadorSettings;
  };

  // Packaging
  packaging: {
    bultoWeight: number; // kg
    lote: string;
    etiqueta: string;
    rolloType: 'rollo' | 'bolseo';
  };

  // Quality Control
  qualityControl: {
    observaciones: string;
    pruebas: QualityTest[];
  };
}

export interface AdditiveEntry {
  name: string;
  percentage: number;
}

export interface TemperatureZones {
  zona1: number;
  zona2: number;
  zona3: number;
  zona4: number;
  zona5: number;
  zona6: number;
  cambiaM: number;
  dado8: number;
  dado9: number;
  dado10: number;
}

export interface MotorSettings {
  hz: number;
  amp: number;
}

export interface FuelladoresSettings {
  value: number;
}

export interface NIPSettings {
  jaladoHz: number;
  hz: number;
}

export interface TemperatureSettings {
  temperature: number;
}

export interface EmbobinadorSettings {
  hz: number;
}

export interface QualityTest {
  name: string;
  passed: boolean;
  notes: string;
}

// Form validation errors
export interface ExtrusionOrderErrors {
  [key: string]: string | undefined;
}

// Initial empty form data
export const createEmptyExtrusionOrder = (): ExtrusionOrder => ({
  orderNumber: '',
  date: new Date().toISOString().split('T')[0],
  deliveryDate: '',
  foNumber: '',
  extNumber: '',
  client: '',
  key: '',
  dado: '',
  bur: '',
  orderDeFab: '',
  deliveryType: 'pt',
  claveCoPosip: '',
  extruir: 0,
  bobina: 'NaN',
  medida: 0,
  calibre: 0,
  productType: 'tubular',
  bolseoEnabled: false,
  impresionQC: false,
  llConAditivo: {
    percentage1: 0,
    kg1: 0,
    percentage2: 0,
    kg2: 0,
  },
  pigment: 'Natural',
  pigmentPercentage: 0,
  additives: [],
  pesoXRollo: 0,
  mtsXRollo: 0,
  noDeRollos: 0,
  gramaje: {
    largo: 0,
    ancho: 0,
    min: 0,
    max: 0,
  },
  impression: {
    enabled: false,
    sides: 1,
    identificacion: '',
    tintasCara1: '',
    tintasCara2: '',
  },
  bolseo: {
    enabled: false,
    type: 'pieza',
    medida: 0,
    multiplier: 0,
    totalBolsas: 0,
    bolsasPorRollo: 0,
    totalRollos: 0,
    kgXPaq: 0,
    conBobina: 0,
    pesoPorBolsas: 0,
  },
  parameters: {
    extNumber: '',
    temperatures: {
      zona1: 0,
      zona2: 0,
      zona3: 0,
      zona4: 0,
      zona5: 0,
      zona6: 0,
      cambiaM: 0,
      dado8: 0,
      dado9: 0,
      dado10: 0,
    },
    motorPrincipal: {
      hz: 0,
      amp: 0,
    },
    fuelladores: {
      value: 0,
    },
    nip: {
      jaladoHz: 0,
      hz: 0,
    },
    tempBarraSello: {
      temperature: 0,
    },
    tiempoSello: 0,
    embobinador: {
      hz: 0,
    },
  },
  packaging: {
    bultoWeight: 10,
    lote: '',
    etiqueta: '',
    rolloType: 'rollo',
  },
  qualityControl: {
    observaciones: '',
    pruebas: [
      { name: 'CUIDAR MEDIDA, CALIBRE, BUEN EMBOBINADO', passed: false, notes: '' },
      { name: 'SELLO GRUESO (INDUSTRIAL)', passed: false, notes: '' },
      { name: 'SELLO FONDO', passed: false, notes: '' },
    ],
  },
});
