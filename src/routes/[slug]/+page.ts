import { error } from '@sveltejs/kit';
import { pages } from '$lib/content';

export const entries = () => pages.map((p) => ({ slug: p.slug }));

export function load({ params }) {
	const page = pages.find((p) => p.slug === params.slug);
	if (!page) error(404, 'Nie znaleziono strony');
	return { page };
}
