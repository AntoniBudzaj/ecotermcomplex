export interface NavLink {
	href: string;
	label: string;
}

export interface Contact {
	address: string;
	phone: string;
	email: string;
}

export const links: NavLink[] = [
	{ href: '/o-nas/', label: 'O nas' },
	{ href: '/rozwoj-inwestycji/', label: 'Rozwój inwestycji' },
	{ href: '/inzynieria-i-projektowanie/', label: 'Inżynieria' },
	{ href: '/doradztwo-inwestycyjne/', label: 'Doradztwo' },
	{ href: '/badania-i-rozwoj/', label: 'B+R' },
	{ href: '/klimat-i-zrownowazony-rozwoj/', label: 'Klimat' },
	{ href: '/aktualnosci-i-wiedza/', label: 'Wiedza' }
];

export const contact: Contact = {
	address: 'ul. Ozimina 18a, 61-664 Poznań',
	phone: '+48 695 8500 296',
	email: 'biuro@ecotermcomplex.pl'
};
