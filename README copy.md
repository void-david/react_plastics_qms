# COPOSA Quality Management System

A comprehensive Quality Management System (QMS) built with React, TypeScript, and Tailwind CSS for ISO 9001:2015 compliance in manufacturing environments.

## Features

### Core Functionality
- **Role-based Authentication** - Login system with 4 user roles (Operator, Supervisor, Manager, Admin)
- **Dynamic Form Builder** - Render forms based on JSON schema for ISO forms (FO-PRO-XXX formats)
- **Form Workflow** - Draft → Submitted → Under Review → Approved/Rejected
- **Form Management** - Create, edit, view, and approve forms
- **Dashboard** - Role-specific views with pending tasks and form lists
- **Search & Filter** - Filter forms by date, status, department, supervisor

### User Roles & Permissions

#### Operators
- Fill assigned forms
- View their submissions
- Save drafts
- Sub-roles: Extrusion, Impression, Bolseo

#### Supervisors
- Review operator forms
- Provide feedback
- Fill supervisor-specific forms
- Approve/reject submissions

#### Managers
- View all forms
- Generate reports
- Administrative access
- Analytics dashboard

#### Admins
- User management
- System configuration
- Full access to all features

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **React Hook Form** - Form management
- **Zustand** - State management
- **date-fns** - Date formatting
- **Lucide React** - Icons

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Default Credentials

The application comes with demo users:

- **Admin**: `admin` / `password123`
- **Manager**: `manager1` / `password123`
- **Supervisor**: `supervisor1` / `password123`
- **Operator (Extrusion)**: `operator1` / `password123`
- **Operator (Impression)**: `operator2` / `password123`
- **Operator (Bolseo)**: `operator3` / `password123`

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Select.tsx
│   │   ├── Textarea.tsx
│   │   ├── Badge.tsx
│   │   └── Modal.tsx
│   ├── forms/           # Form-related components
│   │   ├── FormField.tsx
│   │   └── DynamicForm.tsx
│   └── layout/          # Layout components
│       ├── Sidebar.tsx
│       ├── Header.tsx
│       └── MainLayout.tsx
├── pages/               # Page components
│   ├── LoginPage.tsx
│   ├── DashboardPage.tsx
│   ├── FormsListPage.tsx
│   ├── FormFillPage.tsx
│   ├── SubmissionsPage.tsx
│   ├── SubmissionDetailPage.tsx
│   ├── ReviewQueuePage.tsx
│   ├── ReviewFormPage.tsx
│   ├── UsersPage.tsx
│   ├── SettingsPage.tsx
│   └── ReportsPage.tsx
├── store/               # State management
│   ├── authStore.ts
│   └── formStore.ts
├── data/                # Mock data
│   ├── mockUsers.ts
│   ├── formSchemas.ts
│   └── mockSubmissions.ts
├── types/               # TypeScript types
│   └── index.ts
├── App.tsx              # Main app component
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## Available Forms

The system includes the following ISO 9001:2015 compliant forms:

1. **FO-PRO-026**: Manufacturing Order
   - Production order tracking
   - Priority management
   - Target quantities

2. **FO-PRO-031**: Extruder Operating Conditions
   - Machine parameters
   - Temperature zones
   - Material specifications

3. **FO-PRO-003**: Extruder Quality Report
   - Quality inspection
   - Dimensional checks
   - Approval/rejection workflow

4. **FO-PRO-006**: Production Control
   - Daily production tracking
   - Downtime monitoring
   - Quality issue reporting

## Key Features

### Dynamic Form Rendering
Forms are defined using JSON schemas with field definitions including:
- Text, number, date, datetime inputs
- Dropdowns with options
- Textareas for long text
- Checkboxes
- Field validation rules
- Conditional field visibility

### Form Workflow
1. **Draft** - Save work in progress
2. **Submitted** - Send for review
3. **Under Review** - Being evaluated by supervisor
4. **Approved** - Accepted by supervisor
5. **Rejected** - Requires corrections

### Dashboard Features
- Quick stats overview
- Recent submissions
- Pending review queue (for supervisors/managers)
- Quick access to common forms

### Search & Filtering
- Search by form code, title, or submitter
- Filter by status (draft, submitted, approved, rejected)
- Filter by date range
- Filter by department

### Reports & Analytics
- Submission statistics
- Approval rates
- Form-specific metrics
- Export capabilities

## Customization

### Adding New Forms

Add new form schemas in `src/data/formSchemas.ts`:

```typescript
{
  id: 'form-5',
  code: 'FO-PRO-XXX',
  title: 'Your Form Title',
  description: 'Form description',
  version: '1.0',
  department: 'Production',
  category: 'Quality Control',
  allowedRoles: ['operator', 'supervisor'],
  fields: [
    // Define your fields here
  ]
}
```

### Styling

The application uses Tailwind CSS. Customize colors in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors
      }
    }
  }
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Mobile Support

The application is fully responsive and works on:
- Tablets (iPad, Android tablets)
- Mobile phones
- Desktop computers

## Future Enhancements

- [ ] PDF export functionality
- [ ] Email notifications
- [ ] Form templates
- [ ] Advanced analytics
- [ ] Multi-language support
- [ ] Offline mode
- [ ] Digital signatures
- [ ] Audit trail
- [ ] Integration with ERP systems

## License

Proprietary - COPOSA Manufacturing

## Support

For issues or questions, contact the IT department.
