const mapping: Record<string, string> = {
  companies: 'company',
  resumes: 'resume',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
