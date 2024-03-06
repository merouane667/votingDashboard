import { List, Datagrid, TextField, EditButton, DeleteButton, Create, Edit, SimpleForm, TextInput, DateField } from "react-admin";

// Candidate List Component
export const CandidateList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="_id" />
            <TextField source="name" />
            <TextField source="party" />
            <TextField source="election" />
            <DateField source="createdAt" />
            <DateField source="updatedAt" />
            <EditButton basePath="/candidates" />
            <DeleteButton basePath="/candidates" />
        </Datagrid>
    </List>
);

// Candidate Create Component
export const CandidateCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="party" />
            <TextInput source="election" />
        </SimpleForm>
    </Create>
);

// Candidate Edit Component
export const CandidateEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled source="_id" />
            <TextInput source="name" />
            <TextInput source="party" />
            <TextInput source="election" />
        </SimpleForm>
    </Edit>
);
