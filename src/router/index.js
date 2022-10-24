import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import BoardList from "../../src/components/Board/BoardList.vue";
import BoardInsert from "../../src/components/Board/BoardInsert.vue";
import BoardRead from "../../src/components/Board/BoardRead.vue";

Vue.use(VueRouter);

const arsenal = () =>
  import(
    /* webpackChunkName: "about" */ "../components/asenal/Mom_Arsenal_Detail.vue"
  );
const astonvilla = () =>
  import(
    /* webpackChunkName: "about" */ "../components/aston/Mom_AstonVilla_Detail.vue"
  );
const bourn = () =>
  import(
    /* webpackChunkName: "about" */ "../components/bourn/Mom_Bourn_Detail.vue"
  );
const brentford = () =>
  import(
    /* webpackChunkName: "about" */ "../components/brentford/Mom_Brentford_Detail.vue"
  );
const brighton = () =>
  import(
    /* webpackChunkName: "about" */ "../components/brighton/Mom_Brighton_Detail.vue"
  );
const chelsea = () =>
  import(
    /* webpackChunkName: "about" */ "../components/chelsea/Mom_Chelsea_Detail.vue"
  );
const everton = () =>
  import(
    /* webpackChunkName: "about" */ "../components/everton/Mom_Everton_Detail.vue"
  );
const forest = () =>
  import(
    /* webpackChunkName: "about" */ "../components/forest/Mom_Forest_Detail.vue"
  );
const full = () =>
  import(
    /* webpackChunkName: "about" */ "../components/full/Mom_Full_Detail.vue"
  );
const lees = () =>
  import(
    /* webpackChunkName: "about" */ "../components/lees/Mom_Lees_Detail.vue"
  );
const leic = () =>
  import(
    /* webpackChunkName: "about" */ "../components/leic/Mom_Leic_Detail.vue"
  );
const liverpool = () =>
  import(
    /* webpackChunkName: "about" */ "../components/liverpool/Mom_Liverpool_Detail.vue"
  );
const mancity = () =>
  import(
    /* webpackChunkName: "about" */ "../components/mancity/Mom_Mancity_Detail.vue"
  );
const manu = () =>
  import(
    /* webpackChunkName: "about" */ "../components/manu/Mom_Manu_Detail.vue"
  );
const newcastle = () =>
  import(
    /* webpackChunkName: "about" */ "../components/newcastle/Mom_Newcastle_Detail.vue"
  );
const crystal = () =>
  import(
    /* webpackChunkName: "about" */ "../components/crystal/Mom_Crystal_Detail.vue"
  );
const south = () =>
  import(
    /* webpackChunkName: "about" */ "../components/south/Mom_South_Detail.vue"
  );
const tott = () =>
  import(
    /* webpackChunkName: "about" */ "../components/tott/Mom_Tott_Detail.vue"
  );
const west = () =>
  import(
    /* webpackChunkName: "about" */ "../components/westham/Mom_WestHam_Detail.vue"
  );
const wolves = () =>
  import(
    /* webpackChunkName: "about" */ "../components/wolves/Mom_Wolves_Detail.vue"
  );
const routes = [
  {
    path: "/arsenal",
    name: "arsenal",
    component: arsenal,
  },
  {
    path: "/astonvilla",
    name: "astonvilla",
    component: astonvilla,
  },
  {
    path: "/bourn",
    name: "bourn",
    component: bourn,
  },
  {
    path: "/brentford",
    name: "brentford",
    component: brentford,
  },
  {
    path: "/brighton",
    name: "brighton",
    component: brighton,
  },
  {
    path: "/chelsea",
    name: "chelsea",
    component: chelsea,
  },
  {
    path: "/everton",
    name: "everton",
    component: everton,
  },
  {
    path: "/forest",
    name: "forest",
    component: forest,
  },
  {
    path: "/full",
    name: "full",
    component: full,
  },
  {
    path: "/lees",
    name: "lees",
    component: lees,
  },
  {
    path: "/leic",
    name: "leic",
    component: leic,
  },
  {
    path: "/liverpool",
    name: "liverpool",
    component: liverpool,
  },
  {
    path: "/mancity",
    name: "mancity",
    component: mancity,
  },
  {
    path: "/manu",
    name: "manu",
    component: manu,
  },
  {
    path: "/newcastle",
    name: "newcastle",
    component: newcastle,
  },
  {
    path: "/crystal",
    name: "crystal",
    component: crystal,
  },
  {
    path: "/south",
    name: "south",
    component: south,
  },
  {
    path: "/tott",
    name: "tott",
    component: tott,
  },
  {
    path: "/west",
    name: "west",
    component: west,
  },
  {
    path: "/wolves",
    name: "wolves",
    component: wolves,
  },

  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/board/list",
    name: "boardList",
    component: BoardList,
  },
  {
    path: "/board/insert/:contentId?",
    //글쓰기, 수정에 쓰임 contentId는 수정때만 쓰이고 (등록에는 쓰이지 않으므로) 필수요소가 아니라 선택적으로 들어가게 하기위해 물음표를 붙였음
    name: "boardInsert",
    component: BoardInsert,
  },
  {
    path: "/board/read/:contentId",
    name: "boardRead",
    component: BoardRead,
  },
  {
    path: "/arsenal/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/asenal/asenalPlayer.vue"
      ),
  },
  {
    path: "/astonvilla/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/aston/astonPlayer.vue"
      ),
  },
  {
    path: "/bourn/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/bourn/bournPlayer.vue"
      ),
  },
  {
    path: "/brentford/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/brentford/brentfordPlayer.vue"
      ),
  },
  {
    path: "/chelsea/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/chelsea/chelseaPlayer.vue"
      ),
  },
  {
    path: "/everton/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/everton/evertonPlayer.vue"
      ),
  },
  {
    path: "/forest/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/forest/forestPlayer.vue"
      ),
  },
  {
    path: "/full/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/full/fullPlayer.vue"
      ),
  },
  {
    path: "/lees/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/lees/leesPlayer.vue"
      ),
  },
  {
    path: "/leic/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/leic/leicPlayer.vue"
      ),
  },
  {
    path: "/liverpool/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/liverpool/liverpoolPlayer.vue"
      ),
  },
  {
    path: "/mancity/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/mancity/mancityPlayer.vue"
      ),
  },
  {
    path: "/manu/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/manu/manuPlayer.vue"
      ),
  },
  {
    path: "/newcastle/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/newcastle/newcastlePlayer.vue"
      ),
  },
  {
    path: "/crystal/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/crystal/crystalPlayer.vue"
      ),
  },
  {
    path: "/south/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/south/southPlayer.vue"
      ),
  },
  {
    path: "/tott/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/tott/tottPlayer.vue"
      ),
  },
  {
    path: "/west/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/westham/westhamPlayer.vue"
      ),
  },
  {
    path: "/wolves/player",
    name: "player",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/wolves/wolvesPlayer.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
