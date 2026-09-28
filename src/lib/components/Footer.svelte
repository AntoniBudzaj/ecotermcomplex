<script lang="ts">
	import { contact } from '$lib/nav';
</script>

<footer class="wrap">
	<span class="logo"><b>Bio</b><span>Energia</span></span>
	<span>{contact.address} · {contact.phone} · {contact.email}</span>
	<span>© {new Date().getFullYear()} BioEnergia</span>
</footer>

<style>
	footer {
		margin-top: var(--section);
		padding-block: 40px;
		border-top: 1.5px solid var(--line);
		display: flex;
		flex-wrap: wrap;
		gap: 12px 32px;
		justify-content: space-between;
		align-items: center;
		font-size: 14.5px;
		color: var(--muted);
	}
	.logo {
		font-size: 20px;
		color: var(--ink);
	}
	.logo b {
		font-weight: 600;
	}
	.logo span {
		font-weight: 300;
	}
</style>
