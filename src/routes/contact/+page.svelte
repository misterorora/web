<!-- Contant Page, Forms Page for sending Mail via personel Emailclient  -->

<script>
  let formData = {
    name: '',
    email: '',
    message: ''
  };

  const handleSubmit = () => {
    const { name, email, message } = formData;
    const mailtoLink = `mailto:s_steinerc22@stud.hwr-berlin.de?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AReply to: ${encodeURIComponent(email)}`; //call mailto function
    window.location.href = mailtoLink;
  };
</script>

<main>
  <h1 class="head">Kontaktiere uns!</h1>
  <form class="form" on:submit|preventDefault={handleSubmit}>
    <label for="name">Name:</label><br>
    <input type="text" id="name" bind:value={formData.name}><br>
    <label for="email">Email:</label><br>
    <input type="email" id="email" bind:value={formData.email}><br>
    <label for="message">Nachricht:</label><br>
    <textarea id="message" rows="5" bind:value={formData.message}></textarea><br>
    <button type="submit">Abschicken</button>
  </form>

  <div class="disclaimer">
      <p>Nach Betätigung von Abschicken wird ihr eigenes Emailprogramm geöffnet und automatisch gefüllt!</p>
  </div>
</main>


<style>
	.head{
    font-size: 5vw;
    text-align: center;
    line-height: 1;
    font-weight: 700;
    position: absolute; 
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
    letter-spacing: 0.02em;
    text-shadow: 2px 8px 6px #00000033, 0px -5px 35px #FFFFFF4D;
    color: #c79f50;

  }

  .form{
	 text-align: center;
   line-height: 1;
   position: absolute; 
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   color: #c79f50;
  }

  .disclaimer{
    text-align: center;
    line-height: 1;
    font-weight: 700;
    position: absolute; 
    left: 50%;
    top: 70%;
    transform: translate(-50%, -50%);
    color: #c79f50;
  }

</style>