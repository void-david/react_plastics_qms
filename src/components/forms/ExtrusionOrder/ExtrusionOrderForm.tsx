import { useState } from 'react';
import Button from '../../common/Button';
import { useLanguage } from '../../../hooks/useLanguage';
import { createEmptyExtrusionOrder } from '../../../types';
import { validateExtrusionOrder, isFormValid } from '../../../utils/validation';
import type { ExtrusionOrder, ExtrusionOrderErrors } from '../../../types';

// Section Components
import HeaderSection from './HeaderSection';
import ExtrusionDetailsSection from './ExtrusionDetailsSection';
import MaterialsSection from './MaterialsSection';
import ImpressionSection from './ImpressionSection';
import BolseoSection from './BolseoSection';
import ExtrusionParametersSection from './ExtrusionParametersSection';
import PackagingSection from './PackagingSection';
import QualityControlSection from './QualityControlSection';

interface ExtrusionOrderFormProps {
  onSubmit?: (data: ExtrusionOrder) => void;
  onCancel?: () => void;
  initialData?: ExtrusionOrder;
}

const ExtrusionOrderForm = ({
  onSubmit,
  onCancel,
  initialData,
}: ExtrusionOrderFormProps) => {
  const { language, toggleLanguage, t } = useLanguage();
  const [formData, setFormData] = useState<ExtrusionOrder>(
    initialData || createEmptyExtrusionOrder()
  );
  const [errors, setErrors] = useState<ExtrusionOrderErrors>({});

  const handleFieldChange = (field: keyof ExtrusionOrder, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error for this field if it exists
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const validationErrors = validateExtrusionOrder(formData);
    setErrors(validationErrors);

    if (isFormValid(validationErrors)) {
      console.log('Form submitted successfully:', formData);
      onSubmit?.(formData);
    } else {
      console.log('Form has validation errors:', validationErrors);
    }
  };

  const handleReset = () => {
    setFormData(createEmptyExtrusionOrder());
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-3xl font-bold text-slate-800">
              {t('formTitle')}
            </h1>
            <div className="flex gap-3">
              <Button
                type="button"
                onClick={toggleLanguage}
                className="bg-slate-600 hover:bg-slate-700"
              >
                {language === 'es' ? 'English' : 'Español'}
              </Button>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Header Information */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <HeaderSection data={formData} onChange={handleFieldChange} t={t} />
          </div>

          {/* Extrusion Details */}
          <ExtrusionDetailsSection data={formData} onChange={handleFieldChange} t={t} />

          {/* Materials */}
          <MaterialsSection data={formData} onChange={handleFieldChange} t={t} />

          {/* Impression */}
          <ImpressionSection data={formData} onChange={handleFieldChange} t={t} />

          {/* Bolseo */}
          <BolseoSection data={formData} onChange={handleFieldChange} t={t} />

          {/* Extrusion Parameters */}
          <ExtrusionParametersSection
            data={formData}
            onChange={handleFieldChange}
            t={t}
          />

          {/* Packaging */}
          <PackagingSection data={formData} onChange={handleFieldChange} t={t} />

          {/* Quality Control */}
          <QualityControlSection data={formData} onChange={handleFieldChange} t={t} />

          {/* Error Display */}
          {Object.keys(errors).length > 0 && (
            <div className="bg-red-50 border border-red-300 rounded-lg p-4">
              <h4 className="text-red-800 font-semibold mb-2">
                Por favor corrija los siguientes errores:
              </h4>
              <ul className="list-disc list-inside text-red-700 text-sm">
                {Object.entries(errors).map(([field, error]) => (
                  <li key={field}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-4 justify-end">
              <Button
                type="button"
                onClick={handleReset}
                className="bg-slate-500 hover:bg-slate-600"
              >
                Limpiar Formulario
              </Button>
              {onCancel && (
                <Button
                  type="button"
                  onClick={onCancel}
                  className="bg-red-500 hover:bg-red-600"
                >
                  {t('cancel')}
                </Button>
              )}
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                {t('submit')}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExtrusionOrderForm;
