import React from 'react';
import { injectGlobal } from 'styled-components';
import normalize from 'normalize.css';
import Checklist from './checklist';
import Tasks from '../containers/tasks.container';
import baseStyles from '../styles/base';
import tasksMocks from '../__mocks__/tasks';

injectGlobal([baseStyles + normalize]);

const App = () => (
  <Tasks tasks={tasksMocks} />
);

export default App;
