<template>
    <div>
        <div id="side-nav-overlay" :style="[parent ? {display: 'block'}:{display: 'none'}]">
            <div id="main-side-nav" :style="[child ? {marginLeft: '0'}:{marginLeft: '-100%'}]">
                <div id="side-nav-tool">
                    <button @click="handleOpenCloseDrawer">
                        <CloseIcon />
                    </button>
                    <div id="main-side-nav-tool">
                        <router-link to="/profile">
                            <li class="flex mt main-list" @click="handleOpenCloseDrawer">
                                <UserIcon />
                                <div class="list-text">Profile</div>
                            </li>
                        </router-link>
                        <router-link to="/classes">
                            <li class="flex mt main-list" @click="handleOpenCloseDrawer">
                                <WeightLiftIcon />
                                <div class="list-text">Workout Classes</div>
                            </li>
                        </router-link>
                        <router-link to="/fitness-wallet">
                            <li class="flex mt main-list" @click="handleOpenCloseDrawer">
                                <WalletIcon />
                                <div class="list-text">Fitness Wallet</div>
                            </li>
                        </router-link>
                        <router-link to="/frequently-asked-question">
                            <li class="flex mt main-list" @click="handleOpenCloseDrawer">
                                <QuestionMarkIcon />
                                <div class="list-text">Help</div>
                            </li>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CloseIcon from '../includes/icons/Close'
import UserIcon from '../includes/icons/User'
import WeightLiftIcon from '../includes/icons/WeightLift'
import WalletIcon from '../includes/icons/Wallet'
import QuestionMarkIcon from '../includes/icons/QuestionMark'

export default {
  name: 'Drawer',
  components: {
    CloseIcon,
    UserIcon,
    WeightLiftIcon,
    WalletIcon,
    QuestionMarkIcon
  },
  methods: {
    handleOpenCloseDrawer () {
      this.$store.dispatch('main/setSideNavActionClose')
    }
  },
  computed: {
    child () {
      return this.$store.getters['main/getSideNavChild']
    },
    parent () {
      return this.$store.getters['main/getSideNavParent']
    }
  }
}
</script>

<style scoped lang="scss">
    a {
      text-decoration: none;
      color: black;
    }
    button {
        outline: none;
        background: none;
        border: none;
    }
    #side-nav-overlay {
        background: rgba(0,0,0,0.3);
        width: 100%;
        height: 100%;
        position: fixed;
        overflow: auto;
        z-index: 2000;
        bottom: 0;
        transition: 555ms ease-in-out;
    }
    #main-side-nav {
        width: 80%;
        background: white;
        height: 100vh;
        transition: 555ms ease-in-out;
    }
    #side-nav-tool {
        padding-top: 26px;
        padding-left: 28px;
    }
    #main-side-nav-tool {
        margin-top: 57px;
    }
    .list-text {
        margin-top: -4px;
        margin-left: 5px;
        font-weight: bold;
    }
    .mt {
        margin-top: 12px;
    }
    .main-list {
      list-style-type: none;
    }
    .main-list {
        padding-top: 15px;
        padding-bottom: 15px;
        transition: 222ms;
    }
    .main-list:active {
        background: #eee;
        padding-top: 15px;
        padding-bottom: 15px;
    }
</style>
