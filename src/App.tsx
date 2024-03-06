import * as React from "react";
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { CandidateList, CandidateCreate, CandidateEdit } from './candidates';


import { ElectionList, ElectionCreate, ElectionEdit } from './elections';

const dataProvider = simpleRestProvider('http://127.0.0.1:3000');

export const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="candidates" list={CandidateList} create={CandidateCreate} edit={CandidateEdit} />
        <Resource name="elections" list={ElectionList} create={ElectionCreate} edit={ElectionEdit} />
    </Admin>
);

