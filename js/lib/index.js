import 'typeface-roboto';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify from '@mariobuikhuizen/vuetify';
import '@mariobuikhuizen/vuetify/dist/vuetify.min.css';
import './styles.css';

// -- new (non-template) stuff
import VuePackeryPlugin from 'vue-packery-plugin'
import VueDraggabillyPlugin from 'vue-packery-draggabilly-plugin'
Vue.use(VuePackeryPlugin)
Vue.use(VueDraggabillyPlugin)
// -- new (non-template) stuff
console.error( 'THIS IS A TEST.' );

Vue.use(Vuetify, {
    iconfont: 'md',
});

export { VuetifyView } from './VuetifyView';
export * from './generated';
export { HtmlModel } from './Html';
export { VuetifyTemplateModel } from './VuetifyTemplate';
export { VuetifyTemplateView } from './VuetifyTemplateView';

export const { version } = require('../package.json'); // eslint-disable-line global-require
