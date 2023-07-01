const mapping: Record<string, string> = {
  agencies: 'agency',
  clients: 'client',
  renamedpackages: 'Renamedpackage',
  projects: 'project',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
