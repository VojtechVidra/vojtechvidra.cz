<?
	session_start();
	$year = date("Y"); if(date("n")<5){$year=$year-2000;}else{$year=$year-1999;}
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Vojtěch Vidra</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
		<link rel="stylesheet" type="text/css" href="src/style.css">
		<script src="src/script.js"></script>
	</head>
	<body data-spy="scroll" data-target=".navbar" data-offset="50">
		<div class="home" id="top" data-type="background" data-speed="13">
			<div class="home-overlay">
				<nav class="navbar navbar-default">
				  <div class="container">
				    <div class="navbar-header">
			    		<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
					        <span class="sr-only">Toggle navigation</span>
					        <span class="icon-bar"></span>
					        <span class="icon-bar"></span>
					        <span class="icon-bar"></span>
				      	</button>
				      	<a class="navbar-brand" href="#top">Vojtěch Vidra</a>
				    </div>
				    <div class="collapse navbar-collapse" id="navbar-collapse">
					    <ul class="nav navbar-nav navbar-right">
					      <!-- <li><a href="#about">O mně</a></li> -->
					      <li><a href="#portfolio">Portfolio</a></li>
					      <li><a href="#contact">Kontakt</a></li>
					    </ul>
					</div>
				  </div>
				</nav>
				<div class="home-text">
					<p>Dobrý den, já jsem</p>
					<h1>Vojtěch Vidra</h1>
					<p>student, IT nadšenec a Web developer</p>
				</div>
				<div class="arrow">
					<a href="#portfolio" title="Více info">	
					</a>
				</div>
			</div>
		</div>
		<!-- <section class="about" id="about">
			<div class="container">
				<img src="src/profil.jpg" alt="Foto"/>
				<p>Je mi <?= $year ?> a bydlím v Brandýse nad Labem. Studuji IT na SPŠ Prosek. Vytvářím především prezentační weby pro firmy.</p>
			</div>
		</section> -->
		<section class="portfolio" id="portfolio">
			<div class="container">
				<h2>Má práce</h2>
				<ul class="sites">
					<li>
				      <img src="src/pereny.jpg" alt="Pereny" />
				      <span class="text-content">  
					      <div class="row">
					      	<div class="col-sm-6">
						      	<h3>Pereny</h3>
						      	<span>Trvalková školka</span>
					      	</div>
					      	<div class="col-sm-6">
										<a type="button" title="Zjistit více" data-toggle="modal" data-target="#Pereny">Zjistit více</a><br>
										<a title="Navštívit stránky" href="http://pereny.cz/" target="_blank">Navštívit stránky</a>
					      	</div> 
					      </div>
				      </span>

					</li>
					<li>
				      <img src="src/stones.jpg" alt="Rocking Stones" />
				      <span class="text-content">
					      <div class="row">
					      	<div class="col-sm-6">
						      	<h3>Rocking Stones</h3>
						      	<span>Designové parky z betonu a kamene</span>
					      	</div>
					      	<div class="col-sm-6">
					      		<a type="button" title="Zjistit více" data-toggle="modal" data-target="#Stones">Zjistit více</a><br>
										<a title="Navštívit stránky" href="http://www.rockingstones.cz/" target="_blank">Navštívit stránky</a>
					      	</div> 
					      </div>  
				      </span>
					</li>
				</ul>
				<div class="modal fade" id="Pereny" tabindex="-1" role="dialog" aria-labelledby="PerenyLabel">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h3 class="modal-title" id="PerenyLabel">Pereny</h3>
				        <h4>Trvalková školka</h4>
				      </div>
				      <div class="modal-body">
				      	<img src="src/pereny2.png" alt="Pereny">
				        <p>Redesign a tvorba nových stránek postavených na Wordpressu, zastupoval jsem spíše pozici kodéra.</p>
				      </div>
				    </div>
				  </div>
				</div>

				<div class="modal fade" id="Stones" tabindex="-1" role="dialog" aria-labelledby="StonesLabel">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h3 class="modal-title" id="StonesLabel">Rocking Stones</h3>
				        <h4>Designové parky z betonu a kamene</h4>
				      </div>
				      <div class="modal-body">
				      	<img src="src/stones2.png" alt="Rocking Stones">
				        <p>Spolupráce s firmou Designeo, já jsem sloužil pouze jako kodér již navrhnutého webu.</p>
				      </div>
				    </div>
				  </div>
				</div>

			</div>
		</section>
		<section class="contact" id="contact">
			<div class="container">
				<h2>Napište mi</h2>
				<form action="email.php" method="POST" enctype="multipart/form-data">
					<input type="text" placeholder="Jméno" name="name" required>
					<input type="email" placeholder="Email" name="email" required>
					<textarea placeholder="Obsah zprávy" rows="5" name="message" required></textarea>
					<input type="submit" value="Odeslat">
				</form>
				<? if(isset($_SESSION["return"])){ echo "<p>". $_SESSION["return"]."</p>"; 
				unset($_SESSION["return"]);
				 } ?>
			</div>
		</section>
		<footer class="footer">
			<div class="container">
				<!-- <div class="row">
					<div class="col-sm-3 col-xs-12">
						<a href="https://www.facebook.com/vojtech.vidra" target="_blank" title="Facebook">
							<img src="src/fb.png" alt="Facebook">
						</a>
					</div>
					<div class="col-sm-3 col-xs-12">
						<a href="https://plus.google.com/u/0/+Vojt%C4%9BchVidra" target="_blank" title="Google+">
							<img src="src/g+.png" alt="Google+">
						</a>
					</div>
					<div class="col-sm-3 col-xs-12">
						<a href="https://twitter.com/VojtchVidra" target="_blank" title="Twitter">
							<img src="src/twitter.png" alt="Twitter">
						</a>
					</div>
					<div class="col-sm-3 col-xs-12">
						<a href="https://www.instagram.com/vojtechvidra/" target="_blank" title="Instagram">
							<img src="src/insta.png" alt="Instagram">
						</a>
					</div>
				</div> -->

				Vojtěch Vidra &copy; 2016
			</div>
		</footer>

	</body>
</html>