import Input from '../../common/Input';
import Checkbox from '../../common/Checkbox';
import Card from '../../common/Card';
import type { ExtrusionOrder } from '../../../types';

interface ImpressionSectionProps {
  data: ExtrusionOrder;
  onChange: (field: keyof ExtrusionOrder, value: any) => void;
  t: (key: string) => string;
}

const ImpressionSection = ({ data, onChange, t }: ImpressionSectionProps) => {
  return (
    <Card title={t('impresionTitle')}>
      <div className="space-y-4">
        <Checkbox
          label="Habilitar Impresión"
          checked={data.impression.enabled}
          onChange={(e) =>
            onChange('impression', {
              ...data.impression,
              enabled: e.target.checked,
            })
          }
        />

        {data.impression.enabled && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-slate-700 mb-2">{t('caras')}:</p>
                <div className="flex gap-4">
                  <Checkbox
                    label={`1 ${t('cara')}`}
                    checked={data.impression.sides === 1}
                    onChange={(e) =>
                      e.target.checked &&
                      onChange('impression', {
                        ...data.impression,
                        sides: 1,
                      })
                    }
                  />
                  <Checkbox
                    label={`2 ${t('caras')}`}
                    checked={data.impression.sides === 2}
                    onChange={(e) =>
                      e.target.checked &&
                      onChange('impression', {
                        ...data.impression,
                        sides: 2,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            <Input
              label={t('identificacion')}
              type="text"
              value={data.impression.identificacion}
              onChange={(e) =>
                onChange('impression', {
                  ...data.impression,
                  identificacion: e.target.value,
                })
              }
            />

            <Input
              label={t('tintasCara1')}
              type="text"
              value={data.impression.tintasCara1}
              onChange={(e) =>
                onChange('impression', {
                  ...data.impression,
                  tintasCara1: e.target.value,
                })
              }
            />

            {data.impression.sides === 2 && (
              <Input
                label={t('tintasCara2')}
                type="text"
                value={data.impression.tintasCara2}
                onChange={(e) =>
                  onChange('impression', {
                    ...data.impression,
                    tintasCara2: e.target.value,
                  })
                }
              />
            )}
          </>
        )}
      </div>
    </Card>
  );
};

export default ImpressionSection;
