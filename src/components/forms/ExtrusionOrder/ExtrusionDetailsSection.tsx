import Input from '../../common/Input';
import Checkbox from '../../common/Checkbox';
import Card from '../../common/Card';
import type { ExtrusionOrder } from '../../../types';

interface ExtrusionDetailsSectionProps {
  data: ExtrusionOrder;
  onChange: (field: keyof ExtrusionOrder, value: any) => void;
  t: (key: string) => string;
}

const ExtrusionDetailsSection = ({ data, onChange, t }: ExtrusionDetailsSectionProps) => {
  return (
    <Card title={t('extrusion')}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Input
          label={`${t('extruir')} (${t('kg')})`}
          type="number"
          value={data.extruir}
          onChange={(e) => onChange('extruir', parseFloat(e.target.value) || 0)}
          placeholder="15"
        />
        <Input
          label={t('bobina')}
          type="text"
          value={data.bobina}
          onChange={(e) => onChange('bobina', e.target.value)}
          placeholder="NaN"
        />
        <Input
          label={t('medida')}
          type="number"
          value={data.medida}
          onChange={(e) => onChange('medida', parseFloat(e.target.value) || 0)}
          placeholder="60"
        />
        <Input
          label={t('calibre')}
          type="number"
          value={data.calibre}
          onChange={(e) => onChange('calibre', parseFloat(e.target.value) || 0)}
          placeholder="600"
        />

        <div className="col-span-full">
          <p className="text-sm font-medium text-slate-700 mb-2">Tipo de Producto:</p>
          <div className="flex flex-wrap gap-4">
            <Checkbox
              label={t('tubular')}
              checked={data.productType === 'tubular'}
              onChange={(e) => e.target.checked && onChange('productType', 'tubular')}
            />
            <Checkbox
              label={t('rollo')}
              checked={data.productType === 'rollo'}
              onChange={(e) => e.target.checked && onChange('productType', 'rollo')}
            />
            <Checkbox
              label={t('bolseo')}
              checked={data.bolseoEnabled}
              onChange={(e) => onChange('bolseoEnabled', e.target.checked)}
            />
            <Checkbox
              label={t('impresion')}
              checked={data.impresionQC}
              onChange={(e) => onChange('impresionQC', e.target.checked)}
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-md font-semibold text-slate-700 mb-3">{t('detallesExtrusion')}</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label={`${t('pesoXRollo')} (${t('kg')})`}
            type="number"
            value={data.pesoXRollo}
            onChange={(e) => onChange('pesoXRollo', parseFloat(e.target.value) || 0)}
          />
          <Input
            label={t('mtsXRollo')}
            type="number"
            value={data.mtsXRollo}
            onChange={(e) => onChange('mtsXRollo', parseFloat(e.target.value) || 0)}
          />
          <Input
            label={t('noDeRollos')}
            type="number"
            value={data.noDeRollos}
            onChange={(e) => onChange('noDeRollos', parseInt(e.target.value) || 0)}
          />
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-md font-semibold text-slate-700 mb-3">{t('gramaje')}</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Input
            label={`${t('largo')} (cm)`}
            type="number"
            value={data.gramaje.largo}
            onChange={(e) =>
              onChange('gramaje', {
                ...data.gramaje,
                largo: parseFloat(e.target.value) || 0,
              })
            }
            placeholder="10"
          />
          <Input
            label={`${t('ancho')} (cm)`}
            type="number"
            value={data.gramaje.ancho}
            onChange={(e) =>
              onChange('gramaje', {
                ...data.gramaje,
                ancho: parseFloat(e.target.value) || 0,
              })
            }
            placeholder="10"
          />
          <Input
            label={`${t('min')} (${t('gr')})`}
            type="number"
            value={data.gramaje.min}
            onChange={(e) =>
              onChange('gramaje', {
                ...data.gramaje,
                min: parseFloat(e.target.value) || 0,
              })
            }
            placeholder="16.24"
          />
          <Input
            label={`${t('max')} (${t('gr')})`}
            type="number"
            value={data.gramaje.max}
            onChange={(e) =>
              onChange('gramaje', {
                ...data.gramaje,
                max: parseFloat(e.target.value) || 0,
              })
            }
            placeholder="17.60"
          />
        </div>
      </div>
    </Card>
  );
};

export default ExtrusionDetailsSection;
