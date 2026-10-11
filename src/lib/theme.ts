/** Kolory akcentu poszczególnych podstron (nadpisują --green i --green-soft). */
const themes: Record<string, { accent: string; soft: string }> = {
	'o-nas': { accent: '#91c73e', soft: '#e9f2d8' },
	'rozwoj-inwestycji': { accent: '#6fb1d6', soft: '#e0eef6' },
	'inzynieria-i-projektowanie': { accent: '#e2a93b', soft: '#f6ebd0' },
	'doradztwo-inwestycyjne': { accent: '#dc8660', soft: '#f6e4da' },
	'badania-i-rozwoj': { accent: '#a093d6', soft: '#e9e6f6' },
	'klimat-i-zrownowazony-rozwoj': { accent: '#54a272', soft: '#dcebe1' },
	'aktualnosci-i-wiedza': { accent: '#4fb5aa', soft: '#dbf0ed' }
};

export const theme = (slug: string) => {
	const t = themes[slug] ?? themes['o-nas'];
	return `display: contents; --green: ${t.accent}; --green-soft: ${t.soft};`;
};
