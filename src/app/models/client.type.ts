const clientTypes = ['l\'université Lyon 1', 'le Greta de l\'Ain', 'Scantech'] as const;

export type clientType = (typeof clientTypes)[number];