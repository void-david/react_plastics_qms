import Checkbox from '../../common/Checkbox';
import Card from '../../common/Card';
import type { ExtrusionOrder } from '../../../types';

interface QualityControlSectionProps {
  data: ExtrusionOrder;
  onChange: (field: keyof ExtrusionOrder, value: any) => void;
  t: (key: string) => string;
}

const QualityControlSection = ({ data, onChange, t }: QualityControlSectionProps) => {
  const handleTestChange = (index: number, field: 'passed' | 'notes', value: any) => {
    const updatedTests = [...data.qualityControl.pruebas];
    updatedTests[index] = { ...updatedTests[index], [field]: value };
    onChange('qualityControl', {
      ...data.qualityControl,
      pruebas: updatedTests,
    });
  };

  return (
    <Card title={t('prueba')}>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-slate-700 mb-2 block">
            {t('observaciones')}:
          </label>
          <textarea
            className="w-full bg-white border border-slate-300 p-3 rounded-md text-slate-800 focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-shadow min-h-[100px]"
            value={data.qualityControl.observaciones}
            onChange={(e) =>
              onChange('qualityControl', {
                ...data.qualityControl,
                observaciones: e.target.value,
              })
            }
            placeholder="Natural"
          />
        </div>

        <div>
          <h4 className="text-md font-semibold text-slate-700 mb-3">Pruebas de Calidad:</h4>
          <div className="space-y-3">
            {data.qualityControl.pruebas.map((test, index) => (
              <div key={index} className="p-4 border border-slate-200 rounded-md">
                <Checkbox
                  label={test.name}
                  checked={test.passed}
                  onChange={(e) => handleTestChange(index, 'passed', e.target.checked)}
                />
                <textarea
                  className="w-full mt-2 bg-white border border-slate-300 p-2 rounded-md text-slate-800 text-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none transition-shadow"
                  value={test.notes}
                  onChange={(e) => handleTestChange(index, 'notes', e.target.value)}
                  placeholder="Notas adicionales..."
                  rows={2}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default QualityControlSection;
