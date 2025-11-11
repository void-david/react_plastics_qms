import Input from '../../common/Input';
import Checkbox from '../../common/Checkbox';
import Card from '../../common/Card';
import type { ExtrusionOrder } from '../../../types';

interface BolseoSectionProps {
  data: ExtrusionOrder;
  onChange: (field: keyof ExtrusionOrder, value: any) => void;
  t: (key: string) => string;
}

const BolseoSection = ({ data, onChange, t }: BolseoSectionProps) => {
  return (
    <Card title={t('bolseoTitle')}>
      <div className="space-y-4">
        <Checkbox
          label="Habilitar Bolseo"
          checked={data.bolseo.enabled}
          onChange={(e) =>
            onChange('bolseo', {
              ...data.bolseo,
              enabled: e.target.checked,
            })
          }
        />

        {data.bolseo.enabled && (
          <>
            <div>
              <p className="text-sm font-medium text-slate-700 mb-2">{t('bolseoPor')}:</p>
              <div className="flex gap-4">
                <Checkbox
                  label={t('pieza')}
                  checked={data.bolseo.type === 'pieza'}
                  onChange={(e) =>
                    e.target.checked &&
                    onChange('bolseo', {
                      ...data.bolseo,
                      type: 'pieza',
                    })
                  }
                />
                <Checkbox
                  label={t('kilos')}
                  checked={data.bolseo.type === 'kilos'}
                  onChange={(e) =>
                    e.target.checked &&
                    onChange('bolseo', {
                      ...data.bolseo,
                      type: 'kilos',
                    })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Input
                label={t('medida')}
                type="number"
                value={data.bolseo.medida}
                onChange={(e) =>
                  onChange('bolseo', {
                    ...data.bolseo,
                    medida: parseFloat(e.target.value) || 0,
                  })
                }
                placeholder="60"
              />
              <Input
                label="Multiplicador"
                type="number"
                value={data.bolseo.multiplier}
                onChange={(e) =>
                  onChange('bolseo', {
                    ...data.bolseo,
                    multiplier: parseFloat(e.target.value) || 0,
                  })
                }
                placeholder="100"
              />
              <Input
                label={`${t('totalDe')} ${t('bolsas')}`}
                type="number"
                value={data.bolseo.totalBolsas}
                onChange={(e) =>
                  onChange('bolseo', {
                    ...data.bolseo,
                    totalBolsas: parseInt(e.target.value) || 0,
                  })
                }
              />
              <Input
                label={`${t('bolsasPor')} ${t('rollo')}`}
                type="number"
                value={data.bolseo.bolsasPorRollo}
                onChange={(e) =>
                  onChange('bolseo', {
                    ...data.bolseo,
                    bolsasPorRollo: parseInt(e.target.value) || 0,
                  })
                }
              />
              <Input
                label={t('totalDeRollos')}
                type="number"
                value={data.bolseo.totalRollos}
                onChange={(e) =>
                  onChange('bolseo', {
                    ...data.bolseo,
                    totalRollos: parseInt(e.target.value) || 0,
                  })
                }
              />
              <Input
                label={t('kgXPaq')}
                type="number"
                value={data.bolseo.kgXPaq}
                onChange={(e) =>
                  onChange('bolseo', {
                    ...data.bolseo,
                    kgXPaq: parseFloat(e.target.value) || 0,
                  })
                }
                placeholder="0.00"
              />
              <Input
                label={t('conBobina')}
                type="number"
                value={data.bolseo.conBobina}
                onChange={(e) =>
                  onChange('bolseo', {
                    ...data.bolseo,
                    conBobina: parseFloat(e.target.value) || 0,
                  })
                }
                placeholder="2.40"
              />
              <Input
                label={`${t('pesoPor')} ${t('bolsas')} (${t('kgs')})`}
                type="number"
                value={data.bolseo.pesoPorBolsas}
                onChange={(e) =>
                  onChange('bolseo', {
                    ...data.bolseo,
                    pesoPorBolsas: parseFloat(e.target.value) || 0,
                  })
                }
                placeholder="0.169"
              />
            </div>
          </>
        )}
      </div>
    </Card>
  );
};

export default BolseoSection;
