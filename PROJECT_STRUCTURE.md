# Project Structure Documentation

## Overview
This is a React TypeScript MVP application for a plastics manufacturing company, featuring an Extrusion Order form based on a real manufacturing document.

## Technology Stack
- **React 19.1.1** - UI Framework
- **TypeScript 5.9.3** - Type Safety
- **Tailwind CSS 4.1.17** - Styling
- **Vite 7.1.7** - Build Tool
- **ESLint** - Code Quality

## Project Structure

```
src/
├── components/
│   ├── common/                    # Reusable UI components
│   │   ├── Button.tsx            # Button with disabled states
│   │   ├── Input.tsx             # Input with label and error support
│   │   ├── Select.tsx            # Select dropdown with validation
│   │   ├── Checkbox.tsx          # Styled checkbox component
│   │   └── Card.tsx              # Card container with optional title
│   │
│   └── forms/
│       ├── Form.tsx              # Legacy form wrapper
│       └── ExtrusionOrder/       # Extrusion Order Form
│           ├── ExtrusionOrderForm.tsx          # Main form component
│           ├── HeaderSection.tsx               # Order header info
│           ├── ExtrusionDetailsSection.tsx     # Extrusion parameters
│           ├── MaterialsSection.tsx            # Materials & additives
│           ├── ImpressionSection.tsx           # Printing settings
│           ├── BolseoSection.tsx               # Bagging details
│           ├── ExtrusionParametersSection.tsx  # Temperature & motors
│           ├── PackagingSection.tsx            # Packaging info
│           └── QualityControlSection.tsx       # QC tests
│
├── pages/
│   ├── LoginPage.tsx             # Simple role selection
│   ├── OperatorDashboard.tsx     # Operator interface with form access
│   └── SupervisorDashboard.tsx   # Supervisor interface (future: review forms)
│
├── types/
│   ├── index.ts                  # Re-exports all types
│   ├── user.types.ts             # User and role types
│   └── extrusion.types.ts        # Extrusion order interfaces
│
├── hooks/
│   └── useLanguage.ts            # Language toggle hook (ES/EN)
│
├── utils/
│   └── validation.ts             # Form validation logic
│
├── constants/
│   └── translations.ts           # Bilingual translations (ES/EN)
│
├── App.tsx                       # Main app with simple routing
└── main.tsx                      # App entry point
```

## Key Features

### 1. Extrusion Order Form
A comprehensive form that captures all manufacturing parameters from the PDF document:

- **Header Information**: Date, delivery, client, order numbers
- **Extrusion Details**: Weight, measurements, caliber, product type
- **Materials**: LL with additives, pigments, custom additives list
- **Roll Details**: Weight per roll, meters, number of rolls
- **Gramaje**: Weight specifications with min/max ranges
- **Impression**: Print settings, colors, identification
- **Bagging**: Bag specifications and counts
- **Extrusion Parameters**: 10 temperature zones, motor settings, NIP, sealing
- **Packaging**: Bundle weight, batch number, labeling
- **Quality Control**: Observations and test checklist

### 2. Bilingual Support
- Toggle between Spanish and English
- Comprehensive translations in `constants/translations.ts`
- Easy to extend with additional languages

### 3. Form Validation
- Required field validation
- Numeric range validation
- Total percentage validation for materials
- Real-time error display

### 4. Type Safety
- Comprehensive TypeScript interfaces
- Strongly typed form data
- Type-safe component props

### 5. Responsive Design
- Mobile-first approach
- Grid layouts adapt to screen size
- Touch-friendly form controls

## Form Data Structure

```typescript
interface ExtrusionOrder {
  // Header (11 fields)
  orderNumber, date, deliveryDate, foNumber, extNumber,
  client, key, dado, bur, orderDeFab, deliveryType, claveCoPosip

  // Extrusion Details (6 fields + gramaje)
  extruir, bobina, medida, calibre, productType, bolseoEnabled, impresionQC
  gramaje: { largo, ancho, min, max }

  // Materials
  llConAditivo: { percentage1, kg1, percentage2, kg2 }
  pigment, pigmentPercentage
  additives: Array<{ name, percentage }>

  // Roll Details (3 fields)
  pesoXRollo, mtsXRollo, noDeRollos

  // Impression (5 fields)
  impression: { enabled, sides, identificacion, tintasCara1, tintasCara2 }

  // Bolseo (9 fields)
  bolseo: { enabled, type, medida, multiplier, totalBolsas, ... }

  // Extrusion Parameters (10 temps + 5 settings)
  parameters: {
    temperatures: { zona1-6, cambiaM, dado8-10 }
    motorPrincipal: { hz, amp }
    fuelladores, nip, tempBarraSello, tiempoSello, embobinador
  }

  // Packaging (4 fields)
  packaging: { bultoWeight, lote, etiqueta, rolloType }

  // Quality Control
  qualityControl: {
    observaciones,
    pruebas: Array<{ name, passed, notes }>
  }
}
```

## Routing System

Simple state-based routing (no router library):
- `null` user → LoginPage
- `operator` role → OperatorDashboard
- `supervisor` role → SupervisorDashboard

The form is shown as a modal overlay when operator clicks "Nueva Orden de Extrusión".

## Future Enhancements (Not Implemented - MVP Only)

1. **Backend Integration**
   - Save forms to database
   - Load existing orders
   - User authentication

2. **Supervisor Features**
   - Review submitted forms
   - Approve/reject orders
   - Form history

3. **Advanced Features**
   - PDF generation from form data
   - Form templates
   - Auto-calculations (e.g., total materials percentage)
   - Local storage persistence
   - Form drafts

4. **Additional Forms**
   - Other manufacturing orders
   - Quality control reports
   - Inventory management

## Running the Application

```bash
# Install dependencies
npm install

# Development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Component Usage Examples

### Using Common Components

```tsx
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Card from '../components/common/Card';

<Card title="Section Title">
  <Input
    label="Field Name"
    type="number"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    error={errors.field}
  />
  <Button onClick={handleSubmit}>Submit</Button>
</Card>
```

### Language Toggle

```tsx
import { useLanguage } from '../hooks/useLanguage';

const MyComponent = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div>
      <h1>{t('formTitle')}</h1>
      <button onClick={toggleLanguage}>
        {language === 'es' ? 'English' : 'Español'}
      </button>
    </div>
  );
};
```

## Design Decisions

1. **No Router Library**: Kept simple for MVP with state-based routing
2. **No State Management Library**: Local state sufficient for MVP
3. **Modular Form Sections**: Each section is a separate component for maintainability
4. **Common Components**: Reusable UI components with consistent styling
5. **TypeScript First**: Strong typing throughout for reliability
6. **Tailwind CSS**: Utility-first styling for rapid development
7. **Bilingual Ready**: Built-in translation support from the start

## Notes

- Form data is currently logged to console on submission
- No backend integration yet (MVP)
- Simple role-based access (no real authentication)
- Responsive design works on mobile, tablet, and desktop
- All PDF form fields have been implemented
- Validation is basic but functional
