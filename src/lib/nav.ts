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
	{ href: '/', label: 'Biogazownia' },
	{ href: '/jak-to-dziala/', label: 'Jak to działa' },
	{ href: '/surowce/', label: 'Surowce' },
	{ href: '/energia/', label: 'Energia' },
	{ href: '/o-nas/', label: 'O nas' }
];

export const contact: Contact = {
	address: 'ul. Ozimina 18a, 61-664 Poznań',
	phone: '+48 695 8500 296',
	email: 'biuro@ecotermcomplex.pl'
};
