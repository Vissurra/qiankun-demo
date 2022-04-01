import {registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start} from 'qiankun';
import './index.less';


registerMicroApps(
  [
    {
      name: 'purehtml',
      entry: '//localhost:7104',
      container: '#subapp-container',
      activeRule: '/purehtml',
    }
  ],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
);

setDefaultMountApp('/purehtml');
start();

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});