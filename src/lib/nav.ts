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
	address: '[ul. Polna 00, 00-000 Miejscowość]',
	phone: '[+48 000 000 000]',
	email: '[kontakt@bioenergia.pl]'
};
