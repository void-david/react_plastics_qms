import Input from '../../common/Input';
import Checkbox from '../../common/Checkbox';
import type { ExtrusionOrder } from '../../../types';

interface HeaderSectionProps {
  data: ExtrusionOrder;
  onChange: (field: keyof ExtrusionOrder, value: any) => void;
  t: (key: string) => string;
}

const HeaderSection = ({ data, onChange, t }: HeaderSectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Input
        label={t('fecha')}
        type="date"
        value={data.date}
        onChange={(e) => onChange('date', e.target.value)}
      />
      <Input
        label={t('entrega')}
        type="date"
        value={data.deliveryDate}
        onChange={(e) => onChange('deliveryDate', e.target.value)}
      />
      <Input
        label={t('foNumber')}
        type="text"
        value={data.foNumber}
        onChange={(e) => onChange('foNumber', e.target.value)}
        placeholder="FO-PRO026"
      />
      <Input
        label={t('extNumber')}
        type="text"
        value={data.extNumber}
        onChange={(e) => onChange('extNumber', e.target.value)}
        placeholder="10"
      />
      <Input
        label={t('dado')}
        type="text"
        value={data.dado}
        onChange={(e) => onChange('dado', e.target.value)}
        placeholder="8.50"
      />
      <Input
        label={t('bur')}
        type="text"
        value={data.bur}
        onChange={(e) => onChange('bur', e.target.value)}
        placeholder="3.54"
      />
      <Input
        label={t('ordenDeFab')}
        type="text"
        value={data.orderDeFab}
        onChange={(e) => onChange('orderDeFab', e.target.value)}
        placeholder="13063-1"
      />
      <Input
        label={t('cliente')}
        type="text"
        value={data.client}
        onChange={(e) => onChange('client', e.target.value)}
        placeholder="CAFINCO"
      />
      <Input
        label={t('clave')}
        type="text"
        value={data.key}
        onChange={(e) => onChange('key', e.target.value)}
        placeholder="EPB-445"
      />
      <div className="flex items-center gap-4">
        <Checkbox
          label={t('entregaPt')}
          checked={data.deliveryType === 'pt'}
          onChange={(e) => onChange('deliveryType', e.target.checked ? 'pt' : 'other')}
        />
      </div>
      <Input
        label={t('claveCoPosip')}
        type="text"
        value={data.claveCoPosip}
        onChange={(e) => onChange('claveCoPosip', e.target.value)}
      />
    </div>
  );
};

export default HeaderSection;
