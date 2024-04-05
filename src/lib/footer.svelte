<!-- Footer Navbar Container -->

<script>
    // empty
</script>

<div class="footer">        <!--adds footer to bottom right of the page -->
    <nav>
        <ul>
            <li><a href="/impressum">Impressum</a></li>
            <li><a href="/contact">Kontakt</a></li>
        </ul>
    </nav>
</div>

<style>
    .footer {
        position: fixed;
        bottom: 0;
        right: 0;
        padding: 10px;
        z-index: 1;
    }
    
    nav {
        background-color: "#e4d5b7"; 
        padding: 10px; 
    }

    ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin-right: 1em;
        font-weight: bold;
    }

    a {
        color: black; 
        text-decoration: none; 
        padding: 5px 10px; 
        border-radius: 5px; 
    }

    a:hover {
        background-color: #BEDAEF; 
        transition: background-color 0.3s ease;
    }
</style>