import Input from '../../common/Input';
import Card from '../../common/Card';
import type { ExtrusionOrder } from '../../../types';

interface ExtrusionParametersSectionProps {
  data: ExtrusionOrder;
  onChange: (field: keyof ExtrusionOrder, value: any) => void;
  t: (key: string) => string;
}

const ExtrusionParametersSection = ({ data, onChange, t }: ExtrusionParametersSectionProps) => {
  return (
    <Card title={`${t('parametrosExtrusion')} ${data.parameters.extNumber || ''}`}>
      <div className="space-y-6">
        {/* Temperature Zones */}
        <div>
          <h4 className="text-md font-semibold text-slate-700 mb-3">{t('temperatura')}</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[1, 2, 3, 4, 5, 6].map((zone) => (
              <Input
                key={zone}
                label={`${t('zona')} ${zone} (°C)`}
                type="number"
                value={data.parameters.temperatures[`zona${zone}` as keyof typeof data.parameters.temperatures]}
                onChange={(e) =>
                  onChange('parameters', {
                    ...data.parameters,
                    temperatures: {
                      ...data.parameters.temperatures,
                      [`zona${zone}`]: parseFloat(e.target.value) || 0,
                    },
                  })
                }
              />
            ))}
          </div>
        </div>

        {/* Dado temperatures */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Input
            label={`${t('cambiaM')} (°C)`}
            type="number"
            value={data.parameters.temperatures.cambiaM}
            onChange={(e) =>
              onChange('parameters', {
                ...data.parameters,
                temperatures: {
                  ...data.parameters.temperatures,
                  cambiaM: parseFloat(e.target.value) || 0,
                },
              })
            }
          />
          <Input
            label={`${t('dadoLabel')} 8 (°C)`}
            type="number"
            value={data.parameters.temperatures.dado8}
            onChange={(e) =>
              onChange('parameters', {
                ...data.parameters,
                temperatures: {
                  ...data.parameters.temperatures,
                  dado8: parseFloat(e.target.value) || 0,
                },
              })
            }
          />
          <Input
            label={`${t('dadoLabel')} 9 (°C)`}
            type="number"
            value={data.parameters.temperatures.dado9}
            onChange={(e) =>
              onChange('parameters', {
                ...data.parameters,
                temperatures: {
                  ...data.parameters.temperatures,
                  dado9: parseFloat(e.target.value) || 0,
                },
              })
            }
          />
          <Input
            label={`${t('dadoLabel')} 10 (°C)`}
            type="number"
            value={data.parameters.temperatures.dado10}
            onChange={(e) =>
              onChange('parameters', {
                ...data.parameters,
                temperatures: {
                  ...data.parameters.temperatures,
                  dado10: parseFloat(e.target.value) || 0,
                },
              })
            }
          />
        </div>

        {/* Motor and other parameters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label={`${t('motorPrincipal')} (${t('hz')})`}
            type="number"
            value={data.parameters.motorPrincipal.hz}
            onChange={(e) =>
              onChange('parameters', {
                ...data.parameters,
                motorPrincipal: {
                  ...data.parameters.motorPrincipal,
                  hz: parseFloat(e.target.value) || 0,
                },
              })
            }
          />
          <Input
            label={`${t('motorPrincipal')} (${t('amp')})`}
            type="number"
            value={data.parameters.motorPrincipal.amp}
            onChange={(e) =>
              onChange('parameters', {
                ...data.parameters,
                motorPrincipal: {
                  ...data.parameters.motorPrincipal,
                  amp: parseFloat(e.target.value) || 0,
                },
              })
            }
          />
          <Input
            label={t('fuelladores')}
            type="number"
            value={data.parameters.fuelladores.value}
            onChange={(e) =>
              onChange('parameters', {
                ...data.parameters,
                fuelladores: {
                  value: parseFloat(e.target.value) || 0,
                },
              })
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label={t('nipJalado')}
            type="number"
            value={data.parameters.nip.jaladoHz}
            onChange={(e) =>
              onChange('parameters', {
                ...data.parameters,
                nip: {
                  ...data.parameters.nip,
                  jaladoHz: parseFloat(e.target.value) || 0,
                },
              })
            }
          />
          <Input
            label={`NIP (${t('hz')})`}
            type="number"
            value={data.parameters.nip.hz}
            onChange={(e) =>
              onChange('parameters', {
                ...data.parameters,
                nip: {
                  ...data.parameters.nip,
                  hz: parseFloat(e.target.value) || 0,
                },
              })
            }
          />
          <Input
            label={t('tempBarraSello')}
            type="number"
            value={data.parameters.tempBarraSello.temperature}
            onChange={(e) =>
              onChange('parameters', {
                ...data.parameters,
                tempBarraSello: {
                  temperature: parseFloat(e.target.value) || 0,
                },
              })
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label={`${t('tiempoSello')} (${t('seg')})`}
            type="number"
            value={data.parameters.tiempoSello}
            onChange={(e) =>
              onChange('parameters', {
                ...data.parameters,
                tiempoSello: parseFloat(e.target.value) || 0,
              })
            }
          />
          <Input
            label={`${t('embobinador')} (${t('hz')})`}
            type="number"
            value={data.parameters.embobinador.hz}
            onChange={(e) =>
              onChange('parameters', {
                ...data.parameters,
                embobinador: {
                  hz: parseFloat(e.target.value) || 0,
                },
              })
            }
          />
        </div>
      </div>
    </Card>
  );
};

export default ExtrusionParametersSection;
