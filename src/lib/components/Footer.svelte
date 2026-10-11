<script lang="ts">
	import { contact } from '$lib/nav';
    import LogoSmall from './LogoSmall.svelte';
</script>

<footer class="wrap">
	<span class="logo"><LogoSmall size={86}/></span>
	<span class="contact"><span>{contact.address}</span><span>{contact.phone}</span><span>{contact.email}</span></span>
	<span class="legal">
		<span>© {new Date().getFullYear()} Ecotermcomplex Sp. z o.o.</span>
		<a href="/polityka-prywatnosci/">Polityka prywatności</a>
	</span>
</footer>

<style>
	.legal {
		display: flex;
		flex-wrap: wrap;
		gap: 4px 24px;
	}
	.legal a {
		color: inherit;
	}
	.contact {
		display: flex;
		flex-wrap: wrap;
		gap: 4px 24px;
	}
	footer {
		margin-top: var(--section);
		padding-block: 40px;
		border-top: 1.5px solid var(--line);
		display: flex;
		flex-wrap: wrap;
		gap: 12px 32px;
		justify-content: space-between;
		align-items: center;
		font-size: 0.9062rem;
		color: var(--muted);
	}
	.logo {
		font-size: 1.25rem;
		color: var(--ink);
	}
	.logo b {
		font-weight: 600;
	}
	.logo span {
		font-weight: 300;
	}
</style>
