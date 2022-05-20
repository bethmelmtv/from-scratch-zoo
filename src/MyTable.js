import React from 'react';
import MaterialTable from 'material-table';
// import { data } from './data.js';
import { dataone } from './data.js';

export default function MyTable() {
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'First Name', field: 'name' },
          { title: 'Last Name', field: 'surname' },
          // { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
          // { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } },
        ]}
        data={dataone}
      />
    </div>
  );
}
//
