export type UserRole = 'operator' | 'supervisor';

export interface User {
  id: string;
  name: string;
  role: UserRole;
}
