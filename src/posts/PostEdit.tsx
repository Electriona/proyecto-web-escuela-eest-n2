import {
    BooleanInput,
    DateInput,
    Edit,
    Labeled,
    NumberField,
    ReferenceArrayInput,
    TabbedForm,
    TextInput,
    required,
} from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';
import { Stack } from '@mui/material';

function PostEdit() {
    return (
        <Edit>
            <TabbedForm syncWithLocation={false}>
                <TabbedForm.Tab label="Content">
                    <TextInput
                        source="title"
                        validate={[required()]}
                        fullWidth
                    />
                    <TextInput
                        source="teaser"
                        validate={[required()]}
                        fullWidth
                        multiline
                    />
                    <RichTextInput
                        source="body"
                        validate={[required()]}
                        fullWidth
                    />
                    <Stack direction="row" spacing={4}>
                        <DateInput source="published_at" />
                        <BooleanInput source="commentable" />
                    </Stack>
                    <ReferenceArrayInput
                        label="Tags"
                        reference="tags"
                        source="tags"
                        sortBy="tags.name"
                        sort={{ field: 'name.en', order: 'ASC' }}
                    />
                </TabbedForm.Tab>
                <TabbedForm.Tab label="Stats">
                    <Labeled>
                        <NumberField source="views" />
                    </Labeled>
                    <Labeled>
                        <NumberField source="average_note" />
                    </Labeled>
                </TabbedForm.Tab>
            </TabbedForm>
        </Edit>
    );
}

export default PostEdit;
