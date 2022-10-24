<template>
  <div class="header">
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
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  /* background: #2f1839; */
  background: black;
  color: white;
  padding-left: 32px;
  padding-right: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  position: sticky;
  top: 0;
  z-index: 999;
}

.header .logo {
  position: relative;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  font-size: 2em;
  text-transform: uppercase;
  transition: 0.6s;
  letter-spacing: 2px;
}

.header ul {
  list-style-type: none;
  padding: 0;
}

.header ul li {
  display: inline-block;
  margin-left: 16px;
  font-size: 18px;
  font-weight: bold;
}

.header ul li a {
  position: relative;
  /* margin: 0 15px; */
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  font-weight: 500px;
  transition: 0.6s;
}

.userSelectedTeam {
  width: 30px;
  height: 30px;
}
</style>
