import { pages } from './content';

export interface NavLink {
	href: string;
	label: string;
}

export interface Contact {
	address: string;
	phone: string;
	email: string;
}

export const links: NavLink[] = pages.map((p) => ({ href: `/${p.slug}/`, label: p.nav }));

export const contact: Contact = {
	address: 'ul. Ozimina 18a, 61-664 Poznań',
	phone: '+48 695 8500 296',
	email: 'biuro@ecotermcomplex.pl'
};
