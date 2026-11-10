<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ANIME WORLD</title>

<style>
*{margin:0;padding:0;box-sizing:border-box}
body{
 background:#090910;
 color:white;
 font-family:Arial,sans-serif;
}
header{
 background:#151520;
 padding:18px;
 display:flex;
 justify-content:space-between;
 align-items:center;
}
.logo{color:#b45cff;font-size:23px;font-weight:bold}
nav a{
 color:white;
 text-decoration:none;
 margin-left:12px;
 font-size:13px;
}
.hero{
 padding:35px 20px;
 background:linear-gradient(90deg,#160b2b,#35105a,#100d1d);
}
.hero h1{font-size:30px;margin-bottom:12px}
.hero p{color:#ddd;margin-bottom:18px}
.btn{
 background:#a33cff;
 color:white;
 padding:11px 18px;
 border:0;
 border-radius:6px;
 font-weight:bold;
}
.search{padding:18px}
.search input{
 width:100%;
 padding:13px;
 border-radius:7px;
 border:1px solid #444;
 background:#191923;
 color:white;
}
h2{padding:15px 18px;color:#c58aff}
.anime-list{
 display:grid;
 grid-template-columns:repeat(2,1fr);
 gap:15px;
 padding:15px;
}
.anime{
 background:#191923;
 border-radius:10px;
 overflow:hidden;
}
.anime img{
 width:100%;
 height:210px;
 object-fit:cover;
}
.anime h3{padding:9px;font-size:15px}
.anime p{padding:0 9px 12px;color:#aaa;font-size:12px}
footer{
 text-align:center;
 padding:25px;
 color:#888;
 background:#151520;
 margin-top:25px;
}
</style>
</head>

<body>

<header>
<div class="logo">ANIME WORLD</div>
<nav>
<a href="#">Home</a>
<a href="#anime">Anime</a>
</nav>
</header>

<section class="hero">
<h1>Welcome to Anime World 🔥</h1>
<p>Discover your favourite anime in one place.</p>
<button class="btn" onclick="document.getElementById('anime').scrollIntoView()">Explore Anime</button>
</section>

<div class="search">
<input type="text" id="search" placeholder="Search your favourite anime...">
</div>

<h2 id="anime">🔥 Popular Anime</h2>

<div class="anime-list" id="animeList">

<div class="anime">
<img src="https://cdn.myanimelist.net/images/anime/1171/109222.jpg" alt="Naruto">
<h3>Naruto</h3>
<p>Action • Adventure</p>
</div>

<div class="anime">
<img src="https://cdn.myanimelist.net/images/anime/1286/99889.jpg" alt="Demon Slayer">
<h3>Demon Slayer</h3>
<p>Action • Fantasy</p>
</div>

<div class="anime">
<img src="https://cdn.myanimelist.net/images/anime/1208/94745.jpg" alt="Attack on Titan">
<h3>Attack on Titan</h3>
<p>Action • Drama</p>
</div>

<div class="anime">
<img src="https://cdn.myanimelist.net/images/anime/1171/109222.jpg" alt="Anime">
<h3>Anime Collection</h3>
<p>More anime coming soon</p>
</div>

</div>

<footer>
<p>© 2026 ANIME WORLD</p>
<p>Made with ❤️ for Anime Fans</p>
</footer>

<script>
document.getElementById("search").addEventListener("input",function(){
 let value=this.value.toLowerCase();
 document.querySelectorAll(".anime").forEach(function(card){
  card.style.display=card.innerText.toLowerCase().includes(value)?"block":"none";
 });
});
</script>

</body>
</html>
