<!-- Navbar and Header Container -->

<script>
    // empty
</script>

<div class="header">        <!-- adds Navbar to top of page, left Home page, right  navigation -->
    <h1 class="home"><a href="/">Südstadt-Volleyball</a></h1>
    <nav>
        <ul>
            <li><a class="standard" href="/announcements">Ankündigungen</a></li>
            <li><a class="standard" href="/teams">Teams</a></li>
            <div class="member">
                <li><a href="/contact"  class="button">Mitglied werden?</a></li>
            </div>
            <li><a class="standard" href="/rules">Regeln</a></li>
            <li><a class="standard" href="/training">Trainingsplan</a></li>
            <li><a class="standard" href="/gallery">Galerie</a></li>
        </ul>
    </nav>
</div>

<style>
    .header {
        display: flex;
        justify-content: space-between; 
        align-items: center; 
        padding: 10px; 
    }

    .home {
        margin: 0; 
        font-size: 24px; 
        font-weight: bold; 
        border-radius: 5px;
    }

    nav {

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

    .standard:hover {
        background-color: #BEDAEF; 
        transition: background-color 0.3s ease;
    }

    .home:hover {
        background-color: #BEDAEF;
        transition: background-color 0.3s ease;
    }

    .member {
        color: white;
        text-decoration: none;
        border-radius: 5px;
    }
    .button{
        background-color: #c79f50;
        transition: background-color 0.3s ease;
        color: white;
    }

      .button:hover {
    background-color: #a67a36;
  }
</style>
