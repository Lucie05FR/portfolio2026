const clientTypes = ['Université Lyon 1', 'Greta de l\'Ain', 'Scantech'] as const;

export type clientType = (typeof clientTypes)[number];