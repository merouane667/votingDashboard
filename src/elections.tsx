import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, Create, Edit, SimpleForm, TextInput } from "react-admin";

// Election List Component
export const ElectionList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="_id" />
            <TextField source="title" />
            <TextField source="description" />
            <DateField source="startDate" />
            <DateField source="endDate" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <EditButton basePath="/elections" />
            <DeleteButton basePath="/elections" />
        </Datagrid>
    </List>
);

// Election Create Component
export const ElectionCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="description" />
            <TextInput source="startDate" />
            <TextInput source="endDate" />
        </SimpleForm>
    </Create>
);

// Election Edit Component
export const ElectionEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="_id" />
            <TextInput source="title" />
            <TextInput source="description" />
            <TextInput source="startDate" />
            <TextInput source="endDate" />
        </SimpleForm>
    </Edit>
);
