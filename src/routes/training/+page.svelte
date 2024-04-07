<!-- training page --> 
<main>
    <div class="navbar">    <!-- navbar for different weekdays -->
    <nav>
        <ul>
            <li><a href="/training/monday">Montag</a></li>
            <li><a href="/training/tuesday">Dienstag</a></li>
            <li><a href="/training/wednesday">Mittwoch</a></li>
            <li><a href="/training/thursday">Donnerstag</a></li>
            <li><a href="/training/friday">Freitag</a></li>
            <li><a href="/training/saturday">Samstag</a></li>
            <li><a href="/training/sunday">Sonntag</a></li>
        </ul>
    </nav>
    </div>
<div class="text">
    <p>Klicke hier für deinen individuellen Trainingsplan für das perfekte Volleyballerlebnis!</p>
</div>

</main>

<style>
    .navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 0;
        padding: 0;
        height: 50vh; /* Make the main container full height of the viewport */
        color: #c79f50;
    }

    nav ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        padding: 0;
    }

    nav ul li {
        padding: 0 10px;
    }

    a {
        position: relative;
        display: block;
        padding: 8px 0; /* Increased padding */
        color: black;
        text-decoration: none;
        text-transform: uppercase;
        transition: 0.5s;
        font-size: 30px; /* Increased font size */
    }

    a::after {
        position: absolute;
        content: "";
        top: 100%;
        left: 0;
        width: 100%;
        height: 3px;
        background: #a67a36;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.5s;
    }

    a:hover {
        color: #c79f50;
    }

    a:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }

    .text {
    text-align: center;
    line-height: 1;
    font-weight: 700;
    position: absolute; 
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    color: #c79f50;
    }

</style>