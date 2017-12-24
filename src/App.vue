<template>
  <v-app id="inspire">
    <AppSidebar :drawer="drawer" :items="items"/>
    <AppToolbar :drawer="drawer"/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste a dolorum alias nam facere. Temporibus perspiciatis accusamus quia molestiae perferendis cumque consequuntur, magnam, reiciendis, modi velit fugit nemo ea iusto.
          </p>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AppSidebar from './components/AppSidebar'
import AppToolbar from './components/AppToolbar'
export default {
  components: {
    AppSidebar,
    AppToolbar
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: 'dashboard', text: 'Dashboard' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Components',
        model: true,
        children: [
          { icon: 'arrow-left', text: 'Buttons' },
          { icon: 'arrow-left', text: 'Cards' },
          { icon: 'arrow-left', text: 'Forms' },
          { icon: 'arrow-left', text: 'Modals' },
          { icon: 'arrow-left', text: 'Switches' },
          { icon: 'arrow-left', text: 'Tables' },
          { icon: 'arrow-left', text: 'Icons' }
        ]
      },
      { icon: 'settings', text: 'Widgets' },
      { icon: 'trending_up', text: 'Charts' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Pages',
        model: true,
        children: [
          { icon: 'arrow-left', text: 'Login' },
          { icon: 'arrow-left', text: 'Register' },
          { icon: 'arrow-left', text: 'Error 404' },
          { icon: 'arrow-left', text: 'Error 500' }
        ]
      }
    ]
  })
}
</script>
