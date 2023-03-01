import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Checkbox from '@mui/material/Checkbox';
import sampleProj from './project.json'

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const testTags = [
    { tagName: 'Short Story', category: 'Film Type' },
    { tagName: 'Feature Film', category: 'Film Type' },
    { tagName: 'Trailer', category: 'Film Type' },
    { tagName: 'Action', category: 'Genre' },
    { tagName: 'Horror', category: 'Genre' },
    { tagName: 'Romance', category: 'Genre' },
    { tagName: 'Adventure', category: 'Genre' },
    { tagName: 'Comedy', category: 'Genre' },
  ]

const testTags1 = ["Comedy", "Action", "Romance", "Adventure"]



export default function Tags() {
  return (
    <Autocomplete
      multiple
      style={{ width: 500 }}
      id="checkboxes-tags-demo"
      options={testTags1}
      disableCloseOnSelect
      //defaultValue={sampleProj.PushId.details.tags.list.PushId.tagName}
      //groupBy={(option) => option.category}
      getOptionLabel={(option) => option.tagName}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.tagName}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Tags"/> 
      )}
      
    />
  );
}