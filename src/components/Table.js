import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Edit, CommandColumn } from '@syncfusion/ej2-react-grids';
import  data  from '../data.json';
export default function Table(){

    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, allowEditOnDblClick: false,showDeleteConfirmDialog: true, mode: 'Dialog'};
    const validationRule = { required: true};
    const validRule={required:true,range:[0,1]}
    
    const commands = [
        { type: 'Edit', buttonOption: { iconCss: 'e-icons e-edit', cssClass: 'e-flat-edit' } },
        { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat-delete' } },
        { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
        { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }
      ];
        return <div className='control-pane'>
        <div className='control-section'>
          <GridComponent  dataSource={data} id='gridcomp'  allowPaging={true} pageSettings={{ pageCount: 5 }} editSettings={editSettings}>
            <ColumnsDirective>
              <ColumnDirective field='taskName' headerText='Task Name' width='150' validationRules={validationRule}></ColumnDirective>
              <ColumnDirective field='taskStatus' headerText='Task Status'   width='120'   textAlign='Center' editType='numericedit' validationRules={validRule}></ColumnDirective>
              {/* <ColumnDirective field='taskId' headerText='Task ID' width='120' textAlign='Center' isPrimaryKey={true} validationRules={validationRule}></ColumnDirective> */}
              {/* <ColumnDirective field='parentId' headerText='Parent ID' editType='defaultEdit' format='yMd' width='170'></ColumnDirective> */}
              <ColumnDirective headerText='Actions' width='160' commands={commands}></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Page, CommandColumn, Edit]}/>
          </GridComponent>
      </div>
      </div>
    }
