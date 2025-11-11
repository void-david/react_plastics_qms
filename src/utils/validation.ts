import type { ExtrusionOrder, ExtrusionOrderErrors } from '../types';

export const validateExtrusionOrder = (data: ExtrusionOrder): ExtrusionOrderErrors => {
  const errors: ExtrusionOrderErrors = {};

  // Header validation
  if (!data.client.trim()) {
    errors.client = 'Client is required';
  }

  if (!data.date) {
    errors.date = 'Date is required';
  }

  if (!data.deliveryDate) {
    errors.deliveryDate = 'Delivery date is required';
  }

  // Extrusion details validation
  if (data.extruir <= 0) {
    errors.extruir = 'Extrusion weight must be greater than 0';
  }

  if (data.medida <= 0) {
    errors.medida = 'Measurement must be greater than 0';
  }

  if (data.calibre <= 0) {
    errors.calibre = 'Caliber must be greater than 0';
  }

  // Materials validation
  const totalPercentage = data.llConAditivo.percentage1 +
                         data.llConAditivo.percentage2 +
                         data.pigmentPercentage +
                         data.additives.reduce((sum, add) => sum + add.percentage, 0);

  if (totalPercentage > 100) {
    errors.materials = 'Total material percentage cannot exceed 100%';
  }

  return errors;
};

export const isFormValid = (errors: ExtrusionOrderErrors): boolean => {
  return Object.keys(errors).length === 0;
};
