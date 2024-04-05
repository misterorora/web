<!-- applys all effects on pages, adds title, adds transition to all sites, adds footer and header -->

<title>Südstadt-Volleyball</title>
<script>
    import { fade } from 'svelte/transition';   /*used for transitions at SPA´s */
    import { cubicIn, cubicOut } from 'svelte/easing';
    export let data;
    import Header from '$lib/header.svelte';       /*imported for header on all Pages */
    import Footer from '$lib/footer.svelte';       /*imported for footer on all Pages */
    import '$lib/global.css';                      /*imported for svg background and fonts on all Pages */
</script>

<main>
    <Header />
    <Footer />
    
    <!-- Transition -->
    {#key data.pathname}
    <div
        in:fade={{ easing: cubicOut, duration: 300, delay: 400 }}
        out:fade={{ easing: cubicIn, duration: 300 }}
    >
        <slot />
    </div>
{/key}
</main>
