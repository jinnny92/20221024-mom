<template>
  <header>
    <a href="/" class="logo">Man of the Match</a>

    <ul>
      <li><a href="/board/list" class="goBoard">자유게시판</a></li>
      <li>
        <a href="/arsenal">
          <img src="@/assets/Logo/ars.png" class="userSelectedTeam" />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/aston.png" class="userSelectedTeam2" />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/born.png" class="userSelectedTeam3" />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/brent.png" class="userSelectedTeam4" />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/brigh.png" class="userSelectedTeam5" />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/chel.png" class="userSelectedTeam6" />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/ever.png" class="userSelectedTeam7" />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/forest.png" class="userSelectedTeam8" />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/full.png" class="userSelectedTeam9" />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/lees.png" class="userSelectedTeam10" />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/leic.png" class="userSelectedTeam11" />
        </a>
        <a href="/arsenal">
          <img
            src="@/assets/Logo/liverpoolfc_crest.png"
            class="userSelectedTeam12"
          />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/mancity.png" class="userSelectedTeam13" />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/manu.png" class="userSelectedTeam14" />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/new.png" class="userSelectedTeam15" />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/palce.png" class="userSelectedTeam16" />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/south.png" class="userSelectedTeam17" />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/tott.png" class="userSelectedTeam18" />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/west.png" class="userSelectedTeam19" />
        </a>
        <a href="/arsenal">
          <img src="@/assets/Logo/wolves.png" class="userSelectedTeam20" />
        </a>
      </li>
    </ul>
  </header>
</template>

<script>
window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans KR";
}
body {
  background: #2f1839;
  /* min-height: 200vh; */
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 30px 70px;
  z-index: 100000;
  background-color: black;
}

header.sticky {
  padding: 10px 100px;
  background-color: #fff;
}
header.sticky .logo,
header.sticky ul li a {
  color: #000;
}

header .logo {
  position: relative;
  font-weight: 700;
  color: white;
  text-decoration: none;
  font-size: 2em;
  text-transform: uppercase;
  transition: 0.6s;
  letter-spacing: 2px;
}

header ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

header ul li {
  position: relative;
  list-style: none;
}

header ul li a {
  position: relative;
  /* margin: 0 15px; */
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  font-weight: 500px;
  transition: 0.6s;
}

.userSelectedTeam,
.userSelectedTeam2,
.userSelectedTeam3,
.userSelectedTeam4,
.userSelectedTeam5,
.userSelectedTeam6,
.userSelectedTeam7,
.userSelectedTeam8,
.userSelectedTeam9,
.userSelectedTeam10,
.userSelectedTeam11,
.userSelectedTeam12,
.userSelectedTeam13,
.userSelectedTeam14,
.userSelectedTeam15,
.userSelectedTeam16,
.userSelectedTeam17,
.userSelectedTeam18,
.userSelectedTeam19,
.userSelectedTeam20 {
  width: 30px;
  height: 30px;
  display: none;
}

.goBoard {
  font-weight: bold;
  font-size: 1.2rem;
}

header .logo:hover {
  color: white;
}

header .goBoard:hover {
  color: white;
}
</style>
