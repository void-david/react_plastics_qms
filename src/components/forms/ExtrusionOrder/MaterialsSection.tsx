import Input from '../../common/Input';
import Button from '../../common/Button';
import Card from '../../common/Card';
import type { ExtrusionOrder, AdditiveEntry } from '../../../types';

interface MaterialsSectionProps {
  data: ExtrusionOrder;
  onChange: (field: keyof ExtrusionOrder, value: any) => void;
  t: (key: string) => string;
}

const MaterialsSection = ({ data, onChange, t }: MaterialsSectionProps) => {
  const handleAddAdditive = () => {
    const newAdditive: AdditiveEntry = { name: '', percentage: 0 };
    onChange('additives', [...data.additives, newAdditive]);
  };

  const handleRemoveAdditive = (index: number) => {
    const updatedAdditives = data.additives.filter((_, i) => i !== index);
    onChange('additives', updatedAdditives);
  };

  const handleAdditiveChange = (index: number, field: keyof AdditiveEntry, value: any) => {
    const updatedAdditives = [...data.additives];
    updatedAdditives[index] = { ...updatedAdditives[index], [field]: value };
    onChange('additives', updatedAdditives);
  };

  return (
    <Card title="Materiales">
      <div className="space-y-6">
        {/* LL Con Aditivo */}
        <div>
          <h4 className="text-md font-semibold text-slate-700 mb-3">{t('llConAditivo')}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Input
              label="% 1"
              type="number"
              value={data.llConAditivo.percentage1}
              onChange={(e) =>
                onChange('llConAditivo', {
                  ...data.llConAditivo,
                  percentage1: parseFloat(e.target.value) || 0,
                })
              }
              placeholder="30"
            />
            <Input
              label={`${t('kg')} 1`}
              type="number"
              value={data.llConAditivo.kg1}
              onChange={(e) =>
                onChange('llConAditivo', {
                  ...data.llConAditivo,
                  kg1: parseFloat(e.target.value) || 0,
                })
              }
              placeholder="4.5"
            />
            <Input
              label="% 2"
              type="number"
              value={data.llConAditivo.percentage2}
              onChange={(e) =>
                onChange('llConAditivo', {
                  ...data.llConAditivo,
                  percentage2: parseFloat(e.target.value) || 0,
                })
              }
              placeholder="70"
            />
            <Input
              label={`${t('kg')} 2`}
              type="number"
              value={data.llConAditivo.kg2}
              onChange={(e) =>
                onChange('llConAditivo', {
                  ...data.llConAditivo,
                  kg2: parseFloat(e.target.value) || 0,
                })
              }
              placeholder="10.5"
            />
          </div>
        </div>

        {/* Pigmento */}
        <div>
          <h4 className="text-md font-semibold text-slate-700 mb-3">{t('pigmento')}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Tipo"
              type="text"
              value={data.pigment}
              onChange={(e) => onChange('pigment', e.target.value)}
              placeholder="Natural"
            />
            <Input
              label="%"
              type="number"
              value={data.pigmentPercentage}
              onChange={(e) => onChange('pigmentPercentage', parseFloat(e.target.value) || 0)}
            />
          </div>
        </div>

        {/* Aditivos */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-md font-semibold text-slate-700">{t('aditivos')}</h4>
            <Button
              type="button"
              onClick={handleAddAdditive}
              className="text-sm py-1 px-3"
            >
              + Agregar Aditivo
            </Button>
          </div>
          {data.additives.length > 0 ? (
            <div className="space-y-3">
              {data.additives.map((additive, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-3 border border-slate-200 rounded-md">
                  <Input
                    label="Nombre"
                    type="text"
                    value={additive.name}
                    onChange={(e) => handleAdditiveChange(index, 'name', e.target.value)}
                    placeholder="Nombre del aditivo"
                  />
                  <Input
                    label="%"
                    type="number"
                    value={additive.percentage}
                    onChange={(e) =>
                      handleAdditiveChange(index, 'percentage', parseFloat(e.target.value) || 0)
                    }
                  />
                  <div className="flex items-end">
                    <Button
                      type="button"
                      onClick={() => handleRemoveAdditive(index)}
                      className="bg-red-500 hover:bg-red-600 w-full"
                    >
                      Eliminar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500 italic">No hay aditivos agregados</p>
          )}
        </div>
      </div>
    </Card>
  );
};

export default MaterialsSection;
