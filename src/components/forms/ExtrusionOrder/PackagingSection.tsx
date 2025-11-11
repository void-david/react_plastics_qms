import Input from '../../common/Input';
import Card from '../../common/Card';
import type { ExtrusionOrder } from '../../../types';

interface PackagingSectionProps {
  data: ExtrusionOrder;
  onChange: (field: keyof ExtrusionOrder, value: any) => void;
  t: (key: string) => string;
}

const PackagingSection = ({ data, onChange, t }: PackagingSectionProps) => {
  return (
    <Card title={t('empaque')}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label={`${t('bulto')} (${t('kg')})`}
          type="number"
          value={data.packaging.bultoWeight}
          onChange={(e) =>
            onChange('packaging', {
              ...data.packaging,
              bultoWeight: parseFloat(e.target.value) || 0,
            })
          }
          placeholder="10"
        />
        <Input
          label={t('lote')}
          type="text"
          value={data.packaging.lote}
          onChange={(e) =>
            onChange('packaging', {
              ...data.packaging,
              lote: e.target.value,
            })
          }
          placeholder="01/25"
        />
        <Input
          label={t('etiqueta')}
          type="text"
          value={data.packaging.etiqueta}
          onChange={(e) =>
            onChange('packaging', {
              ...data.packaging,
              etiqueta: e.target.value,
            })
          }
        />
        <div>
          <p className="text-sm font-medium text-slate-700 mb-2">Tipo:</p>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rolloType"
                value="rollo"
                checked={data.packaging.rolloType === 'rollo'}
                onChange={(e) =>
                  onChange('packaging', {
                    ...data.packaging,
                    rolloType: e.target.value as 'rollo' | 'bolseo',
                  })
                }
                className="w-4 h-4"
              />
              <span className="text-sm text-slate-700">{t('rollo')}</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rolloType"
                value="bolseo"
                checked={data.packaging.rolloType === 'bolseo'}
                onChange={(e) =>
                  onChange('packaging', {
                    ...data.packaging,
                    rolloType: e.target.value as 'rollo' | 'bolseo',
                  })
                }
                className="w-4 h-4"
              />
              <span className="text-sm text-slate-700">{t('rolloBolseo')}</span>
            </label>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PackagingSection;
